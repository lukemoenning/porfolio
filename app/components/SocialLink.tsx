import { SvgIcon } from '@mui/material'
import styled from 'styled-components'

import { theme } from '@/app/libs/theme'
import type { socialLinkProps } from '@/app/libs/types'

const SocialLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 3px;
  color: ${theme.colors.lightBlue};
  text-decoration: none;
  transition: 300ms;
  max-height: 30px;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`

const SocialName = styled.p`
  margin-left: 5px;
  color: ${theme.colors.lightBlue};
  font-size: large;
  font-style: italic;
`

function SocialLink({ social, size, displayName }: socialLinkProps) {
  return (
    <SocialLinkWrapper href={social.url}>
      <SvgIcon component={social.icon} size={size} />
      {displayName && <SocialName>{social.name}</SocialName>}
    </SocialLinkWrapper>
  )
}

export default SocialLink
