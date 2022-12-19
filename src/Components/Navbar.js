/**
 * Navigation component for navigating the website
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, me } from '../assets/information';

const NavWrapper = styled.div`
  outline: 1px solid orange;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: ${colors.secondary};
`;

const LeftNav = styled.div`
  background: tan;
`;

const RightNav = styled.div`
  background: tan;
`;

const NavLink = styled(Link)`
  color: ${colors.tertiary};
`;

function Navbar() {
  return (
    <NavWrapper>
      <LeftNav>
        <NavLink to="/">{me.name}</NavLink>
      </LeftNav>

      <RightNav>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </RightNav>
    </NavWrapper>
  );
}

export default Navbar;