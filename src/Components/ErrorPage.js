/**
 * ErrorPage component
 */

import React from 'react';
import styled from 'styled-components';
import { colors } from '../assets/information';
import { Link } from 'react-router-dom';


const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background: ${colors.black};
  top: 0;
  left: 0;
  overflow: hidden;
`;

const ErrorPageMessage = styled.h1`
  font-size: large;
  color: ${colors.accent};
`;

const HomeLink = styled(Link)`
  font-size: large;
  font-weight: bold;
  color: ${colors.white};
  text-decoration: none;
  transition: 300ms;

  &:hover {
    text-decoration: underline;
  }
`;

function ErrorPage() {
  return (
    <ErrorPageWrapper>
      <ErrorPageMessage>Oops... looks like the page you're looking for got lost in space.</ErrorPageMessage>
      <ErrorPageMessage>Try to find it or return <HomeLink to="/">home.</HomeLink></ErrorPageMessage>
    </ErrorPageWrapper>
  );
}

export default ErrorPage;