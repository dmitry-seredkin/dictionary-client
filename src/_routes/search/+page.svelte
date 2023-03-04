<script lang="ts">
  import EntryForm, { type EntryFormValues } from "entities/entry-form.svelte";
  import { crawler, type CrawlerEntry } from "shared/api";
  import { Section } from "shared/ui";


  let entry: CrawlerEntry | null = null;
  let loading = false;
  let form: EntryFormValues;

  const search = () => {
    loading = true;
    crawler
      .search(form.text)
      .then((response) => (entry = response))
      .finally(() => (loading = false));
  };
</script>

<Section title="New definitions search">
  <EntryForm bind:form on:submit={search} />
  {#if loading}
    <p>Loading...</p>
  {:else if entry}
    <p class="entry">{JSON.stringify(entry, null, 2)}</p>
  {/if}
</Section>

<style lang="less">
  .entry {
    white-space: pre;
  }
</style>
