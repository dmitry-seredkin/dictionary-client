<script lang="ts">
  import type { Nullable } from "shared/models";

  type T = $$Generic;

  export let data: Nullable<T[]>;
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
  <slot name="fallback">
    <p>{fallback}</p>
  </slot>
{/if}

<style lang="less">
  @import "styles/mixins";

  .list {
    display: grid;
    align-content: flex-start;
    gap: 1rem;
    overflow: auto;

    .scrollable();
  }
</style>
