/**
 * Resume component
 */

import React from 'react';
import styled from 'styled-components';
import { 
  BodyWrapper,
  BodyHeaderWrapper,
  BodyHeaderNarrow,  
} from './styles/Body.styles';
import { heights } from '../assets/constants';

const Pdf = styled.iframe`
  margin: 25px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: calc(100vh - ${heights.FOOTER_HEIGHT} - ${heights.NAVBAR_HEIGHT} - 50px);
`;

function Resume() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <Pdf src={require('../assets/Moenning_Luke_Resume.pdf')} />
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>
    </BodyWrapper>
  );
}

export default Resume;