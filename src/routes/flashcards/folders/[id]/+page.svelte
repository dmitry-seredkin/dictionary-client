<script lang="ts">
  import { goto } from "$app/navigation";
  import { flashcards } from "shared/api";
  import type { PageData } from "./$types";

  export let data: PageData;

  const deleteFolder = () =>
    flashcards.deleteFolder(data.id).then(() => goto("/flashcards/folders"));
</script>

{#if data}
  <div>{JSON.stringify(data)}</div>
  <button on:click={deleteFolder}>Delete</button>
{:else}
  <p>Entry isn't exist!</p>
{/if}
