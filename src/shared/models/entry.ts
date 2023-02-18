export type EntryId = number & { _type?: "EntryId" };

export interface Entry {
  id: EntryId;
  term: string;
  partOfSpeech: string;
  definitions: string[];
}

export type EntryIdentity = Pick<Entry, "id" | "partOfSpeech" | "term">;
