import type { AppProps } from 'next/app'

import PageLayout from '@/app/components/page-layout/page-layout'

import '../app/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default MyApp
