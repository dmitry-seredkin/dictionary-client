<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  const deleteFolder = () => {
    fetch(`http://localhost:3000/api/v1/flashcards/folders/${data.id}`, {
      method: "DELETE",
    }).then(() => goto("/flashcards/folders"));
  };
</script>

{#if data}
  <div>{JSON.stringify(data)}</div>
  <button on:click={deleteFolder}>Delete</button>
{:else}
  <p>Entry isn't exist!</p>
{/if}
