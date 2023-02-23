import { fetcher } from "./_fetcher";

type FolderId = number & { _type?: "FolderId" };

export interface FolderItem {
  id: FolderId;
  name: string;
}

type ModuleId = number & { _type?: "ModuleId" };

export interface ModuleItem {
  id: ModuleId;
  name: string;
}

const folders = "/flashcards/folders";
const modules = "/flashcards/modules";

export const flashcards = {
  // Folders
  createFolder: (name: string) => fetcher.post<FolderItem>(folders, { name }),
  deleteFolder: (id: number) => fetcher.delete<void>([folders, id]),
  loadFolder: (id: string) => fetcher.get<FolderItem>([folders, id]),
  loadFolders: () => fetcher.get<FolderItem[]>(folders),
  // Modules
  createModule: (name: string) => fetcher.post<ModuleItem>(modules, { name }),
  deleteModule: (id: number) => fetcher.delete<void>([modules, id]),
  loadModule: (id: string) => fetcher.get<ModuleItem>([modules, id]),
  loadModules: () => fetcher.get<ModuleItem[]>(modules),
};
