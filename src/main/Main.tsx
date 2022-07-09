import { Component } from "solid-js";
import { DefaultProps } from "../config";

import Chart from "./Chart";
import Positions from "./Positions";
import Orderbook from "./Orderbook";
import Transaction from "./Transaction";
import Spot from "./Spot";

const Main: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-row`}>
      <div class="flex-[0.7] flex flex-col">
        <Chart id="chart" class="flex-[0.8]"></Chart>
        <Positions id="positions" class="flex-[0.2]"></Positions>
      </div>
      <div class="flex-[0.3] flex flex-col">
        <div class="flex-[0.7] flex flex-row">
          <Orderbook id="orderbook" accuracy={{ price: 2, volume_asset: 6, volume_base: 3 }} class="flex-1"></Orderbook>
          <Transaction id="transaction" accuracy={{ price: 2, volume_asset: 6}} class="flex-[0.6] hidden lg:flex pl-2"></Transaction>
        </div>
        <Spot id="spot" class="flex-[0.3] bg-slate-800"></Spot>
      </div>
    </div>
  );
};

export default Main;
