/**
 * Project Card component to display information about each individual project
 */

import React from 'react'
import styled from 'styled-components'
import { theme } from '@/app/libs/theme'
import { GitHub } from '@mui/icons-material'
import { project } from '@/app/libs/types'
import Image from 'next/image'


const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 350px;
  margin: 20px;
  background: ${theme.colors.offWhite};
  border-radius: 10px;
  transition: 300ms;

  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 15px 15px 25px ${theme.colors.lightBlue};
    cursor: pointer;
  }
`

const ProjectPhoto = styled(Image)`
  align-self: center;
  border-radius: 10px;
  height: 186px;
  width: 330px;
  margin: 10px;
  object-fit: cover;
`

const ProjectName = styled.h4`
  color: ${theme.colors.black};
  font-size: large;
  margin: 10px;
`

const ProjectTechStackWrapper = styled.div`
  display: flex;
`

const ProjectTechStackItem = styled.p`
  margin: 0 0 10px 10px;
  font-size: small;
  font-style: italic;
`


// FULL SCREEN FOR ACTIVATED PROJECTCARD
const ActivatedProjectWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
`

const ActivatedProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 750px;
  height: auto;
  background: ${theme.colors.offWhite};
  border-radius: 10px;
`

const CloseActivatedProject = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  font-size: xx-large;
  font-style: bold;
  color: ${theme.colors.lightBlue};

  &:hover {
    transform: scale(1.25, 1.25);
    cursor: pointer;
  }
`

const ActivatedProjectPhoto = styled.img`
  align-self: center;
  border-radius: 10px;
  height: auto;
  width: 90%;
  margin: 20px auto 20px auto;
  object-fit: cover;
`

const ActivatedProjectName = styled.h4`
  color: ${theme.colors.lightBlue};
  font-size: xx-large;
  margin: 20px;
`

const ActivatedProjectDescription = styled.p`
  font-size: large;
  margin: 0 20px 0 20px;
`

const ActivatedProjectBottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: space-between;
`

const ActivatedProjectTechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 100%;
`

const ActivatedProjectTechStackItem = styled.p`
  margin: 0 0 0 20px;
  font-size: medium;
  font-style: italic;
  color: ${theme.colors.lightBlue};
`

const ActivatedProjectsURLS = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  overflow: hidden;
`

const ActivatedProjectLiveDemo = styled.a`
  font-size: medium;
  color: ${theme.colors.lightBlue};
  padding: 10px;
  text-decoration: none;
  transition: 300ms;

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`

const ActivatedProjectGitHub = styled.a`
  color: ${theme.colors.lightBlue};
  padding: 20px;
  transition: 300ms;

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`

function ProjectCard({ project }: { project: project }) {
  return (
    <div>
      <ProjectCardWrapper onClick={() => {switchActivated(project.name)}}>
        <ProjectPhoto 
          src={project.photo}
          alt={project.name}
          width={330}
          height={186}
        />
        <ProjectName>{project.name}</ProjectName>
        <ProjectTechStackWrapper>
          {project.techstack.map(techStackItem => (
            <ProjectTechStackItem key={techStackItem}>{techStackItem}</ProjectTechStackItem>
          ))}
        </ProjectTechStackWrapper>
      </ProjectCardWrapper>

      <ActivatedProjectWrapper id={project.name}>
        <CloseActivatedProject onClick={() => {switchActivated(project.name)}}>&#10005;</CloseActivatedProject>
        <ActivatedProject>
          <ActivatedProjectPhoto src={project.photo} />
          <ActivatedProjectName>{project.name}</ActivatedProjectName>
          <ActivatedProjectDescription>{project.description}</ActivatedProjectDescription>

          <ActivatedProjectBottomInfo>
            <ActivatedProjectTechStackWrapper>
              {project.techstack.map(activatedTechStackItem => (
                <ActivatedProjectTechStackItem key={activatedTechStackItem}>{activatedTechStackItem}</ActivatedProjectTechStackItem>
              ))}
            </ActivatedProjectTechStackWrapper>

            <ActivatedProjectsURLS>
              {project.live_demo && (
                <ActivatedProjectLiveDemo href={project.live_demo}>
                  <p>Live Demo</p>
                </ActivatedProjectLiveDemo>
              )}
              <ActivatedProjectGitHub href={project.github}>
                <GitHub fontSize='large'/>
              </ActivatedProjectGitHub>
            </ActivatedProjectsURLS>
          </ActivatedProjectBottomInfo>
        </ActivatedProject>
      </ActivatedProjectWrapper>
    </div>
  )
}

/**
 * Switch the display of the activated project
 * 
 * @param {String} projectName id of the project to switch
 */
function switchActivated(projectName: string) {
  const activatedProjectDiv = document.getElementById(projectName)

  if (!activatedProjectDiv) return

  activatedProjectDiv.style.display === 'flex' 
    ? activatedProjectDiv.style.display = 'none'
    : activatedProjectDiv.style.display = 'flex'
}

export default ProjectCard