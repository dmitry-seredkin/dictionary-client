import { flashcards, type ModuleItem } from "shared/api";
import type { WrappedArray } from "shared/models";

import type { PageLoad } from "./$types";

export const load: PageLoad<WrappedArray<ModuleItem, "modules">> = () =>
  flashcards.loadModules().then((modules) => ({ modules }));
