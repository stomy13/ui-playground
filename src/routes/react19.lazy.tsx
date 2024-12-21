import { createLazyFileRoute } from '@tanstack/react-router'
import { React19 } from './-components/react19/React19'

export const Route = createLazyFileRoute('/react19')({
  component: React19,
})
