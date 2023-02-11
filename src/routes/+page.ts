import { ENTRY_LIST } from "shared/constants";
import type { EntryItem } from "shared/models";

import type { PageLoad } from "./$types";

interface Response {
  entries: EntryItem[];
}

export const load: PageLoad<Response> = () => {
  return { entries: ENTRY_LIST };
};
