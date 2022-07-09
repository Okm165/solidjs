import { Component } from "solid-js";

import { theme, DefaultProps, TileType, Accuracy } from "../config";

import Button from "@suid/material/Button";

const TransactionTile: Component<{ price: number; volume: number; type: TileType; accuracy: Accuracy; time: Date } & DefaultProps> = (props) => {
  return (
    <Button
      sx={{
        p: 0,
        m: 0,
        cursor: "default",
      }}
      color="primary"
    >
      <div id={props.id} style={props.style} class={`${props.class} grid grid-cols-2 2xl:grid-cols-3 gap-1 text-xs font-light w-full`}>
        <div style={{ color: props.type ? theme.bars.falling : theme.bars.rising }} class="truncate text-left font-medium">
          {props.price.toFixed(props.accuracy.price)}
        </div>
        <div class="truncate text-right">{props.volume.toFixed(props.accuracy.volume_asset)}</div>
        <div class="truncate text-right hidden 2xl:block">{new Intl.DateTimeFormat("en-GB", { timeStyle: "medium" }).format(props.time)}</div>
      </div>
    </Button>
  );
};
export default TransactionTile;
