<script lang="ts">
  import EntryForm, { type EntryFormValues } from "entities/entry-form.svelte";
  import { crawler, type CrawlerEntry } from "shared/api";
  import { Loadable, Section } from "shared/ui";

  let form: EntryFormValues | undefined;
  let promise: Promise<CrawlerEntry>;

  const search = () => {
    const separator = form?.separator.replace(/\\n/g, "\n") || "\n";
    const terms = form?.text.split(separator).filter(Boolean);

    if (terms?.length) {
      promise = crawler.search(terms);
    }
  };
</script>

<Section title="New definitions search">
  <EntryForm bind:form on:submit={search} />
  <Loadable {promise} />
</Section>
