<script lang="ts">
  import { clsx } from "clsx";

  let className = "";

  export let autofocus = false;
  export let placeholder = "";
  export let value = "";
  export { className as class };
</script>

<!-- svelte-ignore a11y-autofocus TODO: investigate this problem -->
<textarea
  class={clsx(
    className,
    "scrollable rounded border border-neutral-300 py-2 px-4 leading-normal outline-none outline-offset-0 focus-within:outline-orange-200 hover:outline-orange-300"
  )}
  rows={6}
  {autofocus}
  {placeholder}
  bind:value
/>
