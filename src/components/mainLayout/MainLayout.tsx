import { Box } from '@mui/material'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <Box>{children}</Box>
}
