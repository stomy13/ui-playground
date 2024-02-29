import { Box } from '@mui/system'
import { MainLayout } from '../../components/mainLayout/MainLayout'

export function Playground() {
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Let's play with React and MUI components!
      </Box>
    </MainLayout>
  )
}
