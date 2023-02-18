<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data}
  <div>{JSON.stringify(data)}</div>
{:else}
  <p>Entry isn't exist!</p>
{/if}
