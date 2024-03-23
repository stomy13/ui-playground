import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Helmet } from 'react-helmet'
import { MainLayout } from '../../components/mainLayout/MainLayout'
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
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <Typography>{"Let's play with React and MUI components!"}</Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            padding: 2,
          }}
        >
          <UpdateStateQueue />
          <ContextExample />
        </Box>
        <ScrollRefExample />
      </Box>
    </MainLayout>
  )
}
