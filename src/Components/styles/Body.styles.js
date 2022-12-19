/**
 * Universal styles for each of the body components
 */

import styled from 'styled-components';
import { colors } from '../../assets/information';

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
`;