import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${theme.sizing.footer.height};
  bottom: 0;
  background: ${theme.colors.darkBlue};
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 10px;
  height: 100%;
  overflow: hidden;
  color: ${theme.colors.lightBlue};
  font-size: 0.8em;
`
