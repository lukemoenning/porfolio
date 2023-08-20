import { GitHub } from '@mui/icons-material'

import CustomImage from '../custom-image/custom-image'

import * as S from './project-card.styles'

import type { project } from '@/database/schema'

const ProjectCard = ({ project }: { project: project }) => {
  const projectPhotoStyles = {
    alignSelf: 'center',
    borderRadius: '10px',
    height: '186px',
    width: '330px',
    margin: '10px',
    objectFit: 'cover'
  }

  /**
   * Switch the display of the activated project
   *
   * @param {String} projectName id of the project to switch
   */
  const switchActivated = (projectName: string) => {
    const activatedProjectDiv = document.getElementById(projectName)

    if (!activatedProjectDiv) return

    activatedProjectDiv.style.display === 'flex'
      ? (activatedProjectDiv.style.display = 'none')
      : (activatedProjectDiv.style.display = 'flex')
  }

  return (
    <div>
      <S.ProjectCardWrapper
        onClick={() => {
          switchActivated(project.name)
        }}
      >
        <CustomImage
          src={project.photo}
          alt={project.name}
          width={330}
          height={186}
          styles={projectPhotoStyles}
        />
        <S.ProjectName>{project.name}</S.ProjectName>
        <S.ProjectTechStackWrapper>
          {project.techstack.map((techStackItem) => (
            <S.ProjectTechStackItem key={techStackItem}>
              {techStackItem}
            </S.ProjectTechStackItem>
          ))}
        </S.ProjectTechStackWrapper>
      </S.ProjectCardWrapper>

      <S.ActivatedProjectWrapper id={project.name}>
        <S.CloseActivatedProject
          onClick={() => {
            switchActivated(project.name)
          }}
        >
          &#10005;
        </S.CloseActivatedProject>
        <S.ActivatedProject>
          <S.ActivatedProjectPhoto src={project.photo} />
          <S.ActivatedProjectName>{project.name}</S.ActivatedProjectName>
          <S.ActivatedProjectDescription>
            {project.description}
          </S.ActivatedProjectDescription>

          <S.ActivatedProjectBottomInfo>
            <S.ActivatedProjectTechStackWrapper>
              {project.techstack.map((activatedTechStackItem) => (
                <S.ActivatedProjectTechStackItem key={activatedTechStackItem}>
                  {activatedTechStackItem}
                </S.ActivatedProjectTechStackItem>
              ))}
            </S.ActivatedProjectTechStackWrapper>

            <S.ActivatedProjectsURLS>
              {project.live_demo && (
                <S.ActivatedProjectLiveDemo href={project.live_demo}>
                  <p>Live Demo</p>
                </S.ActivatedProjectLiveDemo>
              )}
              <S.ActivatedProjectGitHub href={project.github}>
                <GitHub fontSize="large" />
              </S.ActivatedProjectGitHub>
            </S.ActivatedProjectsURLS>
          </S.ActivatedProjectBottomInfo>
        </S.ActivatedProject>
      </S.ActivatedProjectWrapper>
    </div>
  )
}

export default ProjectCard
