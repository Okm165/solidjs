import { Component, onMount, createSignal } from "solid-js";

import { theme, chartOptions, DefaultProps } from "../config";

import { createChart } from "lightweight-charts";

import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import ToggleButton from "@suid/material/ToggleButton";

enum Type {
  Standard,
  Tick,
}

const Chart: Component<{} & DefaultProps> = (props) => {
  let chartDOM: HTMLDivElement | undefined = undefined;
  const [type, setType] = createSignal<Type>(Type.Standard);

  onMount(() => {
    const chart = createChart(chartDOM as HTMLElement, chartOptions);
    const series = chart.addCandlestickSeries();
    series.setData([
      {
        time: "2016-04-01",
        open: 18.23,
        high: 19.36,
        low: 18.18,
        close: 19.31,
      },
      { time: "2016-04-02", open: 19.5, high: 19.89, low: 19.0, close: 19.29 },
      {
        time: "2016-04-03",
        open: 19.13,
        high: 19.15,
        low: 18.43,
        close: 18.75,
      },
      {
        time: "2016-04-06",
        open: 18.54,
        high: 18.76,
        low: 18.27,
        close: 18.76,
      },
      {
        time: "2016-04-07",
        open: 18.76,
        high: 19.14,
        low: 18.63,
        close: 18.76,
      },
    ]);

    new ResizeObserver((entries) => {
      if (entries.length === 0 || entries[0].target !== chartDOM) {
        return;
      }
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    }).observe(chartDOM);
  });

  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col`}>
      <div class="flex flex-row-reverse pr-12">
        <div class="p-1">
          <ToggleButtonGroup
            color="primary"
            value={type()}
            exclusive
            onChange={(event, newAlignment) => {
              setType(newAlignment);
            }}
            sx={{ height: "20px"}}
          >
            <ToggleButton
              size="small"
              color="primary"
              sx={{
                px: 3,
                fontSize: 9,
              }}
              value={Type.Standard}
            >
              Standard
            </ToggleButton>
            <ToggleButton
              size="small"
              color="primary"
              sx={{
                px: 3,
                fontSize: 9,
              }}
              value={Type.Tick}
            >
              Tick
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div class="flex-1 truncate relative">
        <div class="absolute top-0 bottom-0 left-0 right-0" ref={chartDOM}></div>
      </div>
    </div>
  );
};

export default Chart;
