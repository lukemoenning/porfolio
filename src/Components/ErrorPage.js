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
      <h1>Page Not Found</h1>
    </BodyWrapper>
  );
}

export default ErrorPage;