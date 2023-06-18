<script lang="ts">
  /**
   * TODO:
   * 1. Add loading state and form cleaning / repeat buttons
   * 2. Lock search form during request
   * 3. Improve layout
   * 4. Save the previous search state
   * 5. Add checkbox for preview / turn off this checkbox on search result
   */
  import EntryForm, { type EntryFormValues } from "entities/entry-form.svelte";
  import EntryItem from "entities/entry-item.svelte";
  import { dictionary, type CrawlerSearchResponse } from "shared/api";
  import { Button, List, Loadable, Section } from "shared/ui";

  let form: EntryFormValues | undefined;
  let promise: Promise<CrawlerSearchResponse[]>;

  $: separator = form?.separator.replace(/\\n/g, "\n") || "\n";
  $: terms = form?.text
    .split(separator)
    .map((term) => term.trim())
    .filter(Boolean);

  const search = () => {
    if (terms?.length) {
      promise = dictionary.search(terms);
    }
  };

  const copyDictionary = () =>
    promise.then((entries) => {
      const dictionary = entries.reduce(
        (result, { entry }) =>
          entry == null
            ? result
            : `${result}${entry.term}\t(${entry.partOfSpeech}) ${entry.sense}\n`,
        ""
      );
      navigator.clipboard.writeText(dictionary);
    });

  const mapResponseToItem = ({ entry, query }: CrawlerSearchResponse) => {
    if (entry == null) {
      return { term: `(${query})` };
    }
    return {
      term: `${entry.term} (${query})`,
      partOfSpeech: entry.partOfSpeech,
      sense: entry.sense,
    };
  };
</script>

<Section title="New definitions search">
  <EntryForm class="mb-4" bind:form on:submit={search} />
  <div class="mb-4 flex items-center justify-between">
    <p class="mb-4 text-lg font-bold">
      {terms?.length ? `Search results (${terms?.length} terms)` : "Enter your search request"}
    </p>
    <Button disabled={!promise} on:click={copyDictionary}>Copy</Button>
  </div>
  <Loadable {promise}>
    <List slot="result" let:value data={value}>
      <EntryItem
        slot="item"
        let:item={response}
        let:index
        {...mapResponseToItem(response)}
        {index}
        clickable={response.entry != null}
      >
        {#if response.entry == null}<span class="ml-20">Not Found</span>{/if}
      </EntryItem>
    </List>
    <List slot="placeholder" data={terms}>
      <EntryItem slot="item" let:item={term} let:index {term} {index} />
    </List>
  </Loadable>
</Section>
