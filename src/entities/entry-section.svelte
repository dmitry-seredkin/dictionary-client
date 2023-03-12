<script lang="ts" context="module">
  export interface EntrySectionModel {
    term: string;
    partOfSpeech: string;
    definitions: string[];
  }
</script>

<script lang="ts">
  export let entry: EntrySectionModel;
</script>

<section>
  <h1>{entry.term}</h1>
  <p>{entry.partOfSpeech}</p>
  {#if entry.definitions}
    <ul>
      {#each entry.definitions as definition}
        <li>{definition}</li>
      {:else}
        <p>Not found</p>
      {/each}
    </ul>
  {/if}
</section>
