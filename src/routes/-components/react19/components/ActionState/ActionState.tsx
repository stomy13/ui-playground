import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useActionState } from 'react'
import { EquipmentTitle } from '~/components/feature/EquipmentTitle/EquipmentTitle'

export function ActionState() {
  const [count, increment, isPending] = useActionState(async currentCount => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return currentCount + 1
  }, 0)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="ActionState" />
      <Box component="form" action={increment}>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        >
          useActionState は useTransition と useReducer
          を組み合わせたようなフック。 useTransition
          を使用する場合は、useActionState
          を使用することを検討する。useActionState は useTransition
          と異なり、dispatch 関数が連打された場合、前の dispatch
          関数が完了してから次の dispatch 関数の実行が開始される。 form action
          呼び出された際に使用することができる。
        </Typography>
        <Button variant="contained" type="submit">
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
