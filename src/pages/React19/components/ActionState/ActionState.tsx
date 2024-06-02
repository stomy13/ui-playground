import { useCallback, useActionState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { EquipmentTitle } from '~/components/domain/EquipmentTitle/EquipmentTitle'

export function ActionState() {
  const [count, increment, isPending] = useActionState(async currentCount => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return currentCount + 1
  }, 0)

  const handleClick = useCallback(() => {
    increment()
  }, [increment])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="ActionState" />
      <Box>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        >
          useActionState は useTransition と useReducer
          を組み合わせたようなフック。 useTransition
          を使用する場合は、useActionState を使用することを検討する。
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
