import { Component } from "solid-js";
import { DefaultProps, theme } from "../config";

import Chart from "./Chart";
import Positions from "./Positions";
import Orderbook from "./Orderbook";
import Transaction from "./Transaction";
import Spot from "./Spot";

import "../index.css";

const Main: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-row`}>
      <div class="flex-1 flex flex-col">
        <Chart id="chart" class="flex-[0.75]"></Chart>
        <Positions id="positions" class="flex-[0.25]"></Positions>
      </div>
      <div
        class="flex flex-col"
        // style={{
        //   "border-left-color": `${theme.borders.main}`,
        //   "border-left-width": "2px",
        //   "border-left-style": "solid",
        // }}
      >
        <div
          class="flex-1 flex-row hidden md:flex"
          // style={{
          //   "border-bottom-color": `${theme.borders.main}`,
          //   "border-bottom-width": "2px",
          //   "border-bottom-style": "solid",
          // }}
        >
          <Orderbook id="orderbook" accuracy={{ price: 2, volume_asset: 6, volume_base: 3 }} class="flex-1"></Orderbook>
          <Transaction id="transaction" accuracy={{ price: 2, volume_asset: 6 }} class=""></Transaction>
        </div>
        <Spot id="spot" class="flex flex-col md:flex-row"></Spot>
      </div>
    </div>
  );
};

export default Main;
