import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { Card } from '../Card/Card'
import { getBaseUrl } from '~/config'

const imageUrl = `${getBaseUrl()}/react19.webp`

export function React19Card() {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate({ to: '/react19' })}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="react19"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React19🛠
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React19を使ってみましょう！
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
