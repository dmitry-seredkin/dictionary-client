import { dictionary, type EntryItem } from "shared/api";
import type { WrappedArray } from "shared/models";

import type { PageLoad } from "./$types";

export const load: PageLoad<WrappedArray<EntryItem, "entries">> = () =>
  dictionary.loadEntries().then((entries) => ({ entries }));
