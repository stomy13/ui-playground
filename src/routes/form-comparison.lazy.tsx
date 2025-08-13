import { createLazyFileRoute } from '@tanstack/react-router'
import { FormComparison } from '~/pages/FormComparison/FormComparison'

export const Route = createLazyFileRoute('/form-comparison')({
  component: FormComparison,
})
