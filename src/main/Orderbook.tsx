import { Component, createEffect, createMemo, createSignal, For, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { theme, DefaultProps, base_asset, quote_asset, TileType } from "../config";
import OrderbookTile, { height } from "./OrderbookTile";

export interface OrderBookData {
  price: number;
  volume: number;
}

export interface OrderBookDataFill extends OrderBookData {
  fill?: number;
}

export interface orderbookStore {
  capacity: number;
  price: number;
  priceTileType: TileType;
  spread: number;
}

export const [store, setStore] = createStore<orderbookStore>({
  capacity: null,
  price: null,
  priceTileType: null,
  spread: null,
});

export const [short, setShort] = createSignal<OrderBookData[]>([]);
export const [long, setLong] = createSignal<OrderBookData[]>([]);

const Orderbook: Component<{} & DefaultProps> = (props) => {
  let orderbookDOM: HTMLDivElement | undefined = undefined;

  const shortElements = createMemo<OrderBookDataFill[]>(() => {
    let total = 0;
    let tillnow = 0;
    let elements: OrderBookDataFill[] = short().slice(0, store.capacity);

    elements.forEach((element) => {
      total += element.volume;
    });

    elements.forEach((element) => {
      element.fill = (tillnow + element.volume) / total;
      tillnow += element.volume;
    });

    return elements;
  });

  const longELements = createMemo<OrderBookDataFill[]>(() => {
    let total = 0;
    let tillnow = 0;
    let elements: OrderBookDataFill[] = long().slice(0, store.capacity);

    elements.forEach((element) => {
      total += element.volume;
    });

    elements.forEach((element) => {
      element.fill = (tillnow + element.volume) / total;
      tillnow += element.volume;
    });

    return elements;
  });

  createEffect(() => {
    if (long().length > 0 && short().length > 0) {
      setStore("spread", long()[0].price - short()[0].price);
    } else {
      setStore("spread", null);
    }
  });

  onMount(() => {
    new ResizeObserver((entries) => {
      const newRect = entries[0].contentRect;
      const newCapacity = Math.floor(newRect.height / height);
      if (newCapacity != store.capacity) {
        setStore("capacity", newCapacity);
      }
    }).observe(orderbookDOM);
  });

  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col px-2`}>
      <div class="grid grid-cols-3 gap-1 text-xs font-light px-5 p-1">
        <div class="truncate mx-4 text-left">price</div>
        <div class="truncate mx-4 text-right">{base_asset}</div>
        <div class="truncate mx-4 text-right">{quote_asset}</div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col-reverse overflow-hidden" ref={orderbookDOM}>
          <For each={shortElements()}>
            {(el, i) => <OrderbookTile type={TileType.Short} price={el.price} volume={el.volume} fill={el.fill * 100}></OrderbookTile>}
          </For>
        </div>
      </div>
      <div class="flex flex-row text-xs items-center justify-start font-thin px-2">
        <div class="flex flex-row items-center px-2">
          <div class="truncate">1 {base_asset} = </div>
          <div style={{ color: store.priceTileType ? theme.bars.falling : theme.bars.rising }} class="p-2 font-bold text-lg">
            {store.price ? store.price : "---"}
          </div>
          <div>{quote_asset}</div>
        </div>
        <div class="hidden lg:flex flex-row items-center">
          <div>spread:</div>
          <div class="p-2 font-bold text-md">{store.spread ? store.spread : "---"}</div>
        </div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col overflow-hidden">
          <For each={longELements()}>
            {(el, i) => <OrderbookTile type={TileType.Long} price={el.price} volume={el.volume} fill={el.fill * 100}></OrderbookTile>}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Orderbook;
