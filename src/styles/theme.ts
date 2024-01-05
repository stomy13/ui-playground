import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {},
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    text: {
      primary: 'fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
})
