import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AlertState = {
  isAlertOpen: boolean,
  title?: string,
  msg?: string,
  onConfirm?: () => void,
  onCancel?: () => void,
}

type AlertAction = {
  openAlert: (props: any) => void,
  closeAlert: (props: any) => void,
}

export const useAlertStore = create<AlertState & AlertAction>()(
  immer((set) => ({
    isAlertOpen: false,
    openAlert: (props: any) => set((state) => {
      state.isAlertOpen = true;
      state.title = props.title;
      state.msg = props.msg;
      state.onConfirm = props.onConfirm;
      state.onCancel = props.onCancel;
    }),
    closeAlert: () => set((state) => {
      state.isAlertOpen = false;
    })
  })
  )
)
