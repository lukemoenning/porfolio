/**
 * Home component
 */

import React from 'react';
import styled from 'styled-components';
import { BodyWrapper } from './styles/Body.styles';
import { colors, me } from '../assets/information';


console.log(me.profile_picture)

const HomeBioWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: tan;
`;

const ProfileImage = styled.img`
  ${'' /* background-image: ${me.profile_picture}; */}
  ${'' /* border-radius: 50%; */}
  height: 150px;
  width: 150px;
  ${'' /* background: red; */}
`;

const HomeContentWrapper = styled.div`
  
`;

function Home() {
  return (
    <BodyWrapper>
      <HomeBioWrapper>
        <ProfileImage src={require('../assets/images/profile_picture.png')} />
      </HomeBioWrapper>

      <HomeContentWrapper>

      </HomeContentWrapper>
    </BodyWrapper>
  );
}

export default Home;