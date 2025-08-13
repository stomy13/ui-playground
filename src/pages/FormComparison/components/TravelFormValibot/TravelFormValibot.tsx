import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import {
  getFormProps,
  getInputProps,
  getSelectProps,
  useForm,
} from '@conform-to/react'
import { parseWithValibot } from '@conform-to/valibot'
import { useActionState } from 'react'
import * as v from 'valibot'

const travelSchema = v.pipe(
  v.object({
    travelType: v.pipe(
      v.picklist(['domestic', 'international', 'daytrip']),
      v.nonEmpty('旅行タイプを選択してください'),
    ),
    participants: v.pipe(
      v.number(),
      v.minValue(1, '人数は1人以上である必要があります'),
    ),
    ageGroups: v.pipe(
      v.array(v.picklist(['child', 'adult', 'senior'])),
      v.minLength(1, '年齢層を選択してください'),
    ),
    passportRequired: v.optional(v.boolean()),
    visaRequired: v.optional(v.boolean()),
    childAgeRanges: v.optional(v.array(v.picklist(['0-2', '3-6', '7-12']))),
    childServices: v.optional(v.array(v.string())),
    accessibilityNeeds: v.optional(v.array(v.string())),
    specialRequests: v.optional(v.string()),
  }),
  v.forward(
    v.check(data => {
      if (
        data.travelType === 'international' &&
        data.ageGroups.includes('adult')
      ) {
        return data.passportRequired !== undefined
      }
      return true
    }, 'パスポート情報の入力が必要です'),
    ['passportRequired'],
  ),
)

type TravelFormData = v.InferInput<typeof travelSchema>

interface ActionState {
  success: boolean
  message: string
  data?: TravelFormData
}

async function submitTravelForm(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const submission = parseWithValibot(formData, { schema: travelSchema })

  if (submission.status !== 'success') {
    return {
      success: false,
      message: 'フォームにエラーがあります',
    }
  }

  try {
    const existingData = JSON.parse(
      localStorage.getItem('travelBookings') || '[]',
    )
    const newData = {
      id: Date.now(),
      ...submission.value,
      createdAt: new Date().toISOString(),
      validationLibrary: 'valibot',
    }
    existingData.push(newData)
    localStorage.setItem('travelBookings', JSON.stringify(existingData))

    return {
      success: true,
      message: 'フォームが正常に送信されました',
      data: submission.value,
    }
  } catch (error) {
    return {
      success: false,
      message: 'データの保存に失敗しました',
    }
  }
}

export function TravelFormValibot() {
  const [state, formAction] = useActionState(submitTravelForm, {
    success: false,
    message: '',
  })

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithValibot(formData, { schema: travelSchema })
    },
    shouldRevalidate: 'onBlur',
  })

  const travelType = fields.travelType.value
  const ageGroups = Array.isArray(fields.ageGroups.value)
    ? fields.ageGroups.value
    : []

  return (
    <Box
      component="form"
      {...getFormProps(form)}
      action={formAction}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl fullWidth={true} error={!!fields.travelType.errors}>
        <InputLabel>旅行タイプ</InputLabel>
        <Select {...getSelectProps(fields.travelType)} label="旅行タイプ">
          <MenuItem value="domestic">国内旅行</MenuItem>
          <MenuItem value="international">海外旅行</MenuItem>
          <MenuItem value="daytrip">日帰り旅行</MenuItem>
        </Select>
        <FormHelperText>{fields.travelType.errors}</FormHelperText>
      </FormControl>

      <TextField
        {...getInputProps(fields.participants, { type: 'number' })}
        label="参加人数"
        type="number"
        fullWidth={true}
        error={!!fields.participants.errors}
        helperText={fields.participants.errors}
        inputProps={{ min: 1 }}
      />

      <FormControl component="fieldset" error={!!fields.ageGroups.errors}>
        <FormLabel component="legend">年齢層（複数選択可）</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                {...getInputProps(fields.ageGroups, {
                  type: 'checkbox',
                  value: 'child',
                })}
              />
            }
            label="子供"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...getInputProps(fields.ageGroups, {
                  type: 'checkbox',
                  value: 'adult',
                })}
              />
            }
            label="大人"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...getInputProps(fields.ageGroups, {
                  type: 'checkbox',
                  value: 'senior',
                })}
              />
            }
            label="高齢者"
          />
        </FormGroup>
        <FormHelperText>{fields.ageGroups.errors}</FormHelperText>
      </FormControl>

      {travelType === 'international' && ageGroups.includes('adult') && (
        <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom={true}>
            海外旅行情報
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...getInputProps(fields.passportRequired, {
                    type: 'checkbox',
                  })}
                />
              }
              label="パスポート情報入力済み"
            />
            <FormControlLabel
              control={
                <Checkbox
                  {...getInputProps(fields.visaRequired, { type: 'checkbox' })}
                />
              }
              label="ビザが必要"
            />
          </FormGroup>
          {fields.passportRequired.errors && (
            <FormHelperText error={true}>
              {fields.passportRequired.errors}
            </FormHelperText>
          )}
        </Box>
      )}

      {ageGroups.includes('child') && (
        <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom={true}>
            お子様情報
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">年齢範囲（複数選択可）</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.childAgeRanges, {
                      type: 'checkbox',
                      value: '0-2',
                    })}
                  />
                }
                label="0-2歳"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.childAgeRanges, {
                      type: 'checkbox',
                      value: '3-6',
                    })}
                  />
                }
                label="3-6歳"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.childAgeRanges, {
                      type: 'checkbox',
                      value: '7-12',
                    })}
                  />
                }
                label="7-12歳"
              />
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">追加サービス</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.childServices, {
                      type: 'checkbox',
                      value: 'babysitting',
                    })}
                  />
                }
                label="ベビーシッター"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.childServices, {
                      type: 'checkbox',
                      value: 'kidsmeal',
                    })}
                  />
                }
                label="キッズミール"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.childServices, {
                      type: 'checkbox',
                      value: 'playground',
                    })}
                  />
                }
                label="キッズプレイエリア"
              />
            </FormGroup>
          </FormControl>
        </Box>
      )}

      {ageGroups.includes('senior') && (
        <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="h6" gutterBottom={true}>
            バリアフリー対応
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">対応要望（複数選択可）</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.accessibilityNeeds, {
                      type: 'checkbox',
                      value: 'wheelchair',
                    })}
                  />
                }
                label="車椅子対応"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.accessibilityNeeds, {
                      type: 'checkbox',
                      value: 'elevator',
                    })}
                  />
                }
                label="エレベーター完備"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...getInputProps(fields.accessibilityNeeds, {
                      type: 'checkbox',
                      value: 'handrails',
                    })}
                  />
                }
                label="手すり設置"
              />
            </FormGroup>
          </FormControl>
        </Box>
      )}

      <TextField
        {...getInputProps(fields.specialRequests, { type: 'text' })}
        label="特別なご要望"
        multiline={true}
        rows={3}
        fullWidth={true}
        placeholder="その他ご要望があればご記入ください"
      />

      <Button type="submit" variant="contained" size="large">
        予約申し込み
      </Button>

      {state.message && (
        <Box
          sx={{
            p: 2,
            bgcolor: state.success ? 'success.light' : 'error.light',
            borderRadius: 1,
          }}
        >
          <Typography color={state.success ? 'success.dark' : 'error.dark'}>
            {state.message}
          </Typography>
          {state.success && state.data && (
            <Box sx={{ mt: 1 }}>
              <Chip label="Valibot で検証済み" color="secondary" size="small" />
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                データはLocalStorageに保存されました
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}
