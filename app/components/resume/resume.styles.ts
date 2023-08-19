import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const Pdf = styled.iframe`
  margin: 25px 0 25px 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 800px;
`

export const NewTabPDF = styled.a`
  text-decoration: none;
  color: ${theme.colors.lightBlue};
`
