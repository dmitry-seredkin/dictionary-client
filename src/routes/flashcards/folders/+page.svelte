<script lang="ts">
  import { Link } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  const getFolderPath = (id: string): string => `/flashcards/folders/${id}`;
</script>

<ul class="list">
  {#each data.folders as { id, name }}
    <li>
      <Link href={getFolderPath(id)}>{name}</Link>
    </li>
  {/each}
</ul>

<style lang="less">
  .list {
    display: grid;
  }
</style>
