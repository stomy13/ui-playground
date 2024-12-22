import { createLazyFileRoute } from '@tanstack/react-router'
import { HeartLaundry } from '~/pages/HeartLaundry/HeartLaundry'

export const Route = createLazyFileRoute('/heartlaundry')({
  component: HeartLaundry,
})
