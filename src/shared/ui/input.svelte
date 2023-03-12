<script lang="ts">
  let className = "";

  export let autofocus = false;
  export let placeholder = "";
  export let value = "";
  export { className as class };
</script>

<!-- svelte-ignore a11y-autofocus TODO: investigate this problem -->
<input
  class={`rounded py-2 px-4 leading-normal outline-none outline-offset-0 focus-within:outline-orange-200 hover:outline-orange-300 ${className}`}
  {autofocus}
  {placeholder}
  bind:value
/>
