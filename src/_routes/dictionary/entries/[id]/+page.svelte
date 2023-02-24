<script lang="ts">
  import EntrySection from "entities/entry-section.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<EntrySection entry={data} />
