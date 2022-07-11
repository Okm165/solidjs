import { Component, createSignal } from "solid-js";

import { DefaultProps, theme, base_asset, quote_asset } from "../config";

import Button from "@suid/material/Button";
import Input from "./Input";
import Slider from "./Slider";

const Spot: Component<{} & DefaultProps> = (props) => {
  // const [action, setAction] = createSignal<Action>(Action.Buy);
  // const [type, setType] = createSignal<OrderType>(OrderType.Limit);

  return (
    <div id={props.id} style={props.style} class={`${props.class} justify-around p-1`}>
      <div class="flex flex-col p-1 m-1">
        <div class="p-1">
          <Input left={<span>Price</span>} right={<span>{base_asset}</span>}></Input>
          <Input left={<span>Amount</span>} right={<span>{base_asset}</span>}></Input>
          <Input left={<span>Amount</span>} right={<span>{quote_asset}</span>}></Input>
        </div>
        <Slider></Slider>
        <div class="p-2 text-center">
          <Button
            size="small"
            variant="contained"
            sx={{
              px: 4,
              fontSize: 12,
              "&.MuiButton-root": { bgcolor: theme.bars.rising, color: theme.palette.text.disabled },
              "&:hover": { bgcolor: theme.bars.rising, color: theme.palette.text.disabled, filter: "brightness(0.8)" },
              width: "90%",
            }}
          >
            Buy
          </Button>
        </div>
      </div>
      <div class="flex flex-col p-1 m-1">
        <div class="p-1 text">
          <Input left={<span>Price</span>} right={<span>{base_asset}</span>}></Input>
          <Input left={<span>Amount</span>} right={<span>{base_asset}</span>}></Input>
          <Input left={<span>Amount</span>} right={<span>{quote_asset}</span>}></Input>
        </div>
        <Slider></Slider>
        <div class="p-2 text-center">
          <Button
            size="small"
            variant="contained"
            sx={{
              px: 4,
              fontSize: 12,
              "&.MuiButton-root": { bgcolor: theme.bars.falling, color: theme.palette.text.disabled, filter: "brightness(0.9)" },
              "&:hover": { bgcolor: theme.bars.falling, color: theme.palette.text.disabled, filter: "brightness(0.7)" },
              width: "90%",
            }}
          >
            Sell
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Spot;
