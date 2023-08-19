import styled from 'styled-components'

import {
  BodyContentNarrow,
  BodyContentWrapper,
  BodyHeaderNarrow,
  BodyHeaderWrapper,
  BodyWrapper,
  HeaderDescription,
  HeaderTitle
} from '@/app/libs/common-styles'
import { theme } from '@/app/libs/theme'

const Pdf = styled.iframe`
  margin: 25px 0 25px 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 800px;
`

const NewTabPDF = styled.a`
  text-decoration: none;
  color: ${theme.colors.lightBlue};
`

function Resume() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Resume.</HeaderTitle>
          <HeaderDescription>
            An official copy of my resume.{' '}
            <NewTabPDF href={'/Moenning_Luke_Resume.pdf'} target="blank">
              Open in a new tab.
            </NewTabPDF>
          </HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <Pdf src={'/Moenning_Luke_Resume.pdf#view=FitH'} />
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Resume
