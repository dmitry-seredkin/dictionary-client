import { flashcards, type FolderItem } from "shared/api";

import type { PageLoad } from "./$types";

export const load: PageLoad<FolderItem> = ({ params }) => flashcards.loadFolder(params.id);
