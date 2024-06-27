import { create } from 'zustand';

interface Store {
  isNavOpend : Boolean,
  toggleNav: () => void
}

export const useStore = create<Store>((set) => ({
  isNavOpend: true,
  toggleNav: () => set((state) => ({ isNavOpend: !state.isNavOpend })),
}));