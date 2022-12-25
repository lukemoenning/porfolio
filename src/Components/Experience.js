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
  BodyContentWide, 
} from './styles/Body.styles';
import { colors, work, education } from '../assets/information';

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const ExperienceSectionHeader = styled.h2`
  color: ${colors.accent};
  font-size: xx-large;
  margin: 40px 0 0 5px;
`;

const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
  background: ${colors.offwhite};
  border-radius: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const ExperienceInfo = styled.div`
  width: 40%;
  margin: 10px;

  @media (max-width: 750px) {
    align-self: center;
    width: 90%;
  }
`;

const ExperienceTitle = styled.p`
  color: ${colors.accent};
  font-size: xx-large;
`;

const ExperienceLocation = styled.p`
  color: ${colors.black};
  font-size: x-large;
`;

const ExperienceDate = styled.p`
  color: ${colors.black};
  font-size: large;
  font-style: italic;
`;

const ExperienceDescriptionWrapper = styled.div`
  width: 40%;
  margin: 10px;

  @media (max-width: 750px) {
    align-self: center;
    width: 90%;
  }
`;

const ExperienceDescription = styled.p`
  display: flex;
  color: ${colors.black};
  font-size: large;
  margin: 8px;
`;

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
        <BodyContentWide>
          <ExperienceWrapper>

            {/* WORK SECTION */}
            {getExperienceSection(work, "Where I've worked.")}

            {/* EDUCATION SECTION */}
            {getExperienceSection(education, "My education.")}

          </ExperienceWrapper>
        </BodyContentWide>
      </BodyContentWrapper>
    </BodyWrapper>
  );
};

/**
 * Get the content to be displayed for work and education
 * @param {JSON} category
 * @param {String} sectionHeader 
 * @returns 
 */
function getExperienceSection(category, sectionHeader) {
  return (
    <div>
      <ExperienceSectionHeader>{sectionHeader}</ExperienceSectionHeader>
      {category.map(experience => (
        <ExperienceItemWrapper>

          {/* INFORMATION ABOUT THE EXPERIENCE */}
          <ExperienceInfo>
            <ExperienceTitle>{experience.title}</ExperienceTitle>
            <ExperienceLocation>{experience.location}</ExperienceLocation>
            <ExperienceDate>{experience.date}</ExperienceDate>
          </ExperienceInfo>

          {/* DESCRIPTION OF THE EXPERIENCE */}
          <ExperienceDescriptionWrapper>
            {experience.descriptions.map(description => (
              <ExperienceDescription>
                &#x2022; {description}
              </ExperienceDescription>
            ))}
          </ExperienceDescriptionWrapper>

        </ExperienceItemWrapper>
      ))}
    </div>
  );
}

export default Experience;