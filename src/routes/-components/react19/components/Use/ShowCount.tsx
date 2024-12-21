import { use } from 'react'
import { Typography } from '@mui/material'

type props = {
  count: Promise<number>
}

export function ShowCount({ count }: props) {
  const value: number = use(count)
  return <Typography>count = {value}</Typography>
}
