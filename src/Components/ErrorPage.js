/**
 * ErrorPage component
 */

import React from 'react';
import styled from 'styled-components';
import { BodyWrapper } from './styles/Body.styles';
import { colors } from '../assets/information';

function ErrorPage() {
  return (
    <BodyWrapper>
      <h1>404 error</h1>
      <h2>Page not Found</h2>
    </BodyWrapper>
  );
}

export default ErrorPage;