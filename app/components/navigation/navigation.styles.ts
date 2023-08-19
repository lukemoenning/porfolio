import Link from 'next/link'
import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${theme.sizing.navbar.height};
  background-color: ${theme.colors.lightBlue};
`

export const DesktopNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: ${theme.sizing.navbar.height};
  left: 0;
  width: 100%;
  height: calc(100vh - ${theme.sizing.navbar.height});
  background-color: ${theme.colors.lightBlue};
  z-index: 1;
`

export const MobileToggle = styled.div`
  display: none;
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.xxl};
  margin-left: auto;
  margin-right: 50px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`

export const MobileHomeLink = styled(Link)`
  display: none;
  margin-left: 50px;
  margin-right: auto;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`
