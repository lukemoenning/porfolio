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
  BodyContentNarrow, 
} from './styles/Body.styles';

function Experience() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Experience.</HeaderTitle>
          <HeaderDescription>A little more on how I got to where I am today.</HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentNarrow>
          
        </BodyContentNarrow>
      </BodyContentWrapper>
    </BodyWrapper>
  );
};

export default Experience;