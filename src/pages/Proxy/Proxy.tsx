import { CenterizedLayout } from '~/components/layout/CenterizedLayout/CenterizedLayout'
import { Helmet } from '~/components/layout/Helmet/Helmet'

export function ProxyComponent() {
  return (
    <CenterizedLayout>
      <Helmet title="Playground" />
      <div>
        <h1>Proxy</h1>
        <p>Proxy page</p>
      </div>
    </CenterizedLayout>
  )
}
