import StorageIcon from '@mui/icons-material/Storage'
import { Box } from '@mui/system'
import { EquipmentTitle } from '../EquipmentTitle/EquipmentTitle'
import { IndexedDB } from './components/IndexedDB/IndexedDB'
import { LocalStorage } from './components/LocalStorage/LocalStorage'
import { SessionStorage } from './components/SessionStorage/SessionStorage'

export function ClientSideStorage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="Client Side Storage" icon={<StorageIcon />} />
      <LocalStorage />
      <SessionStorage />
      <IndexedDB />
    </Box>
  )
}
