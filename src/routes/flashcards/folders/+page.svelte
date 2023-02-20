<script lang="ts">
  import FolderItem from "entities/folder-item.svelte";
  import { Link } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  const getFolderPath = (id: string): string => `/flashcards/folders/${id}`;
</script>

<ul class="list">
  {#each data.folders as folder}
    <li>
      <Link href={getFolderPath(folder.id)}>
        <FolderItem {folder} />
      </Link>
    </li>
  {/each}
</ul>

<style lang="less">
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
    gap: 1rem;
    padding: 1.5rem; // TODO: variable
  }
</style>
