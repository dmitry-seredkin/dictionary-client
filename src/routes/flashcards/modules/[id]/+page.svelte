<script lang="ts">
  import { goto } from "$app/navigation";
  import { flashcards } from "shared/api";
  import type { PageData } from "./$types";

  export let data: PageData;

  const deleteModule = () =>
    flashcards.deleteModule(data.id).then(() => goto("/flashcards/modules"));
</script>

{#if data}
  <div>{JSON.stringify(data)}</div>
  <button on:click={deleteModule}>Delete</button>
{:else}
  <p>Entry isn't exist!</p>
{/if}
