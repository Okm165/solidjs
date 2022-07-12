import { Component, createSignal } from "solid-js";

import { DefaultProps, theme } from "../config";

import ToggleButton from "@suid/material/ToggleButton";
import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import OrderTile from "./OrderTile";

export enum Menu {
  OpenOrders,
  OrderHistory,
  TradeHistory,
}

export enum OrderType {
  Limit,
  Conditional,
}

export const [menu, setMenu] = createSignal<Menu>(Menu.OpenOrders);

const Positions: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col truncate ml-1`}>
      <div>
        <ToggleButtonGroup
          color="primary"
          value={menu()}
          exclusive
          onChange={(event, newAlignment) => {
            setMenu(newAlignment);
          }}
          sx={{ height: "30px", minWidth: 0 }}
        >
          <ToggleButton size="small" color="primary" sx={{ px: 2, fontSize: 12 }} value={Menu.OpenOrders}>
            Open Orders
          </ToggleButton>
          <ToggleButton size="small" color="primary" sx={{ px: 2, fontSize: 12 }} value={Menu.OrderHistory}>
            Order History
          </ToggleButton>
          <ToggleButton size="small" color="primary" sx={{ px: 2, fontSize: 12 }} value={Menu.TradeHistory}>
            Trade History
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div class="grid grid-cols-11 gap-1 font-thin p-1 text-center text-xs pr-2 mt-1" style={{ color: theme.palette.text.primary }}>
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
        <div class="truncate">Action</div>
      </div>
      <div class="flex-1 flex flex-col p-1 text-center text-xs overflow-y-scroll">
        <OrderTile></OrderTile>
        <OrderTile></OrderTile>
        <OrderTile></OrderTile>
        <OrderTile></OrderTile>
        <OrderTile></OrderTile>
        <OrderTile></OrderTile>
        <OrderTile></OrderTile>
      </div>
    </div>
  );
};

export default Positions;
