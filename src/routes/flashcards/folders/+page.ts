import { flashcards, type FolderItem } from "shared/api";
import type { WrappedArray } from "shared/models";

import type { PageLoad } from "./$types";

export const load: PageLoad<WrappedArray<FolderItem, "folders">> = () =>
  flashcards.loadFolders().then((folders) => ({ folders }));
