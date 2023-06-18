<script lang="ts">
  import { clsx } from "clsx";

  export let clickable = false;
  export let index: number;
  export let partOfSpeech = "";
  export let sense = "";
  export let term: string;
</script>

<div
  class={clsx(
    "flex justify-between rounded bg-white px-8 py-4",
    clickable && "cursor-pointer hover:bg-neutral-50"
  )}
>
  <p class="grid grid-flow-col whitespace-nowrap">
    <span>{++index}</span>
    <span class="ml-8 font-bold">{term} </span>
    {#if partOfSpeech}
      <span class="ml-4 text-neutral-400">{partOfSpeech}</span>
    {/if}
    {#if sense}
      <span class="mx-2">&mdash;</span>
      <span class="overflow-hidden text-ellipsis">{sense}</span>
    {/if}
  </p>
  <slot />
</div>
