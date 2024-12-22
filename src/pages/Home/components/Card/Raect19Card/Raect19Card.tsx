import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { Card } from '../Card/Card'

export function React19Card() {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate({ to: '/react19' })}>
        <CardMedia
          component="img"
          height="140"
          image="/src/assets/react19.webp"
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
