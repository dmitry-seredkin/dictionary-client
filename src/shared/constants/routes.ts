const HOME = "/";
const DICTIONARY = "/dictionary";
const PRACTICE = "/practice";

const path = <T extends string, R extends string>(prefix: T, route: R) =>
  `${prefix}/${route}` as const;

export const ROUTES = {
  HOME,
  DASHBOARD: HOME,
  DICTIONARY,
  DICTIONARY_ENTRIES: path(DICTIONARY, "entries"),
  PRACTICE,
  PRACTICE_FOLDERS: path(PRACTICE, "folders"),
  PRACTICE_MODULES: path(PRACTICE, "modules"),
} as const;
