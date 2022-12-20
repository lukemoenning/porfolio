/**
 * Component for a social media icon and link
 */

import { SvgIcon } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';


const SocialLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 3px;
  color: ${colors.accent};
  text-decoration: none;
  transition: 300ms;
  max-height: 30px;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const SocialName = styled.h4`
  margin-left: 5px;
  color: ${colors.black};
`;

function SocialLink({ social, size, displayName }) {
  return (
    <SocialLinkWrapper href={social.url}>
      <SvgIcon component={social.icon} fontSize={size} />
      {
        displayName && (
          <SocialName>{social.name}</SocialName>
        )
      }
    </SocialLinkWrapper>
  );
}

export default SocialLink;