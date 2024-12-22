import { Box, Button, Stack } from '@mui/material'
import { Helmet } from '~/components/layout/Helmet/Helmet'
import { MainLayout } from '~/components/layout/MainLayout/MainLayout'
import { TextareaAutosize } from '~/components/ui/TextArea/TextArea'

export function HeartLaundry() {
  return (
    <MainLayout>
      <Helmet title="Heart Laundry" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '480px',
          }}
        >
          <h1>Heart Laundry❤️🧺</h1>
          <TextareaAutosize
            aria-label="moyaira"
            placeholder="モヤモヤ・イライラ"
            sx={{
              // paddingとborderを引いたサイズ
              width: '455px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              width: '480px',
            }}
          >
            <Button variant="contained">Wash it!!</Button>
          </Box>
        </Stack>
      </Box>
    </MainLayout>
  )
}
