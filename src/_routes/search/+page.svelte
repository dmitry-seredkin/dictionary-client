<script lang="ts">
  import EntryForm, { type EntryFormValues } from "entities/entry-form.svelte";
  import { crawler, type CrawlerEntry } from "shared/api";
  import { Loadable, Section } from "shared/ui";

  let form: EntryFormValues;
  let entry: Promise<CrawlerEntry>;

  const search = () => (entry = crawler.search(form.text));
</script>

<Section title="New definitions search">
  <EntryForm bind:form on:submit={search} />
  <Loadable promise={entry} />
</Section>
