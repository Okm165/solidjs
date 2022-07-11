import { Component } from "solid-js";
import { DefaultProps } from "../config";

import Chart from "./Chart";
import Orders from "./Orders";
import Orderbook from "./Orderbook";
import Trades from "./Trades";
import Spot from "./Spot";

import "../index.css";

const Main: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-row`}>
      <div class="flex-1 flex flex-col">
        <Chart id="chart" class="flex-[0.75]"></Chart>
        <Orders id="positions" class="flex-[0.25]"></Orders>
      </div>
      <div class="flex flex-col">
        <div class="flex-1 flex-row hidden md:flex">
          <Orderbook id="orderbook" accuracy={{ price: 2, volume_asset: 6, volume_base: 3 }} class="flex-1"></Orderbook>
          <Trades id="transaction" accuracy={{ price: 2, volume_asset: 6 }} class=""></Trades>
        </div>
        <Spot id="spot" class="flex flex-col md:flex-row"></Spot>
      </div>
    </div>
  );
};

export default Main;
