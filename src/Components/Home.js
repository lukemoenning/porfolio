/**
 * Home component
 */

import React from 'react';
import styled from 'styled-components';
import { 
  BodyWrapper, 
  BodyHeaderWrapper,
  BodyHeaderWide, 
  BodyContentWrapper, 
  BodyContentNarrow 
} from './styles/Body.styles';
import { colors, me, socials } from '../assets/information';
import { Link } from 'react-router-dom';
import SocialLink from './SocialLink';


const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 20px;
  border-radius: 50%;
`;

const ProfileName = styled.h2`
  color: ${colors.accent};
  font-size: xxx-large;
`;

const ProfileTitle = styled.p`
  color: ${colors.black};
  font-size: x-large;
  font-style: italic;
  margin-bottom: 20px;
`;

const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HomeContentTitle = styled.h3`
  color: ${colors.accent};
  font-size: x-large;
  margin: 20px 0 20px 0;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 20px;

  @media (max-width: 750px) {
    width: 75%;
    min-width: 250px;
    align-items: center;
  }
`;

const About = styled.p`
  margin-left: 10px;
  font-size: medium;
`;

const ProjectLink = styled(Link)`
  font-size: medium;
  color: ${colors.accent};
  text-decoration: none;
  font-weight: bold;
`;

const HomeSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px;

  @media (max-width: 750px) {
    width: 75%;
    min-width: 250px;
    align-items: center;
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
          <ProfileImage src={me.photo} />
          <ProfileName>
            {me.name}
          </ProfileName>
          <ProfileTitle>
            {me.title}
          </ProfileTitle>
        </BodyHeaderWide>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <HomeContent>

          <AboutWrapper>
            <HomeContentTitle>About me.</HomeContentTitle>
            <About>{me.about}<ProjectLink to="/projects"> Check out my other projects.</ProjectLink></About>
          </AboutWrapper>
          <HomeSocialsWrapper>
            <HomeContentTitle>My socials.</HomeContentTitle>
            <HomeSocials>
              {socials.map(item => (
                <SocialLink key={item.name} social={item} size="large" displayName={true} />
              ))}
            </HomeSocials>
          </HomeSocialsWrapper>

          </HomeContent>
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  );
};

export default Home;