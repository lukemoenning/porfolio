import { SvgIcon } from '@mui/material'

import * as S from './social-link.styles'

import type { socialLinkProps } from '@/app/libs/types'

function SocialLink({ social, size, displayName }: socialLinkProps) {
  return (
    <S.SocialLinkWrapper href={social.url}>
      <SvgIcon component={social.icon} size={size} />
      {displayName && <S.SocialName>{social.name}</S.SocialName>}
    </S.SocialLinkWrapper>
  )
}

export default SocialLink
