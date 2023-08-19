import * as S from './footer.styles'

import SocialLink from '@/app/components/SocialLink'
import { socials } from '@/app/libs/database'
import type { social } from '@/app/libs/types'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <p>Copyright © 2022, Luke Moenning</p>
      </S.FooterContent>

      <S.FooterContent>
        {socials.map((social: social) => (
          <SocialLink
            key={'FooterSocials' + social.name}
            social={social}
            size="small"
            displayName={false}
          />
        ))}
      </S.FooterContent>
    </S.FooterWrapper>
  )
}

export default Footer
