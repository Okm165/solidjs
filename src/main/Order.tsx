import { Component, For } from "solid-js";
import { createStore } from "solid-js/store";
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

export interface Order {
  spot_pairs: string;
  order_type: OrderType;
  direction: string;
  order_value: number;
  order_price: number;
  order_qty: number;
  filled_qty: number;
  unfilled_qty: number;
  order_time: string;
  order_id: number;
}

export interface OrdersStore {
  menu: Menu;
  orders: Array<Order>;
}

export const [store, setStore] = createStore<OrdersStore>({
  menu: Menu.OpenOrders,
  orders: [],
});

const Positions: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col truncate ml-1`}>
      <div>
        <ToggleButtonGroup
          color="primary"
          value={store.menu}
          exclusive
          onChange={(event, newAlignment) => {
            setStore("menu", newAlignment);
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
        <For each={store.orders}>
          {(el, i) => (
            <OrderTile
              spot_pairs={el.spot_pairs}
              order_type={el.order_type}
              direction={el.direction}
              order_value={el.order_value}
              order_price={el.order_price}
              order_qty={el.order_qty}
              filled_qty={el.filled_qty}
              unfilled_qty={el.unfilled_qty}
              order_time={el.order_time}
              order_id={el.order_id}
            ></OrderTile>
          )}
        </For>
      </div>
    </div>
  );
};

export default Positions;
