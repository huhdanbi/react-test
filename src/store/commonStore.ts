import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type CommonState = {
  isNavOpen: boolean,
}

type CommonAction = {
  toggleNav: (state: boolean) => void,
}

export const useCommonStore = create<CommonState & CommonAction>()(
  immer((set) => ({
    isNavOpen: true,
    toggleNav: (state) => set(() => ({ isNavOpen: state }))
  }))
)