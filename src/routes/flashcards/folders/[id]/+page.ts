import type { FolderItem } from "shared/models";
import type { PageLoad } from "./$types";

export const load: PageLoad<FolderItem> = ({ params, fetch }) =>
  fetch(`http://localhost:3000/api/v1/flashcards/folders/${params.id}`).then((response) =>
    response.json()
  );
