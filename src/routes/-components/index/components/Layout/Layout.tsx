import { Box } from '@mui/system'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: 2,
      }}
    >
      {children}
    </Box>
  )
}
