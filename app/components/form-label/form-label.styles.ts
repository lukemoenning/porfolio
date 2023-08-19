import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const FormLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.sm};
`

export const FormLabelText = styled.p`
  margin-left: 10px;
`

export const Required = styled.p`
  color: ${theme.colors.lightBlue};
`
