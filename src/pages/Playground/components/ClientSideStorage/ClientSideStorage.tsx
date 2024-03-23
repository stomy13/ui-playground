import StorageIcon from '@mui/icons-material/Storage'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { EquipmentTitle } from '../EquipmentTitle/EquipmentTitle'

export function ClientSideStorage() {
  return (
    <Box>
      <EquipmentTitle title="Client Side Storage" icon={<StorageIcon />} />
      <Typography>TBD</Typography>
    </Box>
  )
}
