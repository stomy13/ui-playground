import { createLazyFileRoute } from '@tanstack/react-router'
import { Helmet } from '~/components/layout/Helmet/Helmet'
import { MainLayout } from '~/components/layout/MainLayout/MainLayout'
import { HeartLaundryCard } from '~/routes/-components/index/components/Card/HeartLaundryCard/HeartLaundryCard'
import { PlaygroundCard } from './-components/index/components/Card/PlaygroundCard/PlaygroundCard'
import { React19Card } from './-components/index/components/Card/Raect19Card/Raect19Card'
import { Layout } from './-components/index/components/Layout/Layout'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
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
