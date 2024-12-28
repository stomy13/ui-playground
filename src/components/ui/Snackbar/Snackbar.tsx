import { Alert, Snackbar as MuiSnackbar } from '@mui/material'
import { useSnackbarStore } from './store'

export function Snackbar() {
  const message = useSnackbarStore(state => state.message)
  const hideMessage = useSnackbarStore(state => state.hideMessage)

  return (
    <MuiSnackbar
      anchorOrigin={
        message?.options?.anchorOrigin ?? {
          vertical: 'top',
          horizontal: 'right',
        }
      }
      open={message != null}
      onClose={hideMessage}
      key={message?.key}
      autoHideDuration={5000}
    >
      <Alert
        onClose={hideMessage}
        severity={message?.options?.severity}
        variant={message?.options?.variant}
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {message?.content}
      </Alert>
    </MuiSnackbar>
  )
}
