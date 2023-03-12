<script lang="ts">
  /**
   * TODO:
   * 1. Add words count
   * 2. Replace whole words with definitions only with word, status and link to the whole word 
   * 3. Improve layout
   * 4. Think about other ui-libary and the possibility of using tailwind
  */
  import EntryForm, { type EntryFormValues } from "entities/entry-form.svelte";
  import { crawler, type CrawlerEntry } from "shared/api";
  import { List, Loadable, Section } from "shared/ui";

  let form: EntryFormValues | undefined;
  let promise: Promise<CrawlerEntry>;

  $: separator = form?.separator.replace(/\\n/g, "\n") || "\n";
  $: terms = form?.text.split(separator).filter(Boolean);

  const search = () => {
    if (terms?.length) {
      promise = crawler.search(terms);
    }
  };
</script>


<Section title="New definitions search">
  <EntryForm bind:form on:submit={search} />
  <Loadable {promise}>
    <List slot="placeholder" data={terms}>
      <span slot="item" let:item={term}>
        {term}
      </span>
    </List>
  </Loadable>
</Section>
