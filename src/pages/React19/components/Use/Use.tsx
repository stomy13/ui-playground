import { Suspense, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { EquipmentTitle } from '~/components/feature/EquipmentTitle/EquipmentTitle'
import { ShowCount } from './ShowCount'

export function Use() {
  const [visible, setVisible] = useState(false)
  const handleClick = () => setVisible(prev => !prev)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <EquipmentTitle title="Use" />
      <Box>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        >
          use は Suspense
          と一緒に使うフック。コンポーネント内から直接Promiseの中身を取り出せることができる。
        </Typography>
        <Button variant="contained" onClick={handleClick}>
          Toggle Visible
        </Button>
        <Suspense fallback={<Box>loading...</Box>}>
          {visible && (
            <ShowCount
              count={
                new Promise(resolve =>
                  setTimeout(() => {
                    resolve(1234)
                  }, 1000),
                )
              }
            />
          )}
        </Suspense>
      </Box>
    </Box>
  )
}
