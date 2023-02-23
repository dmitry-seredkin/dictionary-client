<script lang="ts">
  type T = $$Generic;

  export let data: T[];
  export let fallback = "List is empty";
</script>

<ul class="list">
  {#each data as item, index}
    <li class="item">
      <slot name="item" {item} {index}>{JSON.stringify(item)}</slot>
    </li>
  {:else}
    <p>{fallback}</p>
  {/each}
</ul>

<style lang="less">
  .list {
    display: grid;
    align-content: flex-start;
    gap: 1rem;
    height: 100%;
    padding: 2rem 1.5rem;
    overflow: auto;
  }
</style>
