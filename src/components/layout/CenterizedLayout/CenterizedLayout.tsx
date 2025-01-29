import { Box } from '@mui/system'
import type { PropsWithChildren } from 'react'

export function CenterizedLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}
