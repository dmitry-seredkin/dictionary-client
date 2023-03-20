<script lang="ts" context="module">
  export type ButtonType = "button" | "submit" | "reset";
  export type ButtonVariant = "primary" | "secondary";
</script>

<script lang="ts">
  import { clsx } from "clsx";

  let className = "";

  export let disabled = false;
  export let type: ButtonType = "button";
  export let variant: ButtonVariant = "primary";
  export { className as class };
</script>

<button
  {type}
  class={clsx(
    className,
    "rounded  p-2 font-medium leading-normal text-white transition",
    disabled
      ? "bg-stone-300 pointer-events-none"
      : {
          "bg-orange-500 hover:bg-orange-600": variant === "primary",
          "bg-stone-400 hover:bg-stone-500": variant === "secondary",
        }
  )}
  on:click
>
  <slot />
</button>
