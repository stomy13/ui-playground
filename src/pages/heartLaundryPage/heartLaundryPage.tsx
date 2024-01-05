import { Stack } from '@mui/material'
import { MainLayout } from '../../components/mainLayout/MainLayout'
import { TextareaAutosize } from '../../components/textArea/TextArea'

export function HeartLaundryPage() {
  return (
    <MainLayout>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1>Heart Laundry❤️🧺</h1>
        <TextareaAutosize
          aria-label="moyaira"
          placeholder="モヤモヤ・イライラ"
        />
      </Stack>
    </MainLayout>
  )
}
