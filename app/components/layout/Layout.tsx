import { isValidElement } from 'react'
import type { ReactNode } from 'react'

import styled from 'styled-components'

import Footer from './Footer'
import Navbar from './Navbar'

import Error404 from '@/pages/404'

type LayoutProps = {
  children?: ReactNode
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default function Layout({ children }: LayoutProps) {
  const is404Page = isValidElement(children) && children.type === Error404

  return (
    <LayoutWrapper>
      {!is404Page && <Navbar />}
      <ContentWrapper>{children}</ContentWrapper>
      {!is404Page && <Footer />}
    </LayoutWrapper>
  )
}
