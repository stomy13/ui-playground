import AcUnitIcon from '@mui/icons-material/AcUnit'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Snackbar } from '~/components/ui/Snackbar/Snackbar'

export const Route = createRootRoute({
  component: () => (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#030303' }}>
        <Toolbar sx={{ gap: 2 }}>
          <AcUnitIcon />
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
          <Link to="/about">
            <Typography>About</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Snackbar />
      <TanStackRouterDevtools />
    </>
  ),
})
