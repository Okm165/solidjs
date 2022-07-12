import { Component, JSXElement, onMount, createSignal, createMemo } from "solid-js";

import { base_asset, DefaultProps, quote_asset, TileType, tradesCircularBufferSize } from "../config";

import CircularBuffer from "circular-buffer";

import TradeTile, { height } from "./TradeTile";

export interface TradeData {
  price: number;
  volume: number;
  type: TileType;
  time: Date;
}

export const circbuf = new CircularBuffer(tradesCircularBufferSize);
export const [tradesList, setTradesList] = createSignal<TradeData[]>([]);
export const [capacity, setCapacity] = createSignal<number>(0);

export const push = (trade: TradeData) => {
  circbuf.enq(trade);
  setTradesList(circbuf.toarray());
};

export const trigger_display = () => {
  setTradesList(circbuf.toarray());
};

const Trades: Component<{} & DefaultProps> = (props) => {
  let tradesDOM: HTMLDivElement | undefined = undefined;

  const display = () => {
    return tradesList()
      .slice(0, capacity())
      .map<JSXElement>((element) => {
        return <TradeTile price={element.price} volume={element.volume} type={element.type} time={element.time}></TradeTile>;
      });
  };

  const tradesElements = createMemo<JSXElement>(display);

  onMount(() => {
    new ResizeObserver((entries) => {
      const newRect = entries[0].contentRect;
      const newCapacity = Math.floor(newRect.height / height);
      if (newCapacity != capacity()) {
        setCapacity(newCapacity);
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
          {tradesElements()}
        </div>
      </div>
    </div>
  );
};

export default Trades;
