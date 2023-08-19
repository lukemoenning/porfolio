import type { AppProps } from 'next/app'

import Layout from '@/app/components/layout/layout'

import '../app/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
