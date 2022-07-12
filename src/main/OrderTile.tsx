import { Component } from "solid-js";
import { DefaultProps, theme } from "../config";
import { Order } from "./Order";
import ClearIcon from "@suid/icons-material/Clear";
import EditIcon from "@suid/icons-material/Edit";
import IconButton from "@suid/material/IconButton";

const OrderTile: Component<{} & Order & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} grid grid-cols-11 gap-1 py-2 my-1 items-center justify-center bg-slate-900`}>
      <div class="truncate">{props.spot_pairs}</div>
      <div class="truncate">{props.order_type}</div>
      <div class="truncate">{props.direction}</div>
      <div class="truncate">{props.order_value}</div>
      <div class="truncate">{props.order_price}</div>
      <div class="truncate">{props.order_qty}</div>
      <div class="truncate">{props.filled_qty}</div>
      <div class="truncate">{props.unfilled_qty}</div>
      <div class="truncate">{props.order_time}</div>
      <div class="truncate">{props.order_id}</div>
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
