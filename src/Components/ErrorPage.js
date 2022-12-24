/**
 * ErrorPage component
 */

import React from 'react';
import styled from 'styled-components';
import { BodyWrapper, BodyHeaderWrapper, BodyHeaderWide } from './styles/Body.styles';
import { colors } from '../assets/information';

function ErrorPage() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderWide>
          <h1>404 error</h1>
          <h2>Page not Found</h2>
        </BodyHeaderWide>
      </BodyHeaderWrapper>
    </BodyWrapper>
  );
}

export default ErrorPage;