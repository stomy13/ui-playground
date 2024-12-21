import { MainLayout } from '../../components/layout/MainLayout/MainLayout'
import { HeartLaundryCard } from './components/Card/HeartLaundryCard/HeartLaundryCard'
import { PlaygroundCard } from './components/Card/PlaygroundCard/PlaygroundCard'
import { React19Card } from './components/Card/Raect19Card/Raect19Card'
import { Layout } from './components/Layout/Layout'

export function Home() {
  return (
    <MainLayout>
      <Layout>
        <PlaygroundCard />
        <HeartLaundryCard />
        <React19Card />
      </Layout>
    </MainLayout>
  )
}
