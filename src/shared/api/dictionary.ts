import { fetcher } from "./_fetcher";

type EntryId = number & { _type?: "EntryId" };

export interface Entry {
  id: EntryId;
  term: string;
  partOfSpeech: string;
  definitions: string[];
}

export type EntryItem = Pick<Entry, "id" | "partOfSpeech" | "term">;

export const dictionary = {
  loadEntry: (id: string) => fetcher.get<Entry>(`/dictionary/entries/${id}`),
  loadEntries: (query?: string) =>
    fetcher.get<EntryItem[]>("/dictionary/entries", { params: { query } }),
};
