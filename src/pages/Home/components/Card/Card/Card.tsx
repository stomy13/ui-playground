import React from 'react'
import MuiCard from '@mui/material/Card'

type Props = {
  children: React.ReactNode
}

export function Card({ children }: Props) {
  return <MuiCard sx={{ minWidth: 345, maxWidth: 345 }}>{children}</MuiCard>
}
