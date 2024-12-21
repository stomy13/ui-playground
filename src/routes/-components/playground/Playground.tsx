import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ClientSideStorage } from './components/ClientSideStorage/ClientSideStorage'
import { ContextExample } from './components/ContextExample/ContextExample'
import { ScrollRefExample } from './components/ScrollRefExample/ ScrollRefExample '
import { UpdateStateQueue } from './components/UpdateStateQueue/UpdateStateQueue'
import { Helmet } from '~/components/layout/Helmet/Helmet'
import { MainLayout } from '~/components/layout/MainLayout/MainLayout'

export function Playground() {
  return (
    <MainLayout>
      <Helmet title="Playground" />
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
