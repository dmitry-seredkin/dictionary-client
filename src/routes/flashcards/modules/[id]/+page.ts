import type { ModuleItem } from "shared/models";
import type { PageLoad } from "./$types";

export const load: PageLoad<ModuleItem> = ({ params, fetch }) =>
  fetch(`http://localhost:3000/api/v1/flashcards/modules/${params.id}`).then((response) =>
    response.json()
  );
