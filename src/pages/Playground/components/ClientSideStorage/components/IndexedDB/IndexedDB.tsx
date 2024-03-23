import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSnackbar } from '~/components/global/Snackbar/hooks/useSnackbar'
import { useIndexedDB } from './hooks/useIndexedDB'

export function IndexedDB() {
  const { open, putItem, getItem, deleteItem } = useIndexedDB()
  const { showSnackbar } = useSnackbar()
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          whiteSpace: 'pre-wrap',
        }}
      >
        IndexedDB
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={async () => {
            const tx = await open({
              storeNames: ['swing'],
              mode: 'readwrite',
            })
            await putItem(tx, 'swing', { id: 1, name: 'Swing Mk2' })
          }}
        >
          Add Item
        </Button>
        <Button
          variant="contained"
          onClick={async () => {
            const tx = await open({
              storeNames: ['swing'],
            })
            const item = await getItem(tx, 'swing', 1)
            showSnackbar(item)
          }}
        >
          Get Item
        </Button>
        <Button
          variant="contained"
          onClick={async () => {
            const tx = await open({
              storeNames: ['swing'],
              mode: 'readwrite',
            })
            await deleteItem(tx, 'swing', 1)
          }}
        >
          Delete Item
        </Button>
      </Box>
    </Box>
  )
}
