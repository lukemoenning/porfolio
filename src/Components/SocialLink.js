/**
 * Component for a social media icon and link
 */

import { SvgIcon } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';


const SocialLinkWrapper = styled.a`
  margin: 3px;
  color: ${colors.tertiary};
`;

function SocialLink({ social, size }) {
  return (
    <SocialLinkWrapper href={social.url}>
      <SvgIcon component={social.icon} fontSize={size} />
    </SocialLinkWrapper>
  );
}

export default SocialLink;