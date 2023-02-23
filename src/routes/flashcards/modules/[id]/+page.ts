import { flashcards, type ModuleItem } from "shared/api";

import type { PageLoad } from "./$types";

export const load: PageLoad<ModuleItem> = ({ params }) => flashcards.loadModule(params.id);
