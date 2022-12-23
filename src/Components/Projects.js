/**
 * Projects component
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
  BodyContentWide,
} from './styles/Body.styles';
import { colors } from '../assets/information';


function Projects() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Projects</HeaderTitle>
          <HeaderDescription>Checkout of some of the projects I've had the ability to work on!</HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>
    </BodyWrapper>
  );
}

export default Projects;