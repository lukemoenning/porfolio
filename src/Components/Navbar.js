/**
 * Navigation component for navigating the website
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, me } from '../assets/information';
import { heights } from '../assets/constants';


const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: auto;
`;

const MobileNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${heights.NAVBAR_HEIGHT};
  background: ${colors.secondary};
  height: auto;
  width: 100vw;

  @media (min-width: 700px) {
    display: none;
  }
`;

const DesktopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: ${heights.NAVBAR_HEIGHT};
  position: fixed;
  top: 0;
  background: ${colors.secondary};
`;

const LeftDesktopNav = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
`;

const RightDesktopNav = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  height: inherit;
  padding: 0 20px 0 20px;
  color: ${colors.tertiary};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    background: ${colors.tertiary};
    color: ${colors.secondary};
  }
`;

/**
 * Same functionality as the NavLogo but has a media query for smaller screens
 */
const DesktopNavLink = styled(NavLogo)`
  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  color: ${colors.tertiary};
  margin: 10px;

  @media (min-width: 700px) {
    display: none;
  }
`;

const HamburgerIcon = styled.button`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  color: ${colors.tertiary};
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

function Navbar() {

  /**
   * State for handling whether the mobile navbar is open or closed
   */
  const [mobileNavbarOpen, setMobileNavbar] = useState(false);

  return (
    <NavWrapper>
      <DesktopNavWrapper>
        <LeftDesktopNav>
          <NavLogo to="/">{me.name}</NavLogo>
        </LeftDesktopNav>

        <RightDesktopNav>
          <HamburgerIcon onClick={() => setMobileNavbar((currentState) => !currentState)}>
            {/* Set icon to an X if the mobileNavbar is open or a hamburger icon if it is closed */}
            {mobileNavbarOpen ? <>&#10005;</> : <>&#8801;</>}
          </HamburgerIcon>
          <DesktopNavLink to="/experience">Experience</DesktopNavLink>
          <DesktopNavLink to="/projects">Projects</DesktopNavLink>
          <DesktopNavLink to="/resume">Resume</DesktopNavLink>
          <DesktopNavLink to="/contact">Contact Me</DesktopNavLink>
        </RightDesktopNav>
      </DesktopNavWrapper>

      {mobileNavbarOpen && (
        <MobileNavWrapper>
          <MobileNavLink to="/experience">Experience</MobileNavLink>
          <MobileNavLink to="/projects">Projects</MobileNavLink>
          <MobileNavLink to="/resume">Resume</MobileNavLink>
          <MobileNavLink to="/contact">Contact Me</MobileNavLink>
        </MobileNavWrapper>
      )}
    </NavWrapper>
  );
}

export default Navbar;