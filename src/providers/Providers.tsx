import { ThemeProvider } from '@mui/material'
import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '../styles/theme'

type Props = {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  )
}
