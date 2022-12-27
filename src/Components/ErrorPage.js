/**
 * ErrorPage component
 */

import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';
import { Link } from 'react-router-dom';
import * as superSecretObject from '../scripts/supersecretscripts';


const backgroundImage = require('../assets/images/space.png');

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  position: fixed;
  background-image: url(${backgroundImage});
  bacgkround-repeat: no-repeat;
  background-size: cover;
`;


const ErrorPageCanvas = styled.canvas`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
`;

const ErrorPageMessageWrapper = styled.div`

`;

const ErrorPageMessage = styled.h1`
  font-size: large;
  color: ${colors.accent};
  max-width: 75%;
`;

const HomeLink = styled(Link)`
  font-size: large;
  font-weight: bold;
  color: ${colors.white};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StartGameLink = styled.span`
  font-size: large;
  font-weight: bold;
  color: ${colors.white};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

function ErrorPage() {
  return (
    <ErrorPageWrapper>
      <ErrorPageMessage>Oops... looks like the page you're looking for got lost in space.</ErrorPageMessage>
      <ErrorPageMessage>
        <StartGameLink onClick={() => {superSecretObject.startGame()}}>Try to find it</StartGameLink> 
          {' or return '} 
        <HomeLink to="/">home.</HomeLink></ErrorPageMessage>
      <ErrorPageCanvas/>
    </ErrorPageWrapper>
  );
}

export default ErrorPage;