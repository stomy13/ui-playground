import { Box, Container, Paper, Typography } from '@mui/material'
import { Helmet } from '~/components/layout/Helmet/Helmet'
import { MainLayout } from '~/components/layout/MainLayout/MainLayout'
import { FormReactHookFormValibot } from './components/FormReactHookFormValibot/FormReactHookFormValibot'
import { FormValibot } from './components/FormValibot/FormValibot'
import { FormZod } from './components/FormZod/FormZod'

export function FormComparison() {
  return (
    <MainLayout>
      <Helmet title="Form の実装比較" />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom={true}
          align="center"
        >
          Form の実装比較
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          zod vs
          valibot（@conform-to/react、react-hook-form）を使用したユーザー登録フォーム
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 4,
          }}
        >
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom={true}>
              Zod + @conform-to/zod
            </Typography>
            <FormZod />
          </Paper>

          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom={true}>
              Valibot + @conform-to/valibot
            </Typography>
            <FormValibot />
          </Paper>

          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom={true}>
              Valibot + React Hook Form
            </Typography>
            <FormReactHookFormValibot />
          </Paper>
        </Box>
      </Container>
    </MainLayout>
  )
}
