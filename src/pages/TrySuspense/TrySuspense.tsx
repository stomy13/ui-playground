import { Box, Button, LinearProgress, Typography } from '@mui/material'
import {
  QueryErrorResetBoundary,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { EquipmentTitle } from '~/components/feature/EquipmentTitle/EquipmentTitle'
import { Helmet } from '~/components/layout/Helmet/Helmet'
import { Layout } from './components/Layout/Layout'

function NestedSupense() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="NestedSuspense" />
      <Typography
        variant="h6"
        sx={{
          whiteSpace: 'pre-wrap',
        }}
      >
        Suspense 内のコンポーネントが
        Suspendされた時点でフォールバックする。フォールバックされた場合は、Suspense
        内の兄弟コンポーネント（子の Suspense 含め）はレンダリングされない。
        Suspense がネストされている場合
        は、サスペンドしたコンポーネントから最も近い親の Suspense
        にフォールバックする。
      </Typography>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
            )}
          >
            <Suspense fallback={<LinearProgress />}>
              <DataFetcher ms={1000} />
              <Suspense fallback={<LinearProgress color="secondary" />}>
                <DataFetcher ms={2000} />
                <Suspense fallback={<LinearProgress color="success" />}>
                  <DataFetcher ms={3000} />
                </Suspense>
                <Suspense fallback={<LinearProgress color="success" />}>
                  <DataFetcher ms={1000} />
                </Suspense>
              </Suspense>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Box>
  )
}

const shouldError = () => Math.random() < 0.2

function DataFetcher({ ms }: { ms: number }) {
  const { data } = useSuspenseQuery({
    queryKey: ['ms', ms],
    queryFn: async () => {
      if (shouldError()) {
        throw new Error('ランダムなエラーが発生しました')
      }
      await new Promise(resolve => setTimeout(resolve, ms))
      return `${ms}ミリ秒待ちました`
    },
  })

  return <Typography>{data}</Typography>
}

function ErrorFallback({
  resetErrorBoundary,
}: Pick<FallbackProps, 'resetErrorBoundary'>) {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Typography
        component="div"
        sx={{
          whiteSpace: 'pre-wrap',
        }}
      >
        エラーが発生しました。
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => resetErrorBoundary()}
      >
        再実行
      </Button>
    </Box>
  )
}

function UseSuspenseQuery() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="UseSuspenseQuery" />
      <Typography
        variant="h6"
        sx={{
          whiteSpace: 'pre-wrap',
        }}
      >
        useSuspenseQuery で取得したデータを表示する
      </Typography>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
            )}
          >
            <Suspense fallback={<LinearProgress />}>
              <DataFetcher ms={1000} />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Box>
  )
}

export function TrySuspense() {
  return (
    <Layout>
      <Helmet title="Suspense" />
      <Typography variant="h4">Suspense</Typography>
      <UseSuspenseQuery />
      <NestedSupense />
    </Layout>
  )
}
