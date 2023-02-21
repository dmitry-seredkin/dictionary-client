<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;

  const deleteModule = () => {
    fetch(`http://localhost:3000/api/v1/flashcards/modules/${data.id}`, {
      method: "DELETE",
    }).then(() => goto("/flashcards/modules"));
  };
</script>

{#if data}
  <div>{JSON.stringify(data)}</div>
  <button on:click={deleteModule}>Delete</button>
{:else}
  <p>Entry isn't exist!</p>
{/if}
