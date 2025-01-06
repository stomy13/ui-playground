import { ThemeProvider } from '@mui/material'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import type { PropsWithChildren } from 'react'
import { routeTree } from '~/routeTree.gen'
import { theme } from '../styles/theme'

const router = createRouter({ routeTree, basepath: '/ui-playground' })
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
