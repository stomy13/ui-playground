import { createLazyFileRoute } from '@tanstack/react-router'
import { Playground } from '~/pages/Playground/Playground'

export const Route = createLazyFileRoute('/playground')({
  component: Playground,
})
