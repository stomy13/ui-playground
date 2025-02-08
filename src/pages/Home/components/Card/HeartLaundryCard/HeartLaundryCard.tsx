import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { Card } from '../Card/Card'

export function HeartLaundryCard() {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate({ to: '/heartlaundry' })}>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/cute-kitten-staring-out-the-window-playful-curiosity-generative-ai_188544-12520.jpg"
          alt="cat"
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="div">
            Heart Laundry❤️🧺
          </Typography>
          <Typography variant="body2" color="text.secondary">
            心の洗濯をしよう
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
