import { Helmet } from '~/components/layout/Helmet/Helmet'
import { MainLayout } from '~/components/layout/MainLayout/MainLayout'
import { HeartLaundryCard } from './Card/HeartLaundryCard/HeartLaundryCard'
import { PlaygroundCard } from './Card/PlaygroundCard/PlaygroundCard'
import { React19Card } from './Card/Raect19Card/Raect19Card'
import { Layout } from './Layout/Layout'

export function Home() {
  return (
    <MainLayout>
      <Helmet title={'Home'} />
      <Layout>
        <PlaygroundCard />
        <HeartLaundryCard />
        <React19Card />
      </Layout>
    </MainLayout>
  )
}
