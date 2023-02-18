import type { ModuleItem } from "shared/models";

import type { PageLoad } from "./$types";

interface ModulesResponse {
  modules: ModuleItem[];
}

export const load: PageLoad<ModulesResponse> = ({ fetch }) =>
  fetch("http://localhost:3000/api/v1/flashcards/modules")
    .then((response) => response.json())
    .then((modules) => ({ modules }));
