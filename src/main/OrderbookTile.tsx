import { Component, createSignal } from "solid-js";
import { onMount } from "solid-js";
import { theme, DefaultProps } from "../config";

import Button from "@suid/material/Button";
import { TileType, Accuracy } from "./Orderbook";

const OrderbookTile: Component<{ price: number; volume: number; type: TileType; accuracy: Accuracy; fill: number } & DefaultProps> = (props) => {
  return (
    <Button
      sx={{
        p: 0,
        m: 0,
        cursor: "default",
      }}
      color="primary"
    >
      <div id={props.id} style={props.style} class={`${props.class} grid grid-cols-3 gap-1 text-xs font-light w-full relative`}>
        <div style={{ color: props.type ? theme.bars.falling : theme.bars.rising }} class="truncate text-left font-medium">
          {props.price.toFixed(props.accuracy.price)}
        </div>
        <div class="truncate text-right">{props.volume.toFixed(props.accuracy.volume_asset)}</div>
        <div class="truncate text-right">{(props.price * props.volume).toFixed(props.accuracy.volume_base)}</div>
        <div
          style={{ background: props.type ? theme.bars.falling : theme.bars.rising, left: `${100 - props.fill}%` }}
          class="absolute top-0 bottom-0 right-0 opacity-20"
        ></div>
      </div>
    </Button>
  );
};
export default OrderbookTile;
