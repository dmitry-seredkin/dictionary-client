import { ENTRY_LIST } from "shared/constants";
import type { EntryItem } from "shared/models";
import type { PageLoad } from "./$types";

interface Response {
  entry?: EntryItem;
}

export const load: PageLoad<Response> = ({ params }) =>
  Promise.resolve({ entry: ENTRY_LIST.find((entry) => entry.id === Number(params.id)) });
