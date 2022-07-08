import type { Component } from "solid-js";
import { DefaultProps, theme } from "../config";

const Footer: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} text-center text-sm p-0.5 text-gray-500`}>
      cebulion footer text
    </div>
  );
};

export default Footer;
