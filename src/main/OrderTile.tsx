import { Component } from "solid-js";

import { DefaultProps, theme } from "../config";

import ClearIcon from "@suid/icons-material/Clear";
import EditIcon from "@suid/icons-material/Edit";
import IconButton from "@suid/material/IconButton";

const OrderTile: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} grid grid-cols-11 gap-1 py-2 my-1 items-center justify-center bg-slate-900`}>
      <div class="truncate">Spot Pairs</div>
      <div class="truncate">Order Type</div>
      <div class="truncate">Direction</div>
      <div class="truncate">Order Value</div>
      <div class="truncate">Order Price </div>
      <div class="truncate">Order Qty</div>
      <div class="truncate">Filled Qty</div>
      <div class="truncate">Unfilled Qty</div>
      <div class="truncate">Order Time</div>
      <div class="truncate">Order ID</div>
      <div class="flex flex-row truncate justify-center">
        <IconButton size="small">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            "&:hover": {
              color: theme.bars.falling,
            },
          }}
        >
          <ClearIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default OrderTile;
