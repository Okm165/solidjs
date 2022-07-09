import { Component, createSignal } from "solid-js";

import { DefaultProps, theme } from "../config";

import ToggleButtonGroup from "@suid/material/ToggleButtonGroup";
import ToggleButton from "@suid/material/ToggleButton";

enum Action {
  Buy,
  Sell,
}

enum Type {
  Limit,
  Market,
  Conditional,
}

const Spot: Component<{} & DefaultProps> = (props) => {
  const [action, setAction] = createSignal<Action>(Action.Buy);
  const [type, setType] = createSignal<Type>(Type.Limit);

  return (
    <div id={props.id} style={props.style} class={`${props.class} flex flex-col p-1`}>
      <div class="p-1 text-center">
        <ToggleButtonGroup
          color="primary"
          value={action()}
          exclusive
          onChange={(event, newAlignment) => {
            setAction(newAlignment);
          }}
          sx={{ height: "35px", mx: 2, my: 1 }}
        >
          <ToggleButton
            size="small"
            color="primary"
            sx={{
              px: 4,
              fontSize: 15,
              transition: "all 100ms ease-in-out",
              "&.Mui-selected": { color: theme.bars.rising },
            }}
            value={Action.Buy}
          >
            Buy
          </ToggleButton>
          <ToggleButton
            size="small"
            color="primary"
            sx={{
              px: 4,
              fontSize: 15,
              transition: "all 100ms ease-in-out",
              "&.Mui-selected": { color: theme.bars.falling },
            }}
            value={Action.Sell}
          >
            Sell
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div class="p-1 text-center">
        <ToggleButtonGroup
          color="primary"
          value={type()}
          exclusive
          onChange={(event, newAlignment) => {
            setType(newAlignment);
          }}
          sx={{ height: "25px" }}
        >
          <ToggleButton size="small" color="primary" sx={{ px: 2, fontSize: 10 }} value={Type.Limit}>
            Limit
          </ToggleButton>
          <ToggleButton size="small" color="primary" sx={{ px: 2, fontSize: 10 }} value={Type.Market}>
            Market
          </ToggleButton>
          <ToggleButton size="small" color="primary" sx={{ px: 2, fontSize: 10 }} value={Type.Conditional}>
            Conditional
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div class="">
        
      </div>
    </div>
  );
};

export default Spot;
