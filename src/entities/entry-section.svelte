<script lang="ts">
  import type { Entry } from "shared/api";

  export let entry: Entry;
</script>

<section>
  <h1>{entry.term}</h1>
  <p>{entry.partOfSpeech}</p>
  <ul>
    {#each entry.definitions as definition}
      <li>{definition}</li>
    {:else}
      <p>Not found</p>
    {/each}
  </ul>
</section>
