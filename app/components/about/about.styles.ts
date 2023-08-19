import Link from 'next/link'
import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const ProfileName = styled.h2`
  color: ${theme.colors.black};
  font-size: xxx-large;
`

export const ProfileTitle = styled.p`
  color: ${theme.colors.black};
  font-size: x-large;
  font-style: italic;
  margin-bottom: 20px;
`

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AboutContentTitle = styled.h3`
  color: ${theme.colors.black};
  font-size: x-large;
  margin: 20px 0 20px 0;
`

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px;

  @media (max-width: 750px) {
    width: 75%;
    min-width: 250px;
    align-items: center;
  }
`

export const AboutMe = styled.p`
  margin-left: 10px;
  font-size: medium;
`

export const ProjectLink = styled(Link)`
  font-size: medium;
  color: ${theme.colors.lightBlue};
  text-decoration: none;
  font-weight: bold;
`

export const AboutSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px;

  @media (max-width: 750px) {
    width: 75%;
    min-width: 250px;
    align-items: center;
  }
`

export const AboutSocials = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  height: auto;
`
