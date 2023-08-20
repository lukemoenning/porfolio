import type { GetStaticProps } from 'next'

import Projects from '@/app/components/projects/projects'
import database from '@/database'
import type { project } from '@/database/schema'

export interface ProjectsPageProps {
  data: project[]
  hasError: boolean
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = database.projects

  if (!projectsData) {
    return {
      props: {
        data: {},
        hasError: true
      }
    }
  }

  return {
    props: {
      data: projectsData,
      hasError: false
    }
  }
}

const ProjectsPage = (props: ProjectsPageProps) => {
  if (props.hasError) {
    return <div>Something went wrong!</div>
  }

  return <Projects projects={props.data} />
}

export default ProjectsPage
