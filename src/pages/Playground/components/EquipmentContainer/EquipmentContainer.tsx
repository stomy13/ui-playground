import { Box } from '@mui/system'
import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  children: ReactNode
}

export function EquipmentContainer({ title, children }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {title}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          width: '300px',
          border: '1px solid gray',
          borderRadius: '8px',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
