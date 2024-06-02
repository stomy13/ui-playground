import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { EquipmentTitle } from '~/components/domain/EquipmentTitle/EquipmentTitle'

export function Transition() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="Transition" />
      <Box>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        >
          useTransition に非同期処理を渡せるようになった
        </Typography>
      </Box>
    </Box>
  )
}
