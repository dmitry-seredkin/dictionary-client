import type { FolderItem } from "shared/models";

import type { PageLoad } from "./$types";

interface FoldersResponse {
  folders: FolderItem[];
}

export const load: PageLoad<FoldersResponse> = ({ fetch }) =>
  fetch("http://localhost:3000/api/v1/flashcards/folders")
    .then((response) => response.json())
    .then((folders) => ({ folders }));
