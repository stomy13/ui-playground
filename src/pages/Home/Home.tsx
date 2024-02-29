import { MainLayout } from '../../components/mainLayout/MainLayout'
import { HeartLaundryCard } from './components/Card/HeartLaundryCard/HeartLaundryCard'
import { PlaygroundCard } from './components/Card/PlaygroundCard/PlaygroundCard'
import { Layout } from './components/Layout/Layout'

export function Home() {
  return (
    <MainLayout>
      <Layout>
        <PlaygroundCard />
        <HeartLaundryCard />
      </Layout>
    </MainLayout>
  )
}
