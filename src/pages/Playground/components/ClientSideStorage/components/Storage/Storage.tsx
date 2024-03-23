import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSnackbar } from '~/components/global/Snackbar/hooks/useSnackbar'
import type { UseStorageFunc } from '../../hooks/useStorage'

type Props = {
  description: string
  useStorage: UseStorageFunc
}

export function Storage({ description, useStorage }: Props) {
  const { setItem, getItem, removeItem, clear } = useStorage()
  const savedName = getItem('name')
  const initialCount = savedName ? Number(savedName.split(' ')[1]) + 1 : 0
  const [count, setCount] = useState(initialCount)
  const { showSnackbar } = useSnackbar()
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          whiteSpace: 'pre-wrap',
        }}
      >
        {description}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setItem('name', 'John ' + count)
            setCount(prev => prev + 1)
          }}
        >
          Set Item
        </Button>
        <Button
          variant="contained"
          onClick={() => showSnackbar(getItem('name'))}
        >
          Get Item
        </Button>
        <Button variant="contained" onClick={() => removeItem('name')}>
          Remove Item
        </Button>
        <Button variant="contained" onClick={clear}>
          Clear
        </Button>
      </Box>
    </Box>
  )
}
