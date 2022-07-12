import { Accessor, Component, createSignal, JSXElement } from "solid-js";

import { theme, DefaultProps } from "../config";

const Input: Component<{ left?: JSXElement; right?: JSXElement; onkeyup?: (e: KeyboardEvent) => void; value?: Accessor<string> } & DefaultProps> = (props) => {
  let inputDOM: HTMLInputElement | undefined = undefined;

  const [focused, setFocused] = createSignal<boolean>(false);

  return (
    <div
      id={props.id}
      style={{
        ...props.style,
        color: theme.palette.text.primary,
        "border-color": `${focused() ? theme.palette.primary.dark : "#00000000"}`,
      }}
      class={`${props.class} flex flex-row m-1 my-2 p-1 text-sm items-center cursor-text border rounded-sm bg-slate-900`}
      onclick={(e) => {
        inputDOM.focus();
      }}
    >
      <div class="text-center text-xs min-w-[50px]">{props.left}</div>
      <div class="flex-1 text-right">
        <input
          class="w-full max-w-[150px] bg-transparent text-right outline-none p-1"
          type="text"
          spellcheck={false}
          ref={inputDOM}
          value={props.value ? props.value() : null}
          onBlur={(e) => {
            setFocused(false);
          }}
          onkeyup={props.onkeyup}
          onFocus={(e) => {
            setFocused(true);
          }}
        ></input>
      </div>
      <div class="text-center text-xs min-w-[50px]">{props.right}</div>
    </div>
  );
};

export default Input;
