import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { Layout } from './components/Layout/Layout'

type Props = {
  pageTitle: string
}

export function React19({ pageTitle }: Props) {
  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Typography variant="h4">React 19</Typography>
    </Layout>
  )
}
