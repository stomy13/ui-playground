import { Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { ActionState } from './components/ActionState/ActionState'
import { FormAction } from './components/FormAction/FormAction'
import { Layout } from './components/Layout/Layout'
import { Transition } from './components/Transition/Transition'
import { Use } from './components/Use/Use'
import { UseOptimistic } from './components/UseOptimistic/UseOptimistic'

export function React19() {
  return (
    <Layout>
      <Helmet title="React 19" />
      <Typography variant="h4">React 19</Typography>
      <Transition />
      <ActionState />
      <FormAction />
      <Use />
      <UseOptimistic />
    </Layout>
  )
}
