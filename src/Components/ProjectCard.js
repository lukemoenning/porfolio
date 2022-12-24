/**
 * Project Card component to display information about each individual project
 */

import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 350px;
  margin: 20px;
  background: ${colors.offwhite};
  border-radius: 10px;
  transition: 300ms;

  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0 20px 20px 0 ${colors.accent};
    cursor: pointer;
  }
`;

const ProjectPhoto = styled.img`
  align-self: center;
  border-radius: 10px;
  height: 186px;
  width: 330px;
  margin: 10px;
  object-fit: cover;
`;

const ProjectName = styled.h4`
  color: ${colors.accent};
  font-size: large;
  margin: 10px;
`;

const ProjectTechStackWrapper = styled.div`
  display: flex;
`;

const ProjectTechStackItem = styled.p`
  margin: 0 0 10px 10px;
  font-size: small;
  font-style: italic;
`;


// FULL SCREEN FOR ACTIVATED PROJECTCARD
const ActivatedProjectWrapper = styled.div`
  width: 100vw;
  height: 100vw;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


function ProjectCard({ project }) {
  return (
    <div>
      <ProjectCardWrapper>
        <ProjectPhoto src={project.photo} />
        <ProjectName>{project.name}</ProjectName>
        <ProjectTechStackWrapper>
          {project.techstack.map(techStackItem => (
            <ProjectTechStackItem key={techStackItem}>{techStackItem}</ProjectTechStackItem>
          ))}
        </ProjectTechStackWrapper>
      </ProjectCardWrapper>
    </div>
  );
};

export default ProjectCard;