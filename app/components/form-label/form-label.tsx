import { SvgIcon } from '@mui/material'
import type { SvgIconProps } from '@mui/material'

import * as S from './form-label.styles'

import { theme } from '@/app/libs/theme'

export interface formLabelProps {
  icon: React.ComponentType<SvgIconProps>
  text: string
  required: boolean
}

const FormLabel = ({ icon, text, required }: formLabelProps) => {
  return (
    <S.FormLabelWrapper>
      <SvgIcon component={icon} sx={{ fontSize: theme.fontSize.sm }} />
      <S.FormLabelText>{text}</S.FormLabelText>
      {required && <S.Required>*</S.Required>}
    </S.FormLabelWrapper>
  )
}

export default FormLabel
