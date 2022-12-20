/**
 * Resume component
 */

import React from 'react';
import styled from 'styled-components';
import { BodyWrapper } from './styles/Body.styles';

const Pdf = styled.iframe`
  margin: 25px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 600px;
`;

function Resume() {
  return (
    <BodyWrapper>
      <Pdf src={require('../assets/Moenning_Luke_Resume.pdf')} />
    </BodyWrapper>
  );
}

export default Resume;