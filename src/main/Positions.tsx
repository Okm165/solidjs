import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { theme, DefaultProps } from "../config";

const Positions: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={props.class}>
      positions
    </div>
  );
};

export default Positions;
