import { Component, onMount, For, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { base_asset, DefaultProps, TileType, tradesCircularBufferSize } from "../config";
import CircularBuffer from "circular-buffer";
import TradeTile, { height } from "./TradeTile";

export interface TradeData {
  price: number;
  volume: number;
  type: TileType;
  time: Date;
}

export interface TradeStore {
  capacity: number;
}

export const [store, setStore] = createStore<TradeStore>({
  capacity: null,
});

export const [trades, setTrades] = createSignal<TradeData[]>([]);

const circbuf = new CircularBuffer(tradesCircularBufferSize);

export const push = (trade: TradeData) => {
  circbuf.enq(trade);
  setTrades(circbuf.toarray());
};

export const trigger_display = () => {
  setTrades(circbuf.toarray());
};

const Trades: Component<{} & DefaultProps> = (props) => {
  let tradesDOM: HTMLDivElement | undefined = undefined;

  onMount(() => {
    new ResizeObserver((entries) => {
      const newRect = entries[0].contentRect;
      const newCapacity = Math.floor(newRect.height / height);
      if (newCapacity != store.capacity) {
        setStore("capacity", newCapacity);
      }
    }).observe(tradesDOM);
  });

  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col px-2`}>
      <div class="grid grid-cols-3 gap-1 text-xs font-light px-5 p-1">
        <div class="truncate mx-4 text-left">price</div>
        <div class="truncate mx-4 text-right">{base_asset}</div>
        <div class="truncate mx-4 text-right">time</div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col overflow-hidden" ref={tradesDOM}>
          <For each={trades()}>{(el, i) => <TradeTile price={el.price} volume={el.volume} type={el.type} time={el.time}></TradeTile>}</For>
        </div>
      </div>
    </div>
  );
};

export default Trades;
