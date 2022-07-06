import type { Component } from "solid-js";
import { onMount } from "solid-js";

import { createChart } from "lightweight-charts";
import { chartOptions } from "../App";

const Main: Component<{ class: string }> = (props) => {
  let chartDOM: HTMLDivElement | undefined = undefined;

  onMount(() => {
    const chart = createChart(chartDOM as HTMLElement, chartOptions);
    const series = chart.addCandlestickSeries();
    series.setData([
      {time: "2016-04-01", open: 18.23, high: 19.36, low: 18.18, close: 19.31},
      {time: "2016-04-02", open: 19.5, high: 19.89, low: 19.0, close: 19.29},
      {time: "2016-04-03", open: 19.13, high: 19.15, low: 18.43, close: 18.75},
      {time: "2016-04-06", open: 18.54, high: 18.76, low: 18.27, close: 18.76},
      {time: "2016-04-07", open: 18.76, high: 19.14, low: 18.63, close: 18.76},
    ]);

    new ResizeObserver((entries) => {
      if (entries.length === 0 || entries[0].target !== chartDOM) {
        return;
      }
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
      console.log(newRect.height, newRect.width);
    }).observe(chartDOM);
  });

  return (
    <div class={`${props.class} flex flex-row`}>
      <div class="flex-1 truncate relative p-0 m-0">
        <div
          class="absolute top-0 bottom-0 left-0 right-0"
          ref={chartDOM}
        ></div>
      </div>
      <div class="flex-[0.5]"></div>
    </div>
  );
};

export default Main;
