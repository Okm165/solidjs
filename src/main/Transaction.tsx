import type { Component, JSXElement } from "solid-js";
import { onMount, createSignal, createMemo } from "solid-js";
import { theme, DefaultProps, TileType, Accuracy, base, asset, transactions, TransactionData } from "../config";

import TransactionTile from "./TransactionTile";

const height = 16;

const Transactions: Component<{ accuracy: Accuracy } & DefaultProps> = (props) => {
  const date = new Date(Date.now());
  let transactionDOM: HTMLDivElement | undefined = undefined;
  const [size, setSize] = createSignal<number>(0);

  const transactionparse = createMemo<JSXElement>(() => {
    let transactionset: TransactionData[] = transactions().slice(0, Math.floor(size() / height));

    return transactionset.map<JSXElement>((element) => {
      return (
        <TransactionTile type={element.type} accuracy={props.accuracy} price={element.price} volume={element.volume} time={date}></TransactionTile>
      );
    });
  });

  onMount(() => {
    new ResizeObserver((entries) => {
      if (entries.length === 0 || entries[0].target !== transactionDOM) {
        return;
      }
      const newRect = entries[0].contentRect;
      setSize(newRect.height);
    }).observe(transactionDOM);
  });

  return (
    <div id={props.id} style={props.style} class={`${props.class} flex-col p-1`}>
      <div class="grid grid-cols-2 2xl:grid-cols-3 gap-1 text-xs font-light px-5">
        <div class="truncate text-left">price</div>
        <div class="truncate text-right">{asset}</div>
        <div class="truncate text-right hidden 2xl:block">time</div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col overflow-hidden" ref={transactionDOM}>
          {transactionparse()}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
