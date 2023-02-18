<script lang="ts">
  import EntryItem from "entities/entry-item.svelte";
  import { Link } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  const getEntryPath = (id: number): string => `/entries/${id}`;
</script>

<ul class="list">
  {#each data.entries as entry, index}
    <li>
      <Link href={getEntryPath(entry.id)}>
        <EntryItem {entry} index={index + 1} />
      </Link>
    </li>
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
