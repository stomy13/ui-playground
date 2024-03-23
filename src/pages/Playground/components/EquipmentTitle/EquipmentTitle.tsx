import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { aero } from '../../../../styles/colors'

type Props = {
  title: string
  icon?: React.ReactNode
}

export function EquipmentTitle({ title, icon }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        color: aero,
      }}
    >
      {icon ? icon : <AutoAwesomeIcon />}
      <Typography variant="h5">{title}</Typography>
    </Box>
  )
}
