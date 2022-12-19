/**
 * Navigation component for navigating the website
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background: yellow;
`;

const NavItem = styled.h2`
  color: palevioletred;
`;

function Navbar() {
  return (
    <Wrapper>
      <NavItem>nav</NavItem>
    </Wrapper>
  );
}

export default Navbar;