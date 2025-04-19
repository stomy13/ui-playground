import { createLazyFileRoute } from '@tanstack/react-router'
import { Suspense } from '~/pages/Suspense/Suspense'

export const Route = createLazyFileRoute('/suspense')({
  component: Suspense,
})
