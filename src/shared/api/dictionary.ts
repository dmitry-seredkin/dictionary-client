import { fetcher } from "./_fetcher";

export type EntryId = number & { _type?: "EntryId" };

export interface Entry {
  id: EntryId;
  term: string;
  partOfSpeech: string;
  definitions: string[];
}

export type EntryItem = Pick<Entry, "id" | "partOfSpeech" | "term">;

// export interface CrawlerEntryTerm {
//   word: string;
//   partOfSpeech: string;
//   transcript: string;
// }

// export interface CrawlerEntrySense {
//   definition: string;
//   examples: string[];
// }
// export interface CrawlerEntry {
//   term: CrawlerEntryTerm;
//   senses: CrawlerEntrySense[];
// }

export interface CrawlerSearchEntry {
  id: EntryId;
  term: string;
  partOfSpeech: string;
  sense: string;
}

export interface CrawlerSearchResponse {
  query: string;
  entry: CrawlerSearchEntry | null;
}

const enum Endpoint {
  Entries = "/entries",
  Search = "/search",
}

const ENDPOINT = {
  ENTRIES: "/entries",
  SEARCH: "/search",
};

const entries = "/dictionary/entries";

// const dictionary = fetcher("/dictionary");
// dictionary.get([Endpoint.Entries, id]);
// dictionary.get(Endpoint.Entries, { params: { query } });
// dictionary.post(Endpoint.Search, { terms });

export const dictionary = {
  loadEntry: (id: string) => fetcher.get<Entry>([entries, id]),
  loadEntries: (query?: string) => fetcher.get<EntryItem[]>(entries, { params: { query } }),
  search: (terms: string[]) => fetcher.post<CrawlerSearchResponse[]>("/crawler/search", { terms }),
};
