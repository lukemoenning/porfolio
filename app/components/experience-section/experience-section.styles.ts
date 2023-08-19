import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const ExperienceSectionHeader = styled.h2`
  color: ${theme.colors.black};
  font-size: xx-large;
  margin: 40px 0 0 5px;
`

export const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
  background: ${theme.colors.offWhite};
  border-radius: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export const ExperienceInfo = styled.div`
  width: 40%;
  margin: 10px;

  @media (max-width: 750px) {
    align-self: center;
    width: 90%;
  }
`

export const ExperienceTitle = styled.p`
  color: ${theme.colors.black};
  font-size: xx-large;
`

export const ExperienceLocation = styled.p`
  color: ${theme.colors.black};
  font-size: x-large;
`

export const ExperienceDate = styled.p`
  color: ${theme.colors.black};
  font-size: large;
  font-style: italic;
`

export const ExperienceDescriptionWrapper = styled.div`
  width: 40%;
  margin: 10px;

  @media (max-width: 750px) {
    align-self: center;
    width: 90%;
  }
`

export const ExperienceDescription = styled.p`
  display: flex;
  color: ${theme.colors.black};
  font-size: large;
  margin: 8px;
`
