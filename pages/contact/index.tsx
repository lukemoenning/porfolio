import type { GetStaticProps } from 'next'

import Contact from '@/app/components/contact/contact'
import database from '@/database'
import type { social } from '@/database/schema'

export type ContactPageProps = {
  data: social[]
  hasError: boolean
}

export const getStaticProps: GetStaticProps = async () => {
  const socialsData = database.socials

  if (!socialsData) {
    return {
      props: {
        data: {},
        hasError: true
      }
    }
  }

  return {
    props: {
      data: socialsData,
      hasError: false
    }
  }
}

const ContactPage = (props: ContactPageProps) => {
  if (props.hasError) {
    return <div>Something went wrong!</div>
  }

  return <Contact socials={props.data} />
}

export default ContactPage
