<script lang="ts">
  import FolderItem from "entities/folder-item.svelte";
  import { flashcards } from "shared/api";
  import { Link } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ folders } = data);
  let name = "";

  const createFolder = () =>
    flashcards.createFolder(name).then((folder) => (folders = [...folders, folder]));

  const getFolderPath = (id: number): string => `/flashcards/folders/${id}`;
</script>

<section>
  <header>
    <input bind:value={name} />
    <button class="add-button" on:click={createFolder}>+</button>
  </header>
  <ul class="list">
    {#each folders as folder}
      <li>
        <Link href={getFolderPath(folder.id)}>
          <FolderItem {folder} />
        </Link>
      </li>
    {/each}
  </ul>
</section>

<style lang="less">
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6.25rem, 1fr));
    gap: 1rem;
    padding: 1.5rem; // TODO: variable
  }

  .add-button {
    @side: 1.5rem;
    width: @side;
    height: @side;
  }
</style>
