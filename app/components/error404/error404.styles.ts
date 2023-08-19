import Link from 'next/link'
import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
`

export const ErrorPageCanvas = styled.canvas`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  z-index: 1;
  position: fixed;
`

export const ErrorPageMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  min-width: 700px;
`

export const ErrorPageMessage = styled.h1`
  font-size: large;
  color: ${theme.colors.lightBlue};
  max-width: 75%;
`

export const HomeLink = styled(Link)`
  font-size: large;
  font-weight: bold;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const StartGameLink = styled.span`
  font-size: large;
  font-weight: bold;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
