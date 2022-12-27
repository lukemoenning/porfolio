/**
 * Universal styles for each of the body components
 */

import styled from 'styled-components';
import { colors } from '../../assets/information';
import { heights } from '../../assets/constants';


/**
 * Wrapper for the entire body section, to be used for every page as an overall wrapper for the body
 */
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.white};
`;

/**
 * Wrapper for the body header background, to be used for every page as as an overall wrapper for the body header
 */
export const BodyHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100vw;
  padding-top: ${heights.NAVBAR_HEIGHT};
  box-shadow: 0px 3px 0px 0px ${colors.offwhite};
  background: ${colors.offwhite};
`;

/**
 * Wrapper for a wide body header, one of the choices for how to display content in the body header
 */
export const BodyHeaderWide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Wrapper for a narrow body header, one of the choices for how to display content in the body header
 */
export const BodyHeaderNarrow = styled(BodyHeaderWide)`
  align-items: flex-start;
  width: 750px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

/**
 * Title for the body header
 */
export const HeaderTitle = styled.h1`
  color: ${colors.accent};
  font-size: xxx-large;
  margin: 10px;
`;

/**
 * Description for the body header
 */
export const HeaderDescription = styled.p`
  colors: ${colors.black};
  font-size: x-large;
  margin: 10px;
`;

/**
 * Wrapper for the body content background, to be used for every page as as an overall wrapper for the body content
 */
export const BodyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100vw;
  margin-bottom: ${heights.FOOTER_HEIGHT};
  background: ${colors.white};
`;

/**
 * Wrapper for a wide body content, one of the choices for how to display content in the body content
 */
export const BodyContentWide = styled.div`
  display: flex;
  width: 1200px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const BodyContentNarrow = styled(BodyContentWide)`
  width: 750px;
  
  @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  }
`;