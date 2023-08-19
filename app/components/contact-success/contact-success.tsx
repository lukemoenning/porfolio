import NextLink from 'next/link'

import * as S from './contact-success.styles'

import { BodyWrapper } from '@/app/libs/common-styles'
import { theme } from '@/app/libs/theme'

const ContactSuccess = () => {
  return (
    <BodyWrapper>
      <S.ContactSuccessWrapper>
        <S.ContactSuccessTitle>
          Thanks for your message! I'll get back to you as soon as possible.
        </S.ContactSuccessTitle>
        <S.ContactSuccessTitle>
          Return{' '}
          <NextLink
            style={{
              color: `${theme.colors.lightBlue}`,
              textDecoration: 'none'
            }}
            href={`/`}
          >
            home.
          </NextLink>
        </S.ContactSuccessTitle>
      </S.ContactSuccessWrapper>
    </BodyWrapper>
  )
}

export default ContactSuccess
