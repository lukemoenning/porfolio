import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'

import * as S from './social-link.styles'

import type { social } from '@/database/schema'

export const getSocialIcon = (icon: string): any => {
  switch (icon) {
    case 'Email':
      return Email
    case 'GitHub':
      return GitHub
    case 'LinkedIn':
      return LinkedIn
    case 'Phone':
      return Phone
    default:
      return null
  }
}

export interface socialLinkProps {
  social: social
  size: string
  displayName: boolean
}

function SocialLink({ social, size, displayName }: socialLinkProps) {
  return (
    <S.SocialLinkWrapper href={social.url}>
      <SvgIcon component={getSocialIcon(social.icon)} size={size} />
      {displayName && <S.SocialName>{social.name}</S.SocialName>}
    </S.SocialLinkWrapper>
  )
}

export default SocialLink
