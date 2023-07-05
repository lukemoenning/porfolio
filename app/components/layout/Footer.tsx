import React from 'react'
import styled from 'styled-components'
import SocialLink from '@/app/components/SocialLink'
import { socials } from '@/app/libs/database'
import { theme } from '@/app/libs/theme'
import type { social } from '@/app/libs/types'


const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${theme.sizing.footer.height};
  bottom: 0;
  background: ${theme.colors.darkBlue};
`

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 10px;
  height: 100%;
  overflow: hidden;
  color: ${theme.colors.white};
  font-size: 0.8em;
`

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Copyright © 2022, Luke Moenning</p>
      </FooterContent>

      <FooterContent>
        {socials.map((social: social) => (
          <SocialLink key={social.name} social={social} size="small" displayName={false}/>
        ))}
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer