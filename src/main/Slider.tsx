import { Component, JSXElement } from "solid-js";
import { theme, DefaultProps } from "../config";

const Slider: Component<{ left?: JSXElement; right?: JSXElement } & DefaultProps> = (props) => {
  let sliderDOM: HTMLInputElement | undefined = undefined;
  let popupDOM: HTMLInputElement | undefined = undefined;

  function handler(this: HTMLInputElement, e: Event) {
    const sliderRect = this.getBoundingClientRect();
    const popupRect = popupDOM.getBoundingClientRect();
    const left = sliderRect.left + (sliderRect.width * parseInt(this.value)) / 100 - popupRect.width / 2;
    popupDOM.style.left = left + "px";
    popupDOM.innerHTML = this.value + "%";
  }

  const mousedown = (e: MouseEvent) => {
    popupDOM.innerHTML = sliderDOM.value + "%";
    popupDOM.style.display = "block";
    const sliderRect = sliderDOM.getBoundingClientRect();
    const popupRect = popupDOM.getBoundingClientRect();
    const left = sliderRect.left + (sliderRect.width * parseInt(sliderDOM.value)) / 100 - popupRect.width / 2;
    popupDOM.style.top = sliderRect.top - popupRect.height - 5 + "px";
    popupDOM.style.left = left + "px";
    sliderDOM.addEventListener("input", handler);
  };
  const mouseup = (e: MouseEvent) => {
    popupDOM.style.display = "none";
    sliderDOM.removeEventListener("input", handler);
  };

  return (
    <div
      id={props.id}
      style={{
        ...props.style,
        color: theme.palette.text.primary,
      }}
      class={`${props.class} flex flex-row items-center relative`}
      onclick={(e) => {}}
    >
      <div class="fixed bg-slate-700 hidden text-sm rounded-sm" ref={popupDOM}></div>
      <div class="text-center">{props.left}</div>
      <div class="flex-1 text-center">
        <input
          class="w-[90%] outline-none slider"
          type="range"
          min="0"
          max="100"
          value="0"
          ref={sliderDOM}
          onmousedown={(e) => {
            mousedown(e);
          }}
          onmouseup={(e) => {
            mouseup(e);
          }}
        ></input>
      </div>
      <div class="text-center">{props.right}</div>
    </div>
  );
};

export default Slider;
