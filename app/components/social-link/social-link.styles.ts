import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const SocialLinkWrapper = styled.a`
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

export const SocialName = styled.p`
  margin-left: 5px;
  color: ${theme.colors.lightBlue};
  font-size: large;
  font-style: italic;
`
