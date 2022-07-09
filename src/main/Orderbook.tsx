import { Component, createMemo, createSignal, JSXElement } from "solid-js";
import { onMount } from "solid-js";
import { theme, DefaultProps, base, asset, short, long, OrderBookData, TileType, Accuracy } from "../config";

import OrderbookTile from "./OrderbookTile";

const height = 16;

interface OrderBookDataFill extends OrderBookData {
  fill?: number;
}

const Orderbook: Component<{ accuracy: Accuracy } & DefaultProps> = (props) => {
  let orderbookDOM: HTMLDivElement | undefined = undefined;
  const [bookSize, setBookSize] = createSignal<number>(0);

  const orderbook_short = createMemo<JSXElement>(() => {
    let total = 0;
    let tillnow = 0;
    let orderbook: OrderBookDataFill[] = short().slice(0, Math.floor(bookSize() / height));

    orderbook.forEach((element) => {
      total += element.volume;
    });

    orderbook.forEach((element) => {
      element.fill = (tillnow + element.volume) / total;
      tillnow += element.volume;
    });

    return orderbook.map<JSXElement>((element) => {
      return (
        <OrderbookTile
          type={TileType.Short}
          accuracy={props.accuracy}
          price={element.price}
          volume={element.volume}
          fill={element.fill * 100}
        ></OrderbookTile>
      );
    });
  });

  const orderbook_long = createMemo<JSXElement>(() => {
    let total = 0;
    let tillnow = 0;
    let orderbook: OrderBookDataFill[] = long().slice(0, Math.floor(bookSize() / height));

    orderbook.forEach((element) => {
      total += element.volume;
    });

    orderbook.forEach((element) => {
      element.fill = (tillnow + element.volume) / total;
      tillnow += element.volume;
    });

    return orderbook.map<JSXElement>((element) => {
      return (
        <OrderbookTile
          type={TileType.Long}
          accuracy={props.accuracy}
          price={element.price}
          volume={element.volume}
          fill={element.fill * 100}
        ></OrderbookTile>
      );
    });
  });

  onMount(() => {
    new ResizeObserver((entries) => {
      if (entries.length === 0 || entries[0].target !== orderbookDOM) {
        return;
      }
      const newRect = entries[0].contentRect;
      setBookSize(newRect.height);
    }).observe(orderbookDOM);
  });

  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col p-1`}>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs font-light px-5">
        <div class="truncate text-left">price</div>
        <div class="truncate text-right">{asset}</div>
        <div class="truncate text-right hidden sm:block">{base}</div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col-reverse overflow-hidden" ref={orderbookDOM}>
          {orderbook_short()}
        </div>
      </div>
      <div class="flex-[0.15] flex flex-row text-xs font-thin px-2">
        <div class="self-center md:block hidden">1 {asset} = </div>
        <div style={{ color: theme.bars.rising }} class="self-center p-2 font-bold text-lg select-none">
          21,958.37
        </div>
        <div class="self-center">{base}</div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col overflow-hidden">{orderbook_long()}</div>
      </div>
    </div>
  );
};

export default Orderbook;
