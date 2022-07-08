import type { Component } from "solid-js";
import { onMount } from "solid-js";
import { createChart } from "lightweight-charts";
import { theme, chartOptions, DefaultProps } from "../config";

import Chart from "./Chart";
import Positions from "./Positions";
import Orderbook from "./Orderbook";
import Transactions from "./Transactions";
import Spot from "./Spot";

const Main: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-row`}>
      <div class="flex-[0.7] flex flex-col">
        <Chart id="chart" class="flex-[0.8]"></Chart>
        <Positions id="positions" class="flex-[0.2] bg-red-800"></Positions>
      </div>
      <div class="flex-[0.3] flex flex-col">
        <div class="flex-[0.7] flex flex-row">
          <Orderbook id="orderbook" class="flex-1 flex flex-col"></Orderbook>
          <Transactions id="transactions" class="flex-[0.7_0_0] hidden lg:block bg-purple-700"></Transactions>
        </div>
        <Spot id="spot" class="flex-[0.3] bg-green-700"></Spot>
      </div>
    </div>
  );
};

export default Main;
