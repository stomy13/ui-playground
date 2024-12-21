import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { useSnackbarStore } from '../store'
import type { SnackbarOptions } from '../store'

export const useSnackbar = () => {
  const showMessage = useSnackbarStore(state => state.showMessage)

  const showSnackbar = useCallback(
    (message: ReactNode, options?: SnackbarOptions) => {
      showMessage(message, options)
    },
    [showMessage],
  )

  const showErrorSnackbar = useCallback(
    (message: string, options?: SnackbarOptions) => {
      showSnackbar(message, {
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
        severity: 'error',
        variant: 'standard',
        ...options,
      })
    },
    [showSnackbar],
  )

  return { showSnackbar, showErrorSnackbar } as const
}
