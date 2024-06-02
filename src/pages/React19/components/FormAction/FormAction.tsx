import { useActionState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { EquipmentTitle } from '~/components/domain/EquipmentTitle/EquipmentTitle'

export function FormAction() {
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
      <EquipmentTitle title="FormAction" />
      <form action={increment}>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        >
          form component に action が指定できるようになった
        </Typography>
        <Button variant="contained" type="submit">
          Increment
        </Button>
        {isPending ? (
          <Typography>loading...</Typography>
        ) : (
          <Typography>count = {count}</Typography>
        )}
      </form>
    </Box>
  )
}
