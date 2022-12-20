/**
 * Universal styles for each of the body components
 */

import styled from 'styled-components';
import { colors } from '../../assets/information';
import { heights } from '../../assets/constants';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 750px;
  min-width: 500px;
  margin-top: ${heights.NAVBAR_HEIGHT};
  margin-bottom: ${heights.FOOTER_HEIGHT};
  align-items: center;
  justify-content: center;
  background: ${colors.white};

  @media (max-width: 750px) {
    width: 100%;
  }
`;