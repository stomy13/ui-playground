import { useNavigate } from 'react-router-dom'
import './HomePage.css'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { paths } from '../../app/routes/paths'

export function HomePage() {
  // TODO: use LayoutComponent

  const navigate = useNavigate()
  return (
    <>
      <Card sx={{ minWidth: 345, maxWidth: 345 }}>
        <CardActionArea onClick={() => navigate(paths.heartLaundry)}> 
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/cute-kitten-staring-out-the-window-playful-curiosity-generative-ai_188544-12520.jpg"
            alt="cat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Heart Laundry❤️🧺
            </Typography>
            <Typography variant="body2" color="text.secondary">
              心の洗濯をしよう
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
