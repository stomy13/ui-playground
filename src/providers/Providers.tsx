import { ThemeProvider } from '@mui/material'
import {
  type DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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

const queryOptions: DefaultOptions = {
  queries: {
    networkMode: 'always',
    staleTime: 0,
    gcTime: 0,
    retry: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    throwOnError: true,
  },
}
const queryClient = new QueryClient({ defaultOptions: queryOptions })

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
