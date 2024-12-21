import type { ReactNode } from 'react'
import { v4 } from 'uuid'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import type { AlertProps, SnackbarProps } from '@mui/material'

export type SnackbarOptions = {
  anchorOrigin?: SnackbarProps['anchorOrigin']
  severity?: AlertProps['severity']
  variant?: AlertProps['variant']
}

type State = {
  message:
    | {
        content: ReactNode
        key: string
        options?: SnackbarOptions
      }
    | undefined
}
type Actions = {
  showMessage: (message: ReactNode, options?: SnackbarOptions) => void
  hideMessage: () => void
}

export const useSnackbarStore = create<State & Actions>()(
  devtools(
    immer(set => ({
      message: undefined,
      showMessage: (message, options) => {
        set(state => {
          state.message = {
            content: message,
            key: v4(),
            options,
          }
        })
      },
      hideMessage: () => {
        set(state => {
          state.message = undefined
        })
      },
    })),
  ),
)
