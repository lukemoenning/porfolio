import { useEffect, useState } from 'react'

import {
  ArrowRightAltOutlined,
  EditNoteOutlined,
  EmailOutlined,
  PermIdentityOutlined,
  PhoneOutlined
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import styled from 'styled-components'

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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 50px 0 20px 0;
`

const FormSetting = styled.input`
  display: none;
`

const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  width: 100%;
  max-width: 350px;
  font-size: ${theme.fontSize.xl};
`

const ContactInput = styled.input`
  height: 35px;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.lightBlue};
    box-shadow: 0 0 5px ${theme.colors.lightBlue};
  }
`

const ContactTextArea = styled.textarea`
  height: 60px;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.lightBlue};
    box-shadow: 0 0 5px ${theme.colors.lightBlue};
  }
`

const ContactSubmit = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${theme.colors.offWhite};
  color: ${theme.colors.lightBlue};
  padding: 10px 20px 10px 20px;
  transition: 0.3s;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.colors.lightBlue};
    color: ${theme.colors.offWhite};
  }
`

const ContactSocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin-top: 40px;
`

const ContactSocialsText = styled.p`
  color: ${theme.colors.lightBlue};
  font-size: ${theme.fontSize.md};
  margin: 0;
`

function Contact() {
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
          <ContactForm action="https://api.web3forms.com/submit" method="POST">
            <FormSetting
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORMS?.toString()}
            />
            <FormSetting
              type="hidden"
              name="subject"
              value="New Email on Portfolio"
            />
            <FormSetting
              type="hidden"
              name="from_name"
              value="lukemoenning.com"
            />
            <FormSetting type="checkbox" name="botcheck" className="hidden" />
            <FormSetting type="hidden" name="redirect" value={redirectLink} />

            {/* EMAIL INPUT */}
            <ContactItemWrapper>
              <FormLabel
                icon={EmailOutlined}
                text={'Your Email'}
                required={true}
              />
              <ContactInput
                type="email"
                name="email"
                placeholder="Email"
                tabIndex={1}
                required
                autoFocus
              />
            </ContactItemWrapper>

            {/* FIRST NAME INPUT */}
            <ContactItemWrapper>
              <FormLabel
                icon={PermIdentityOutlined}
                text={'Your Name'}
                required={true}
              />
              <ContactInput
                type="text"
                name="First Name"
                placeholder="First Name"
                tabIndex={2}
                required
              />
            </ContactItemWrapper>

            {/* PHONE NUMBER INPUT */}
            <ContactItemWrapper>
              <FormLabel
                icon={PhoneOutlined}
                text={'Your Phone Number'}
                required={false}
              />
              <ContactInput
                type="text"
                name="Phone Number"
                placeholder="Phone Number"
                tabIndex={3}
              />
            </ContactItemWrapper>

            {/* MESSAGE INPUT */}
            <ContactItemWrapper>
              <FormLabel
                icon={EditNoteOutlined}
                text={'Your Message'}
                required={true}
              />
              <ContactTextArea
                name="message"
                placeholder="Enter your message."
                tabIndex={4}
                required
              />
            </ContactItemWrapper>

            {/* SUBMIT BUTTON */}
            <ContactSubmit type="submit" tabIndex={5}>
              Send Message
            </ContactSubmit>

            <ContactSocialsWrapper>
              {/* TODO: Socials */}
              <ContactSocialsText>
                Connect with Me
                <SvgIcon
                  component={ArrowRightAltOutlined}
                  sx={{
                    fontSize: theme.fontSize.sm,
                    verticalAlign: 'middle',
                    margin: '0 5px 0 5px'
                  }}
                />
              </ContactSocialsText>

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
            </ContactSocialsWrapper>
          </ContactForm>
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Contact
