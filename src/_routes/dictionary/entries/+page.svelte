<script lang="ts">
  import EntryItem from "entities/entry-item.svelte";
  import { ROUTES } from "shared/constants";
  import { Link, List } from "shared/ui";

  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ entries } = data);

  const getEntryPath = (id: number) => `${ROUTES.DICTIONARY_ENTRIES}/${id}`;
</script>

<List data={entries} fallback="Entries weren't found">
  <Link slot="item" let:item={entry} let:index href={getEntryPath(entry.id)}>
    <EntryItem {entry} {index} />
  </Link>
</List>
