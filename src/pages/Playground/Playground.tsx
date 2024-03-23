import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Helmet } from 'react-helmet'
import { MainLayout } from '../../components/mainLayout/MainLayout'
import { ClientSideStorage } from './components/ClientSideStorage/ClientSideStorage'
import { ContextExample } from './components/ContextExample/ContextExample'
import { ScrollRefExample } from './components/ScrollRefExample/ ScrollRefExample '
import { UpdateStateQueue } from './components/UpdateStateQueue/UpdateStateQueue'

type Props = {
  pageTitle: string
}

export function Playground({ pageTitle }: Props) {
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <Typography variant="h4">
            Let&apos;s play with React and MUI components!
          </Typography>
          <ClientSideStorage />
          <ScrollRefExample />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <UpdateStateQueue />
            <ContextExample />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  )
}
