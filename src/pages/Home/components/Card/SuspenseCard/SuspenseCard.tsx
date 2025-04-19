import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { getBaseUrl } from '~/config'
import { Card } from '../Card/Card'

const imageUrl = `${getBaseUrl()}/suspense.png`

export function SuspenseCard() {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate({ to: '/suspense' })}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="suspense"
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="div">
            Suspense🌀
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Let's try Suspense!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
