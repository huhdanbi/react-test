import { create } from 'zustand';

interface Store {
  isNavOpend: Boolean,
  isLoading: Boolean,
  toggleNav: () => void,
}

export const useStore = create<Store>((set) => ({
  isNavOpend: true,
  isLoading: false,
  toggleNav: () => set((state) => ({ isNavOpend: !state.isNavOpend })),
}));