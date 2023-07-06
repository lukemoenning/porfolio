/**
 * Projects component
 */

import React from 'react'
import styled from 'styled-components'
import { 
  BodyWrapper,
  BodyHeaderWrapper,
  BodyHeaderNarrow,
  HeaderTitle,
  HeaderDescription,
  BodyContentWrapper,
  BodyContentWide,
} from '@/app/libs/common-components'
import { projects } from '@/app/libs/database'
import ProjectCard from '@/app/components/ProjectCard'
import type { project } from '@/app/libs/types'


const ProjectsWrapper = styled(BodyContentWide)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
`

function Projects() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Projects.</HeaderTitle>
          <HeaderDescription>Checkout of some of the projects I've worked on!</HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <ProjectsWrapper>
          {projects.map((project: project) => (
            <ProjectCard key={project.name} project={project}/>
          ))}
        </ProjectsWrapper>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Projects