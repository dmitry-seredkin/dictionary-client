<script lang="ts">
  import EntryItem from "entities/entry-item.svelte";
  import { dictionary } from "shared/api";
  import { ROUTES } from "shared/constants";
  import { KeyName } from "shared/enums";
  import { Button, Input, Link, List } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  let query = "";

  $: ({ entries } = data);

  const getEntryPath = (id: number) => `${ROUTES.DICTIONARY_ENTRIES}/${id}`;

  const searchEntries = () =>
    dictionary.loadEntries(query).then((response) => (entries = response));

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === KeyName.Enter) searchEntries();
  };
</script>

<svelte:window on:keydown={onKeyDown} />
<div class="mb-8 grid grid-cols-12 gap-4">
  <Input class="col-span-10" bind:value={query} autofocus placeholder="Type a term here..." />
  <Button class="col-span-2" on:click={searchEntries}>Search</Button>
</div>
<List data={entries} fallback="Entries weren't found">
  <Link slot="item" let:item={entry} let:index href={getEntryPath(entry.id)}>
    <EntryItem {...entry} {index} clickable />
  </Link>
</List>
