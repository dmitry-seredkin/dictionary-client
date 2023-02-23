import { redirect } from "@sveltejs/kit";

import { ROUTES } from "shared/constants";
import { HttpStatus } from "shared/enums";

export const load = () => {
  throw redirect(HttpStatus.Found, ROUTES.PRACTICE_FOLDERS);
};
