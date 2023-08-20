import * as S from './about.styles'

import CustomImage from '@/app/components/custom-image/custom-image'
import SocialLink from '@/app/components/social-link/social-link'
import {
  BodyContentNarrow,
  BodyContentWrapper,
  BodyHeaderWide,
  BodyHeaderWrapper,
  BodyWrapper
} from '@/app/libs/common-styles'
import { me, socials } from '@/app/libs/database'
import type { social } from '@/database/schema'

const About = () => {
  const ProfileImageStyles = {
    margin: '20px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
  }

  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderWide>
          <CustomImage
            src={me.photo}
            alt="Luke Moenning"
            width={250}
            height={300}
            styles={ProfileImageStyles}
          />
          <S.ProfileName>{me.name}</S.ProfileName>
          <S.ProfileTitle>{me.title}</S.ProfileTitle>
        </BodyHeaderWide>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <S.AboutContent>
            <S.AboutMeWrapper>
              <S.AboutContentTitle>About me.</S.AboutContentTitle>
              <S.AboutMe>
                {me.about}
                <S.ProjectLink href="/projects">
                  {' '}
                  Check out my other projects.
                </S.ProjectLink>
              </S.AboutMe>
            </S.AboutMeWrapper>
            <S.AboutSocialsWrapper>
              <S.AboutContentTitle>My socials.</S.AboutContentTitle>
              <S.AboutSocials>
                {socials.map((social: social) => (
                  <SocialLink
                    key={social.name}
                    social={social}
                    size="large"
                    displayName={true}
                  />
                ))}
              </S.AboutSocials>
            </S.AboutSocialsWrapper>
          </S.AboutContent>
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default About
