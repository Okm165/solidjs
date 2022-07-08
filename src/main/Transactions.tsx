import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { theme, DefaultProps } from "../config";

const Transactions: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={props.class}>
      transaction list
    </div>
  );
};

export default Transactions;
