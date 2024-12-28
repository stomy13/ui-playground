import MuiCard from '@mui/material/Card'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Card({ children }: Props) {
  return <MuiCard sx={{ minWidth: 345, maxWidth: 345 }}>{children}</MuiCard>
}
