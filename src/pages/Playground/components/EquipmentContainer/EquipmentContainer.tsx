import { Box } from '@mui/system'

type Props = {
  children: React.ReactNode
}

export function EquipmentContainer({ children }: Props) {
  return (
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
  )
}
