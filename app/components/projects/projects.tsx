import * as S from './projects.styles'

import ProjectCard from '@/app/components/project-card/project-card'
import {
  BodyContentWrapper,
  BodyHeaderNarrow,
  BodyHeaderWrapper,
  BodyWrapper,
  HeaderDescription,
  HeaderTitle
} from '@/app/libs/common-styles'
import { projects } from '@/app/libs/database'
import type { project } from '@/app/libs/types'

const Projects = () => {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Projects.</HeaderTitle>
          <HeaderDescription>
            Checkout of some of the projects I've worked on!
          </HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <S.ProjectsWrapper>
          {projects.map((project: project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </S.ProjectsWrapper>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Projects
