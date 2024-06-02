import { useNavigate } from 'react-router-dom'
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'
import { paths } from '~/app/routes/paths'
import { Card } from '../Card/Card'

export function React19Card() {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate(paths.react19)}>
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
