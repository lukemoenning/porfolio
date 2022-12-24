/**
 * Project Card component to display information about each individual project
 */

import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';

const ProjectCardWrapper = styled.div`
display: flex;
flex-direction: column;
height: 250px;
width: 350px;
margin: 20px;
background: tan;
border-radius: 10px;
`;

const ProjectPhoto = styled.img`
  align-self: center;
  border-radius: 10px;
  height: 200px;
  width: 330px;
  margin: 10px;
  object-fit: cover;
`;

const ProjectName = styled.h4`

`;

const ProjectTechStackWrapper = styled.div`

`;

const ProjectTechStackItem = styled.p`

`;



function ProjectCard({ project }) {
  return (
    <ProjectCardWrapper>
      <ProjectPhoto src={project.photo} />
      <ProjectName>{project.name}</ProjectName>
      <ProjectTechStackWrapper>
        {project.techstack.map(techStackItem => (
          <ProjectTechStackItem key={techStackItem}>{techStackItem}</ProjectTechStackItem>
        ))}
      </ProjectTechStackWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;