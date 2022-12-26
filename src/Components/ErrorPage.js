/**
 * ErrorPage component
 */

import React from 'react';
import styled from 'styled-components';
import { BodyWrapper, BodyHeaderWrapper, BodyHeaderWide } from './styles/Body.styles';
import { colors } from '../assets/information';

const ErrorPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background: ${colors.accent};
  top: 0;
  left: 0;
`;

function ErrorPage() {
  return (
    <ErrorPageWrapper>
      <h1>404 error</h1>
      <h2>Page not Found</h2>
    </ErrorPageWrapper>
  );
}

export default ErrorPage;