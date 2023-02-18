import type { EntryIdentity } from "shared/models";

import type { PageLoad } from "./$types";

interface EntriesResponse {
  entries: EntryIdentity[];
}

export const load: PageLoad<EntriesResponse> = ({ fetch }) =>
  fetch("http://localhost:3000/api/v1/dictionary/entries")
    .then((response) => response.json())
    .then((entries) => ({ entries }));
