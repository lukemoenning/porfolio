/**
 * Home component
 */

import React from 'react';
import styled from 'styled-components';
import { 
  BodyWrapper, 
  BodyHeaderWrapper,
  BodyHeaderWide, 
  HeaderTitle, 
  HeaderDescription, 
  BodyContentWrapper, 
  BodyContentNarrow 
} from './styles/Body.styles';
import { colors, me, socials } from '../assets/information';
import SocialLink from './SocialLink';


// const HomeBioWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

const ProfileImage = styled.img`
  height: 150px;
  width: 150px;
  margin: 20px;
  border-radius: 50%;
  outline: 2px solid ${colors.accent};
`;

// const HomeContentWrapper = styled.div`
//   display: flex;
//   width: 100%;

//   @media (max-width: 750px) {
//     flex-direction: column;
//   }
// `;

const HomeContentTitle = styled.h3`
  color: ${colors.accent};
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 67%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const About = styled.p`
  margin-left: 10px;
`;

const HomeSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const HomeSocials = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  height: auto;
`;

function Home() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderWide>
          <ProfileImage src={require('../assets/images/profile_picture.png')} />
          <HeaderTitle>
            {me.name}
          </HeaderTitle>
          <HeaderDescription>
            {me.title}
          </HeaderDescription>
        </BodyHeaderWide>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <AboutWrapper>
            <HomeContentTitle>About Me</HomeContentTitle>
            <About>{me.about}</About>
          </AboutWrapper>
          <HomeSocialsWrapper>
            <HomeContentTitle>My Socials</HomeContentTitle>
            <HomeSocials>
              {socials.map(item => (
                <SocialLink key={item.name} social={item} size="medium" displayName={true} />
              ))}
            </HomeSocials>
          </HomeSocialsWrapper>
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  );
};

export default Home;