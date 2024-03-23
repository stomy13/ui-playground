import StorageIcon from '@mui/icons-material/Storage'
import { Box } from '@mui/system'
import { EquipmentTitle } from '../EquipmentTitle/EquipmentTitle'
import { LocalStorage } from './components/LocalStorage/LocalStorage'

export function ClientSideStorage() {
  return (
    <Box>
      <EquipmentTitle title="Client Side Storage" icon={<StorageIcon />} />
      <LocalStorage />
    </Box>
  )
}
