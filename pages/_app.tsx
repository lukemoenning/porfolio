import type { AppProps } from 'next/app'

import Layout from '@/app/components/layout/Layout'

import '../app/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
