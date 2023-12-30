import { useRoutes } from 'react-router-dom'
import { HomePage } from "../../pages/homePage/HomePage"
import { paths } from "./paths"
import { HeartLaundryPage } from '../../pages/heartLaundryPage/heartLaundryPage'

export function Routes() {
  const routes = useRoutes([
    {
      path: paths.home,
      element: (
          <HomePage />
      ),
    },
    {
      path: paths.heartLaundry,
      element: (
          <HeartLaundryPage />
      ),
    },
  ])
  return routes
}
