import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useLocalStorage } from './hooks/useLocalStorage'

export function LocalStorage() {
  const { setItem, getItem, removeItem, clear } = useLocalStorage()
  const savedName = getItem('name')
  const initialCount = savedName ? Number(savedName.split(' ')[1]) + 1 : 0
  const [count, setCount] = useState(initialCount)
  return (
    <Box>
      <Typography variant="h6">
        Local Storage はタブを閉じてもデータが維持される
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
        <Button variant="contained" onClick={() => alert(getItem('name'))}>
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
