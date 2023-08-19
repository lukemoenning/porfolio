import { useEffect, useState } from 'react'

import {
  ArrowRightAltOutlined,
  EditNoteOutlined,
  EmailOutlined,
  PermIdentityOutlined,
  PhoneOutlined
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'

import * as S from './contact.styles'

import FormLabel from '@/app/components/form-label/form-label'
import SocialLink from '@/app/components/social-link/social-link'
import {
  BodyContentNarrow,
  BodyContentWrapper,
  BodyHeaderNarrow,
  BodyHeaderWrapper,
  BodyWrapper,
  HeaderDescription,
  HeaderTitle
} from '@/app/libs/common-styles'
import { socials } from '@/app/libs/database'
import { theme } from '@/app/libs/theme'

const Contact = () => {
  const [redirectLink, setRedirectLink] = useState<string>('')

  useEffect(() => {
    setRedirectLink(window.location.href + '/success')
  }, [])

  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Contact.</HeaderTitle>
          <HeaderDescription>
            I'm always open to new opportunities and connections!
          </HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <S.ContactForm
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <S.FormSetting
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORMS?.toString()}
            />
            <S.FormSetting
              type="hidden"
              name="subject"
              value="New Email on Portfolio"
            />
            <S.FormSetting
              type="hidden"
              name="from_name"
              value="lukemoenning.com"
            />
            <S.FormSetting type="checkbox" name="botcheck" className="hidden" />
            <S.FormSetting type="hidden" name="redirect" value={redirectLink} />

            {/* EMAIL INPUT */}
            <S.ContactItemWrapper>
              <FormLabel
                icon={EmailOutlined}
                text={'Your Email'}
                required={true}
              />
              <S.ContactInput
                type="email"
                name="email"
                placeholder="Email"
                tabIndex={1}
                required
                autoFocus
              />
            </S.ContactItemWrapper>

            {/* FIRST NAME INPUT */}
            <S.ContactItemWrapper>
              <FormLabel
                icon={PermIdentityOutlined}
                text={'Your Name'}
                required={true}
              />
              <S.ContactInput
                type="text"
                name="First Name"
                placeholder="First Name"
                tabIndex={2}
                required
              />
            </S.ContactItemWrapper>

            {/* PHONE NUMBER INPUT */}
            <S.ContactItemWrapper>
              <FormLabel
                icon={PhoneOutlined}
                text={'Your Phone Number'}
                required={false}
              />
              <S.ContactInput
                type="text"
                name="Phone Number"
                placeholder="Phone Number"
                tabIndex={3}
              />
            </S.ContactItemWrapper>

            {/* MESSAGE INPUT */}
            <S.ContactItemWrapper>
              <FormLabel
                icon={EditNoteOutlined}
                text={'Your Message'}
                required={true}
              />
              <S.ContactTextArea
                name="message"
                placeholder="Enter your message."
                tabIndex={4}
                required
              />
            </S.ContactItemWrapper>

            {/* SUBMIT BUTTON */}
            <S.ContactSubmit type="submit" tabIndex={5}>
              Send Message
            </S.ContactSubmit>

            <S.ContactSocialsWrapper>
              {/* TODO: Socials */}
              <S.ContactSocialsText>
                Connect with Me
                <SvgIcon
                  component={ArrowRightAltOutlined}
                  sx={{
                    fontSize: theme.fontSize.sm,
                    verticalAlign: 'middle',
                    margin: '0 5px 0 5px'
                  }}
                />
              </S.ContactSocialsText>

              {socials.map((social) => {
                return (
                  <SocialLink
                    key={'ContactFormSocials' + social.name}
                    social={social}
                    size={'medium'}
                    displayName={false}
                  />
                )
              })}
            </S.ContactSocialsWrapper>
          </S.ContactForm>
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Contact
