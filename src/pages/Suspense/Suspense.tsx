import { Typography } from '@mui/material'
import { Helmet } from '~/components/layout/Helmet/Helmet'
import { Layout } from './components/Layout/Layout'

export function Suspense() {
  return (
    <Layout>
      <Helmet title="Suspense" />
      <Typography variant="h4">Suspense</Typography>
    </Layout>
  )
}
