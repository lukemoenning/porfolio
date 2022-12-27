/**
 * Projects component
 */

import React from 'react';
import styled from 'styled-components';
import { 
  BodyWrapper,
  BodyHeaderWrapper,
  BodyHeaderNarrow,
  HeaderTitle,
  HeaderDescription,
  BodyContentWrapper,
  BodyContentWide,
} from './styles/Body.styles';
import { projects } from '../assets/information';
import ProjectCard from './ProjectCard';


const ProjectsWrapper = styled(BodyContentWide)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px;
`;

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
          {projects.map(item => (
            <ProjectCard key={item.name} project={item} />
          ))}
        </ProjectsWrapper>
      </BodyContentWrapper>
    </BodyWrapper>
  );
};

export default Projects;