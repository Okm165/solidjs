import { Component, JSXElement, onMount, createSignal, createMemo } from "solid-js";

import { DefaultProps, Accuracy, asset, transactions, TransactionData } from "../config";

import TransactionTile from "./TransactionTile";

import { height } from "./TransactionTile";

const Transactions: Component<{ accuracy: Accuracy } & DefaultProps> = (props) => {
  const date = new Date(Date.now());
  let transactionDOM: HTMLDivElement | undefined = undefined;
  const [size, setSize] = createSignal<number>(0);

  const transactionparse = createMemo<JSXElement>(() => {
    let transactionset: TransactionData[] = transactions().slice(0, Math.floor(size() / height));

    return transactionset.map<JSXElement>((element) => {
      return (
        <TransactionTile type={element.type} accuracy={props.accuracy} price={element.price} volume={element.volume} time={element.time}></TransactionTile>
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
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col px-2`}>
      <div class="grid grid-cols-3 gap-1 text-xs font-light px-5 p-1">
        <div class="truncate mx-4 text-left">price</div>
        <div class="truncate mx-4 text-right">{asset}</div>
        <div class="truncate mx-4 text-right">time</div>
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
