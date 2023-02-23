import { dictionary, type Entry } from "shared/api";
import type { PageLoad } from "./$types";

export const load: PageLoad<Entry> = ({ params }) => dictionary.loadEntry(params.id);
