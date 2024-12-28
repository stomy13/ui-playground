import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useCallback, useState, useTransition } from 'react'
import { EquipmentTitle } from '~/components/feature/EquipmentTitle/EquipmentTitle'
import { LoadingButton } from '~/components/ui/LoadingButton/LoadingButton'

export function Transition() {
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()

  const handleClick = useCallback(() => {
    startTransition(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setCount(prev => prev + 1)
    })
  }, [])

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

        <LoadingButton
          isLoading={isPending}
          variant="contained"
          onClick={handleClick}
        >
          Increment
        </LoadingButton>
        <Typography>{isPending ? 'loading...' : `count = ${count}`}</Typography>
      </Box>
    </Box>
  )
}
