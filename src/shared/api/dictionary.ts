import { fetcher } from "./_fetcher";

export type EntryId = number & { _type?: "EntryId" };

export interface Entry {
  id: EntryId;
  term: string;
  partOfSpeech: string;
  definitions: string[];
}

export type EntryItem = Pick<Entry, "id" | "partOfSpeech" | "term">;

const entries = "/dictionary/entries";

export const dictionary = {
  loadEntry: (id: string) => fetcher.get<Entry>([entries, id]),
  loadEntries: (query?: string) => fetcher.get<EntryItem[]>(entries, { params: { query } }),
};
