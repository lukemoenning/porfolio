import { isValidElement } from 'react'
import type { ReactNode } from 'react'

import Footer from '../footer/footer'
import Navbar from '../navigation/navigation'

import * as S from './page-layout.styles'

import Error404 from '@/pages/404'

type PageLayoutProps = {
  children?: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const is404Page = isValidElement(children) && children.type === Error404

  return (
    <S.PageLayoutWrapper>
      {!is404Page && <Navbar />}
      <S.ContentWrapper>{children}</S.ContentWrapper>
      {!is404Page && <Footer />}
    </S.PageLayoutWrapper>
  )
}

export default PageLayout
