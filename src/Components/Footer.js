/**
 * Footer component containing copyright and links to socials
 */

import React from 'react';
import styled from 'styled-components';
import SocialLink from './SocialLink';
import { colors, socials } from '../assets/information';


const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 10px;
  height: 100%;
  overflow: hidden;
  color: ${colors.tertiary};
  font-size: 0.8em;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Copyright © 2022, Luke Moenning</p>
      </FooterContent>

      <FooterContent>
        {socials.map(item => (
          <SocialLink key={item.name} social={item} size="small" />
        ))}
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;