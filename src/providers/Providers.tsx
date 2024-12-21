import { ThemeProvider } from '@mui/material'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '~/routeTree.gen'
import { theme } from '../styles/theme'
import { PropsWithChildren } from 'react'

const router = createRouter({ routeTree })
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      {children}
    </ThemeProvider>
  )
}
