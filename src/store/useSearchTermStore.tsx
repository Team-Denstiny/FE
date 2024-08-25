import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchState {
  searchTermList: string[];
  addSearchTerm: (term: string) => void;
  removeSearchTerm: (term: string) => void;
  clearSearchTerms: () => void;
}

const useSearchTermStore = create<SearchState>()(
  persist(
    (set) => ({
      searchTermList: [],
      addSearchTerm: (term) =>
        set((state) => ({
          searchTermList: [...state.searchTermList, term],
        })),
      removeSearchTerm: (term) =>
        set((state) => ({
          searchTermList: state.searchTermList.filter((t) => t !== term),
        })),
      clearSearchTerms: () =>
        set(() => ({
          searchTermList: [],
        })),
    }),
    {
      name: "search-history",
    }
  )
);

export default useSearchTermStore;
