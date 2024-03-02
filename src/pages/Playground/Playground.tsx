import { Box } from '@mui/system'
import { MainLayout } from '../../components/mainLayout/MainLayout'
import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet'

type Props = {
  pageTitle: string
}

export function Playground({ pageTitle }: Props) {
  return (
    <MainLayout>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography>Let's play with React and MUI components!</Typography>
      </Box>
    </MainLayout>
  )
}
