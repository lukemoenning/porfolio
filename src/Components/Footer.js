/**
 * Footer component containing copyright and links to socials
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  background: yellow;
`;

function Footer() {
  return (
    <Wrapper>
      <p>footer</p>
    </Wrapper>
  );
}

export default Footer;