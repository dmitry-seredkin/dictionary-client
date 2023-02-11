export type EntryItemId = number & { _type?: "EntryItemId" };

export interface EntryItem {
  id: EntryItemId;
  term: string;
}
