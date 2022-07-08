import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { theme, DefaultProps } from "../config";

const Spot: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={props.class}>
      spot buy sell buttons
    </div>
  );
};

export default Spot;
