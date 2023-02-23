<script lang="ts">
  type T = $$Generic;

  export let data: T[];
  export let fallback = "List is empty";
</script>

{#if data}
  <ul class="list">
    {#each data as item, index}
      <li class="item">
        <slot name="item" {item} {index}>{JSON.stringify(item)}</slot>
      </li>
    {/each}
  </ul>
{:else}
  <p>{fallback}</p>
{/if}

<style lang="less">
  .list {
    display: grid;
    align-content: flex-start;
    gap: 1rem;
    height: 100%;
    overflow: auto;
  }
</style>
