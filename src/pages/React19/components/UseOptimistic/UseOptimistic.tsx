import { useActionState, useOptimistic } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { EquipmentTitle } from '~/components/feature/EquipmentTitle/EquipmentTitle'

export function UseOptimistic() {
  const [count, increment] = useActionState(async currentCount => {
    addOptimistic(1)
    await new Promise(resolve => setTimeout(resolve, 1000))
    return currentCount + 1
  }, 0)

  const [displayCount, addOptimistic] = useOptimistic(
    count,
    // 更新関数で楽観的更新を行なっている
    (currentCount, optimisticValue: number) => {
      return currentCount + optimisticValue
    },
  )

  return (
    <Box
      component="form"
      // increment に失敗した場合、戻す方法はどうする？
      action={increment}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="UseOptimistic" />
      <Box>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        >
          useOptimistic は 非同期な更新処理時に UI を楽観的更新するためのフック
        </Typography>
        <Button variant="contained" type="submit">
          Increment
        </Button>
        <Typography>displayCount = {displayCount}</Typography>
        <Typography>count = {count}</Typography>
      </Box>
    </Box>
  )
}
