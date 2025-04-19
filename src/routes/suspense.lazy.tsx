import { createLazyFileRoute } from '@tanstack/react-router'
import { TrySuspense } from '~/pages/TrySuspense/TrySuspense'

export const Route = createLazyFileRoute('/suspense')({
  component: TrySuspense,
})
