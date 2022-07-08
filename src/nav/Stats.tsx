import { Component } from "solid-js";
import { DefaultProps, theme, base, asset } from "../config";

const Stats: Component<{} & DefaultProps> = (props) => {
  return (
    <div id={props.id} style={props.style} class={props.class}>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden sm:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Change - 24h</div>
        <div style={{ color: theme.bars.rising }} class="px-1">
          772.42 +4.06%
        </div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden md:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Highest - 24h</div>
        <div class="px-1">20,143.02</div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden md:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Lowest - 24h</div>
        <div class="px-1">19,055.31</div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden lg:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Volume - 24h({asset})</div>
        <div class="px-1">68,343.19</div>
      </div>
      <div class="flex-col justify-between items-start text-xs font-light mx-2 hidden lg:inline-flex" style={{ color: theme.palette.text.secondary }}>
        <div class="font-normal p-1">Volume - 24h({base})</div>
        <div class="px-1">1,330,712,881.13</div>
      </div>
    </div>
  );
};

export default Stats;
