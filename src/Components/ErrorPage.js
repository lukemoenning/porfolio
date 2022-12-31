/**
 * ErrorPage component
 */

import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';
import { Link } from 'react-router-dom';
import * as superSecretObject from '../scripts/supersecretscripts';


const backgroundImage = require('../assets/images/game/space.png');

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  
`;

const ErrorPageCanvas = styled.canvas`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  bacgkround-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  position: fixed;
`;

const ErrorPageMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  min-width: 700px;
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

const GAME = new superSecretObject.Game();

function ErrorPage() {
  return (
    <ErrorPageWrapper>

      {/* ERROR MESSAGE */}
      <ErrorPageMessageWrapper>
        <ErrorPageMessage>Oops... looks like the page you're looking for got lost in space.</ErrorPageMessage>
        <ErrorPageMessage>
          <StartGameLink onClick={() => {
            if (!GAME.isRunning) {
              GAME.startGame(); 
            }
          }}>Try to find it</StartGameLink> 
          {' or return '} 
          <HomeLink to="/">home.</HomeLink>
        </ErrorPageMessage>
      </ErrorPageMessageWrapper>

      {/* CANVAS */}
      <ErrorPageCanvas id='canvas' />

    </ErrorPageWrapper>
  );
}

export default ErrorPage;