/**
 * Navigation component for navigating the website
 */

import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: ${colors.secondary};
`;

const NavItem = styled.h2`
  color: ${colors.tertiary};
`;

function Navbar() {
  return (
    <Wrapper>
      <NavItem>nav</NavItem>
    </Wrapper>
  );
}

export default Navbar;