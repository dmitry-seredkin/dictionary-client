<script lang="ts">
  import EntrySection from "entities/entry-section.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data}
  <EntrySection entry={data} />
{:else}
  <p>Entry isn't exist!</p>
{/if}
