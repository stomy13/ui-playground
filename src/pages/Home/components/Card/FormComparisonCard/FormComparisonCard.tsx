import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { getBaseUrl } from '~/config'
import { Card } from '../Card/Card'

const imageUrl = `${getBaseUrl()}/comparison.png`

export function FormComparisonCard() {
  const navigate = useNavigate()
  return (
    <Card>
      <CardActionArea onClick={() => navigate({ to: '/form-comparison' })}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="comparison"
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="div">
            Form の実装比較
          </Typography>
          <Typography variant="body2" color="text.secondary">
            zod vs valibod + @conform-to/react
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
