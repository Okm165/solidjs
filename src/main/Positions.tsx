import { Component, createSignal } from "solid-js";

import { DefaultProps } from "../config";

import ToggleButton from "@suid/material/ToggleButton";
import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";

enum Menu {
  OpenOrders,
  OrderHistory,
  TradeHistory,
  Funds,
}

const Positions: Component<{} & DefaultProps> = (props) => {
  const [menu, setMenu] = createSignal<Menu>(Menu.OpenOrders);

  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col whitespace-nowrap truncate`}>
      <ToggleButtonGroup
        color="primary"
        value={menu()}
        exclusive
        onChange={(event, newAlignment) => {
          setMenu(newAlignment);
        }}
        sx={{ height: "30px", ml: 1, minWidth: 0 }}
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
      <div class="flex-1"></div>
    </div>
  );
};

export default Positions;
