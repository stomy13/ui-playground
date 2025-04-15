import { createLazyFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createLazyFileRoute('/suspense')({
  component: Suspense,
})
