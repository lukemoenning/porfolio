import Link from 'next/link'
import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const NavLinkWrapper = styled(Link)`
  font-size: ${theme.fontSize.lg};
  text-decoration: none;
  margin: 30px;
`

export const ActiveName = styled.span`
  position: relative;
  color: ${theme.colors.white};

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.white};
  }
`

export const InactiveName = styled.span`
  color: ${theme.colors.black};
`
