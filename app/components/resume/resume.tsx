import * as S from './resume.styles'

import {
  BodyContentNarrow,
  BodyContentWrapper,
  BodyHeaderNarrow,
  BodyHeaderWrapper,
  BodyWrapper,
  HeaderDescription,
  HeaderTitle
} from '@/app/libs/common-styles'

const Resume = () => {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Resume.</HeaderTitle>
          <HeaderDescription>
            An official copy of my resume.{' '}
            <S.NewTabPDF href={'/Luke_Moenning_Resume.pdf'} target="blank">
              Open in a new tab.
            </S.NewTabPDF>
          </HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <S.Pdf src={'/Luke_Moenning_Resume.pdf#view=FitH'} />
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Resume
