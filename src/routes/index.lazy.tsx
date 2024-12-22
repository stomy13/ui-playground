import { createLazyFileRoute } from '@tanstack/react-router'
import { Home } from '~/pages/Home/components/Home'

export const Route = createLazyFileRoute('/')({
  component: Home,
})
