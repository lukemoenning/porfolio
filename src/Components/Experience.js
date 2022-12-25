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
  text-decoration: underline;
  margin-top: 40px;
`;

const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;

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

const ExperienceTitle = styled.h2`
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

const ExperienceDescription = styled.p`
  width: 40%;
  margin: 10px;
  color: ${colors.black};
  font-size: large;

  @media (max-width: 750px) {
    align-self: center;
    width: 90%;
  }
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
            <ExperienceSectionHeader>Where I've worked.</ExperienceSectionHeader>
            {work.map(experience => (
              <ExperienceItemWrapper>

                {/* INFORMATION ABOUT THE EXPERIENCE */}
                <ExperienceInfo>
                  <ExperienceTitle>{experience.title}</ExperienceTitle>
                  <ExperienceLocation>{experience.location}</ExperienceLocation>
                  <ExperienceDate>{experience.date}</ExperienceDate>
                </ExperienceInfo>

                {/* DESCRIPTION OF THE EXPERIENCE */}
                <ExperienceDescription>
                  {experience.description}
                </ExperienceDescription>

              </ExperienceItemWrapper>
            ))}

            {/* EDUCATION SECTION */}
            <ExperienceSectionHeader>My education.</ExperienceSectionHeader>
            {education.map(experience => (
              <ExperienceItemWrapper>

                {/* INFORMATION ABOUT THE EXPERIENCE */}
                <ExperienceInfo>
                  <ExperienceTitle>{experience.title}</ExperienceTitle>
                  <ExperienceLocation>{experience.location}</ExperienceLocation>
                  <ExperienceDate>{experience.date}</ExperienceDate>
                </ExperienceInfo>

                {/* DESCRIPTION OF THE EXPERIENCE */}
                <ExperienceDescription>
                  {experience.description}
                </ExperienceDescription>

              </ExperienceItemWrapper>
            ))}

          </ExperienceWrapper>
        </BodyContentWide>
      </BodyContentWrapper>
    </BodyWrapper>
  );
};

export default Experience;