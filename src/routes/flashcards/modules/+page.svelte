<script lang="ts">
  import { Link } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  const getModulePath = (id: string): string => `/flashcards/modules/${id}`;
</script>

<ul class="list">
  {#each data.modules as { id, name }}
    <li>
      <Link href={getModulePath(id)}>{name}</Link>
    </li>
  {/each}
</ul>

<style lang="less">
  .list {
    display: grid;
  }
</style>
