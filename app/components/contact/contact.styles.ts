import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 50px 0 20px 0;
`

export const FormSetting = styled.input`
  display: none;
`

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  width: 100%;
  max-width: 350px;
  font-size: ${theme.fontSize.xl};
`

export const ContactInput = styled.input`
  height: 35px;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.lightBlue};
    box-shadow: 0 0 5px ${theme.colors.lightBlue};
  }
`

export const ContactTextArea = styled.textarea`
  height: 60px;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.lightBlue};
    box-shadow: 0 0 5px ${theme.colors.lightBlue};
  }
`

export const ContactSubmit = styled.button`
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

export const ContactSocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin-top: 40px;
`

export const ContactSocialsText = styled.p`
  color: ${theme.colors.lightBlue};
  font-size: ${theme.fontSize.md};
  margin: 0;
`
