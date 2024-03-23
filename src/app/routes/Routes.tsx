import { useRoutes } from 'react-router-dom'
import { HeartLaundry } from '../../pages/HeartLaundry/HeartLaundry'
import { Home } from '../../pages/Home/Home'
import { Playground } from '../../pages/Playground/Playground'
import { paths } from './paths'

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
