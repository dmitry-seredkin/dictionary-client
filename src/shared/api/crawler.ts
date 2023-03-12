import { fetcher } from "./_fetcher";

export interface CrawlerEntryTerm {
  word: string;
  partOfSpeech: string;
  transcript: string;
}

export interface CrawlerEntrySense {
  definition: string;
  examples: string[];
}
export interface CrawlerEntry {
  term: CrawlerEntryTerm;
  senses: CrawlerEntrySense[];
}

export const crawler = {
  search: (terms: string[]) => fetcher.post<CrawlerEntry>("/crawler/search", { terms }),
};
