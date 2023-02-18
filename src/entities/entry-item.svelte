<script lang="ts">
  import type { EntryIdentity } from "shared/models";

  export let entry: EntryIdentity;
  export let index: number;
</script>

<p class="entry">
  <span>{index}</span>
  <span class="term">{entry.term} </span>
  <span class="part-of-speech">{entry.partOfSpeech}</span>
</p>

<style lang="less">
  .entry {
    padding: 1rem 2rem; // TODO: variable
    border-radius: 0.25rem; // TODO: variable
    background-color: #ffffff; // TODO: variable

    &:hover {
      background-color: #f9f9f9;
    }
  }

  .term {
    font-weight: 700;
    margin-left: 2rem; // TODO: variable
  }

  .part-of-speech {
    margin-left: 1rem; // TODO: variable
    color: #999999; // TODO: variable
  }
</style>
