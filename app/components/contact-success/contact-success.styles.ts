import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const ContactSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  min-height: calc(100vh - ${theme.sizing.navbar.height});
  font-size: ${theme.fontSize.lg};
`

export const ContactSuccessTitle = styled.p`
  text-align: center;
`
