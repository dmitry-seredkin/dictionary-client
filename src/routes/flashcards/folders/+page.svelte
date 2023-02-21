<script lang="ts">
  import FolderItem from "entities/folder-item.svelte";
  import { Link } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ folders } = data);
  let name = "";

  const createFolder = () => {
    fetch("http://localhost:3000/api/v1/flashcards/folders", {
      method: "POST",
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((folder) => (folders = folders.concat(folder)));
  };

  const getFolderPath = (id: string): string => `/flashcards/folders/${id}`;
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
