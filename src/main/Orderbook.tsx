import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { theme, DefaultProps } from "../config";

const Orderbook: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={props.class}>
      <div class="flex-1 bg-blue-500">buyers</div>
      <div class="flex-[0.15] bg-blue-800">price stats</div>
      <div class="flex-1 bg-blue-500">sellers</div>
    </div>
  );
};

export default Orderbook;
