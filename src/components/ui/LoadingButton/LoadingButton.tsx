import { Button, ButtonProps, CircularProgress } from '@mui/material'
import { PropsWithChildren, useCallback, useState } from 'react'

type Props = {
  isLoading: boolean
} & ButtonProps

export function LoadingButton({
  children,
  isLoading,
  ...buttonProps
}: PropsWithChildren<Props>) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  const ref = useCallback(
    (el: HTMLButtonElement | null) => {
      if (el && !dimensions.width && !dimensions.height) {
        setDimensions({
          width: el.offsetWidth,
          height: el.offsetHeight,
        })
      }
    },
    [dimensions.width, dimensions.height],
  )

  return isLoading ? (
    <Button
      variant="contained"
      disabled
      sx={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      <CircularProgress size={24} />
    </Button>
  ) : (
    <Button variant="contained" {...buttonProps} ref={ref}>
      {children}
    </Button>
  )
}
