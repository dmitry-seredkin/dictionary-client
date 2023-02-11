<script lang="ts">
  import Entry from "features/entry.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.entry}
  <Entry entry={data.entry} />
{:else}
  <p>Entry isn't exist!</p>
{/if}
