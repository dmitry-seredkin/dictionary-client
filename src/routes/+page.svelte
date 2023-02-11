<script lang="ts">
  import EntryItem from "entities/entry-item.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;

  const getEntryPath = (id: number): string => `/entry/${id}`;
</script>

<ul class="list">
  {#each data.entries as entry}
    <li>
      <a href={getEntryPath(entry.id)}>
        <EntryItem {entry} />
      </a>
    </li>
  {:else}
    <p>Dictionary is empty!</p>
  {/each}
</ul>

<style lang="less">
  .list {
    height: 100%;
    overflow: auto;
    list-style: none;
  }
</style>
