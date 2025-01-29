import { createLazyFileRoute } from '@tanstack/react-router'
import { ProxyComponent } from '~/pages/Proxy/Proxy'

export const Route = createLazyFileRoute('/proxy')({
  component: ProxyComponent,
})
