import styled from 'styled-components'
import { formLabelProps } from '@/app/libs/types'
import { theme } from '@/app/libs/theme'
import { SvgIcon } from '@mui/material'

const FormLabelWrapper = styled.div` 
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.sm};
`

const FormLabelText = styled.p`
  margin-left: 10px;
`

const Required = styled.p`
  color: ${theme.colors.lightBlue};
`

function FormLabel({ icon, text, required } : formLabelProps) {
  return (
    <FormLabelWrapper>
      <SvgIcon component={icon} sx={{ fontSize: theme.fontSize.sm }} />
      <FormLabelText>{text}</FormLabelText>
      {
        required && (
          <Required>*</Required>
        )
      }
    </FormLabelWrapper>
  )
}

export default FormLabel