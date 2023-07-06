import styled from 'styled-components'
import { 
  BodyWrapper,
  BodyHeaderWrapper,
  HeaderTitle,
  HeaderDescription,
  BodyHeaderNarrow, 
  BodyContentWrapper, 
  BodyContentNarrow
} from '@/app/libs/common-components'

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 20px 0 20px 0;
`

const FormSetting = styled.input`
  display: none;
`

const ContactInput = styled.input`
  width: 100%;
  max-width: 350px;
`

const ContactTextArea = styled.textarea`
  width: 100%;
  max-width: 350px;
`

const ContactSubmit = styled.button`
  width: 100%;
  max-width: 350px;
`

const ContactSocialsWrapper = styled.div`
  display: flex;
`

function Contact() {
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
            <FormSetting type="hidden" name="access_key" value={process.env.WEB3FORMS?.toString()} />
            <FormSetting type="hidden" name="subject" value="New Email on Portfolio" />
            <FormSetting type="hidden" name="from_name" value="lukemoenning.com" />
            <FormSetting type="checkbox" name="botcheck" className="hidden" />
            <FormSetting type="hidden" name="redirect" value="https://web3forms.com/success" />

            <ContactInput type="email" name="email" placeholder="Email" tabIndex={1} required autoFocus/>
            <ContactInput type="text" name="First Name" placeholder="First Name" tabIndex={2} required />
            <ContactInput type="text" name="Phone Number" placeholder="Phone Number" tabIndex={3} />
            <ContactTextArea name="message" placeholder="Enter your message." tabIndex={4} required />

            <ContactSubmit type="submit" tabIndex={5}>Submit Form</ContactSubmit>

            <ContactSocialsWrapper>
              {/* TODO: Socials */}
            </ContactSocialsWrapper>
          </ContactForm>
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>

    
  )
}

export default Contact