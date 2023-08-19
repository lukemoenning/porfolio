import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const ProjectCardWrapper = styled.div`
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

export const ProjectName = styled.h4`
  color: ${theme.colors.black};
  font-size: large;
  margin: 10px;
`

export const ProjectTechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ProjectTechStackItem = styled.p`
  margin: 0 0 10px 10px;
  font-size: small;
  font-style: italic;
`

// FULL SCREEN FOR ACTIVATED PROJECTCARD
export const ActivatedProjectWrapper = styled.div`
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

export const ActivatedProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 750px;
  height: auto;
  background: ${theme.colors.offWhite};
  border-radius: 10px;
`

export const CloseActivatedProject = styled.div`
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

export const ActivatedProjectPhoto = styled.img`
  align-self: center;
  border-radius: 10px;
  height: auto;
  width: 90%;
  margin: 20px auto 20px auto;
  object-fit: cover;
`

export const ActivatedProjectName = styled.h4`
  color: ${theme.colors.lightBlue};
  font-size: xx-large;
  margin: 20px;
`

export const ActivatedProjectDescription = styled.p`
  font-size: large;
  margin: 0 20px 0 20px;
`

export const ActivatedProjectBottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: space-between;
`

export const ActivatedProjectTechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: auto;
  height: 100%;

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 250px;
  }
`

export const ActivatedProjectTechStackItem = styled.p`
  margin: 0 0 0 20px;
  font-size: medium;
  font-style: italic;
  color: ${theme.colors.lightBlue};
`

export const ActivatedProjectsURLS = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  overflow: hidden;
`

export const ActivatedProjectLiveDemo = styled.a`
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

export const ActivatedProjectGitHub = styled.a`
  color: ${theme.colors.lightBlue};
  padding-right: 20px;
  transition: 300ms;

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`
