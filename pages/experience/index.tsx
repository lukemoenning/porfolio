import type { GetStaticProps } from 'next'

import Experience from '@/app/components/experience/experience'
import database from '@/database'
import type { allExperience } from '@/database/schema'

export interface ExperiencePageProps {
  data: allExperience
  hasError: boolean
}

export const getStaticProps: GetStaticProps = async () => {
  const { work, education } = database

  if (!work || !education) {
    return {
      props: {
        data: {},
        hasError: true
      }
    }
  }

  return {
    props: {
      data: { work, education },
      hasError: false
    }
  }
}

const ExperiencePage = (props: ExperiencePageProps) => {
  if (props.hasError) {
    return <div>Something went wrong!</div>
  }

  return <Experience work={props.data.work} education={props.data.education} />
}

export default ExperiencePage
