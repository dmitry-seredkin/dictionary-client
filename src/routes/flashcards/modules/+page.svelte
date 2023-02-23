<script lang="ts">
  import { flashcards } from "shared/api";
  import { Link } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  let name = "";
  $: ({ modules } = data);

  const createModule = () =>
    flashcards.createModule(name).then((module) => (modules = [...modules, module]));

  const getModulePath = (id: number): string => `/flashcards/modules/${id}`;
</script>

<section>
  <header>
    <input bind:value={name} />
    <button class="add-button" on:click={createModule}>+</button>
  </header>
  <ul class="list">
    {#each modules as { id, name }}
      <li>
        <Link href={getModulePath(id)}>{name}</Link>
      </li>
    {/each}
  </ul>
</section>

<style lang="less">
  .list {
    display: grid;
  }

  .add-button {
    @side: 1.5rem;
    width: @side;
    height: @side;
  }
</style>
