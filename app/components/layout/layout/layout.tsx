import { isValidElement } from 'react'
import type { ReactNode } from 'react'

import Footer from '../footer/footer'
import Navbar from '../navigation/navigation'

import * as S from './layout.styles'

import Error404 from '@/pages/404'

type LayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const is404Page = isValidElement(children) && children.type === Error404

  return (
    <S.LayoutWrapper>
      {!is404Page && <Navbar />}
      <S.ContentWrapper>{children}</S.ContentWrapper>
      {!is404Page && <Footer />}
    </S.LayoutWrapper>
  )
}

export default Layout
