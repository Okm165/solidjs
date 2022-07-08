import { Component, createSignal } from "solid-js";
import { onMount } from "solid-js";
import { theme, DefaultProps } from "../config";

const TransactionsTile: Component<{} & DefaultProps> = (props) => {
  return <div id={props.id} style={props.style} class={props.class}></div>;
};

export default TransactionsTile;
