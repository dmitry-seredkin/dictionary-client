import type { Entry } from "shared/models";
import type { PageLoad } from "./$types";

export const load: PageLoad<Entry> = ({ params, fetch }) =>
  fetch(`http://localhost:3000/api/v1/dictionary/entries/${params.id}`).then((response) =>
    response.json()
  );
