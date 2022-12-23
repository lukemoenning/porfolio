/**
 * Experience component
 */

import React from 'react';
import styled from 'styled-components';
import { 
  BodyWrapper, 
  BodyHeaderWrapper, 
  BodyHeaderNarrow, 
  HeaderTitle,
  HeaderDescription,
  BodyContentWrapper, 
} from './styles/Body.styles';
import { colors } from '../assets/information';

function Experience() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Experience</HeaderTitle>
          <HeaderDescription>A little more on how I got to where I am today.</HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>

      </BodyContentWrapper>
    </BodyWrapper>
  );
}

export default Experience;