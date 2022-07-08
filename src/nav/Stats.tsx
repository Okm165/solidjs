import { Component } from "solid-js";
import { DefaultProps, theme } from "../config";

const Stats: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={props.class}>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden sm:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Zmiana - 24h</div>
        <div class="px-1 text-green-700">772.42 +4.06%</div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden md:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Najwyższa - 24h</div>
        <div class="px-1">20,143.02</div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden md:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Najniższa - 24h</div>
        <div class="px-1">19,055.31</div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden lg:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Wolumen - 24h(BTC)</div>
        <div class="px-1">68,343.19</div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden lg:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Wolumen - 24h(USDT)</div>
        <div class="px-1">1,330,712,881.13</div>
      </div>
    </div>
  );
};

export default Stats;
