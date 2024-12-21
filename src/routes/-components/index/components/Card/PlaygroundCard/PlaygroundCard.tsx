import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { Card } from '../Card/Card'

export function PlaygroundCard() {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate({ to: '/playground' })}>
        <CardMedia
          component="img"
          height="140"
          image="/src/assets/playground.webp"
          alt="playground"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Playground🛝
          </Typography>
          <Typography variant="body2" color="text.secondary">
            遊び心を大切にしましょう！
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
