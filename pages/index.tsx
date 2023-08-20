import type { GetStaticProps } from 'next'

import About from '@/app/components/about/about'
import database from '@/database'
import type { about } from '@/database/schema'

export interface AboutPageProps {
  data: about
  hasError: boolean
}

export const getStaticProps: GetStaticProps = async () => {
  const { me, socials } = database

  if (!me || !socials) {
    return {
      props: {
        data: {},
        hasError: true
      }
    }
  }

  return {
    props: {
      data: { me, socials },
      hasError: false
    }
  }
}

const AboutPage = (props: AboutPageProps) => {
  if (props.hasError) {
    return <div>Something went wrong!</div>
  }

  return <About me={props.data.me} socials={props.data.socials} />
}

export default AboutPage
