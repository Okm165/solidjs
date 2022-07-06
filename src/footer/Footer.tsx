import type { Component } from "solid-js";
import { theme } from "../App";

const Footer: Component<{class: string}> = (props) => {
  return ( 
    <div class={`${props.class} text-center text-sm p-0.5 text-gray-500`}>cebulion footer text</div>
  )
};

export default Footer;
