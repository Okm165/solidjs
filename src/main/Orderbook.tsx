import { Component, createEffect, createMemo, createSignal, JSXElement, onMount } from "solid-js";

import { theme, DefaultProps, base_asset, quote_asset, TileType } from "../config";

import OrderbookTile, { height } from "./OrderbookTile";

export interface OrderBookData {
  price: number;
  volume: number;
}

export interface OrderBookDataFill extends OrderBookData {
  fill?: number;
}

export const [capacity, setCapacity] = createSignal<number>(0);
export const [orderbookShortList, setOrderBookShortList] = createSignal<OrderBookData[]>([]);
export const [orderbookLongList, setOrderbookLongList] = createSignal<OrderBookData[]>([]);
export const [price, setPrice] = createSignal<number>();
export const [priceTileType, setPriceTileType] = createSignal<TileType>(TileType.Long);
export const [spread, setSpread] = createSignal<number>();

const Orderbook: Component<{} & DefaultProps> = (props) => {
  let orderbookDOM: HTMLDivElement | undefined = undefined;

  const orderbookShortElements = createMemo<JSXElement>(() => {
    let total = 0;
    let tillnow = 0;
    let orderbook: OrderBookDataFill[] = orderbookShortList().slice(0, capacity());

    orderbook.forEach((element) => {
      total += element.volume;
    });

    orderbook.forEach((element) => {
      element.fill = (tillnow + element.volume) / total;
      tillnow += element.volume;
    });

    return orderbook.map<JSXElement>((element) => {
      return <OrderbookTile type={TileType.Short} price={element.price} volume={element.volume} fill={element.fill * 100}></OrderbookTile>;
    });
  });

  const orderbookLongElements = createMemo<JSXElement>(() => {
    let total = 0;
    let tillnow = 0;
    let orderbook: OrderBookDataFill[] = orderbookLongList().slice(0, capacity());

    orderbook.forEach((element) => {
      total += element.volume;
    });

    orderbook.forEach((element) => {
      element.fill = (tillnow + element.volume) / total;
      tillnow += element.volume;
    });

    return orderbook.map<JSXElement>((element) => {
      return <OrderbookTile type={TileType.Long} price={element.price} volume={element.volume} fill={element.fill * 100}></OrderbookTile>;
    });
  });

  createEffect(() => {
    if (orderbookLongList().length > 0 && orderbookShortList().length > 0) {
      setSpread(orderbookLongList()[0].price - orderbookShortList()[0].price);
    }
    else {
      setSpread(undefined);
    }
  })

  onMount(() => {
    new ResizeObserver((entries) => {
      const newRect = entries[0].contentRect;
      const newCapacity = Math.floor(newRect.height / height);
      if (newCapacity != capacity()) {
        setCapacity(newCapacity);
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
          {orderbookShortElements()}
        </div>
      </div>
      <div class="flex flex-row text-xs items-center justify-start font-thin px-2">
        <div class="flex flex-row items-center px-2">
          <div class="truncate">1 {base_asset} = </div>
          <div style={{ color: priceTileType() ? theme.bars.falling : theme.bars.rising }} class="p-2 font-bold text-lg">
            {price() ? price() : "---"}
          </div>
          <div>{quote_asset}</div>
        </div>
        <div class="hidden lg:flex flex-row items-center">
          <div>spread:</div>
          <div class="p-2 font-bold text-md">{spread() ? spread() : "---"}</div>
        </div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col overflow-hidden">{orderbookLongElements()}</div>
      </div>
    </div>
  );
};

export default Orderbook;
