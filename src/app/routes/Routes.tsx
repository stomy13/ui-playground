import { useRoutes } from 'react-router-dom'
import { Home } from '../../pages/Home/Home'
import { paths } from './paths'
import { HeartLaundry } from '../../pages/HeartLaundry/HeartLaundry'
import { Playground } from '../../pages/Playground/Playground'

export function Routes() {
  const routes = useRoutes([
    {
      path: paths.home,
      element: <Home />,
    },
    {
      path: paths.heartLaundry,
      element: <HeartLaundry />,
    },
    {
      path: paths.playground,
      element: <Playground pageTitle="Playground" />,
    },
  ])
  return routes
}
