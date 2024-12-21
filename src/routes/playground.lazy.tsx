import { createLazyFileRoute } from '@tanstack/react-router'
import { Playground } from './-components/playground/Playground'

export const Route = createLazyFileRoute('/playground')({
  component: Playground,
})
