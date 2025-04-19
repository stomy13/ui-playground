import { Box } from '@mui/system'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
