import NextLink from 'next/link'
import styled from 'styled-components'

import { BodyWrapper } from '@/app/libs/common-styles'
import { theme } from '@/app/libs/theme'

const ContactSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  min-height: calc(100vh - ${theme.sizing.navbar.height});
  font-size: ${theme.fontSize.lg};
`

const ContactSuccessTitle = styled.p`
  text-align: center;
`

function ContactSuccess() {
  return (
    <BodyWrapper>
      <ContactSuccessWrapper>
        <ContactSuccessTitle>
          Thanks for your message! I'll get back to you as soon as possible.
        </ContactSuccessTitle>
        <ContactSuccessTitle>
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
        </ContactSuccessTitle>
      </ContactSuccessWrapper>
    </BodyWrapper>
  )
}

export default ContactSuccess
