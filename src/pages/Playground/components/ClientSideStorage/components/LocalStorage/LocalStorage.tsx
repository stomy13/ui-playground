import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useLocalStorage } from './hooks/useLocalStorage'

export function LocalStorage() {
  const [count, setCount] = useState(0)
  const { setItem, getItem, removeItem, clear } = useLocalStorage()
  return (
    <Box>
      <Typography variant="h6">
        Local Storage はタブを閉じたりリロードしたりしてもデータが維持される
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
