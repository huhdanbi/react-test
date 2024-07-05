import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type CommonState = {
  isNavOpen: boolean
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

type LoadingState = {
  isLoading: boolean
}

type LoadingAction = {
  useLoading: (state: boolean) => void,
}

export const useLoadingStore = create<LoadingState & LoadingAction>()(
  immer((set) => ({
    isLoading: false,
    useLoading: (isUse: boolean) => set((state) => {
      state.isLoading = isUse;
    })
  }))
)