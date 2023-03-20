import type { EntryId } from "./dictionary";
import { fetcher } from "./_fetcher";

export interface CrawlerSearchEntry {
  id: EntryId;
  term: string;
  partOfSpeech: string;
}

export interface CrawlerSearchResponse {
  query: string;
  entry: CrawlerSearchEntry | null;
}

export const crawler = {
  search: (terms: string[]) => fetcher.post<CrawlerSearchResponse[]>("/crawler/search", { terms }),
};
