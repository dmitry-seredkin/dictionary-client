<script lang="ts">
  let className = "";

  export { className as class };
</script>

<button
  class={`rounded bg-orange-500 p-2 font-medium leading-normal text-white transition hover:bg-orange-600 ${className}`}
  on:click
>
  <slot />
</button>
