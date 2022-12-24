/**
 * Resume component
 */

import React from 'react';
import styled from 'styled-components';
import { 
  BodyWrapper,
  BodyHeaderWrapper,
  HeaderTitle,
  HeaderDescription,
  BodyHeaderNarrow, 
  BodyContentWrapper, 
  BodyContentNarrow
} from './styles/Body.styles';
import { heights } from '../assets/constants';

const Pdf = styled.iframe`
  margin: 25px 0 25px 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 800px;
`;

function Resume() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Resume.</HeaderTitle>
          <HeaderDescription>An official copy of my resume.</HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          <Pdf src={require('../assets/Moenning_Luke_Resume.pdf')} />
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  );
};

export default Resume;