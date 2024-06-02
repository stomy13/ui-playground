import { useState, useTransition, useCallback } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { EquipmentTitle } from '~/components/domain/EquipmentTitle/EquipmentTitle'

export function Transition() {
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()
  const handleClick = useCallback(() => {
    startTransition(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setCount(prev => prev + 1)
    })
  }, [startTransition])
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
          useTransition に非同期関数（a.k.a Actions）を渡せるようになった
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          Increment
        </Button>
        {isPending ? (
          <Typography>loading...</Typography>
        ) : (
          <Typography>count = {count}</Typography>
        )}
      </Box>
    </Box>
  )
}
