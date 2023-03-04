<script lang="ts">
  type T = $$Generic;

  export let promise: Promise<T>;
</script>

{#if promise}
  {#await promise}
    <slot name="loader">
      <p>Loading...</p>
    </slot>
  {:then value}
    <slot name="result" {value}>
      <p class="result">{JSON.stringify(value, null, 2)}</p>
    </slot>
  {:catch error}
    <slot name="error" {error}>
      <p class="error">Oops! It seems like something went wrong</p>
    </slot>
  {/await}
{:else}
  <slot name="placeholder" />
{/if}

<style lang="less">
  .result {
    white-space: pre;
  }

  .error {
    color: red;
  }
</style>
