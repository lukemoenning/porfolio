import * as S from './footer.styles'

import SocialLink from '@/app/components/social-link/social-link'
import database from '@/database'
import type { social } from '@/database/schema'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <p>Copyright © 2022, Luke Moenning</p>
      </S.FooterContent>

      <S.FooterContent>
        {database.socials.map((social: social) => (
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
