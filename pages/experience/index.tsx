import styled from 'styled-components'

import {
  BodyContentWide,
  BodyContentWrapper,
  BodyHeaderNarrow,
  BodyHeaderWrapper,
  BodyWrapper,
  HeaderDescription,
  HeaderTitle
} from '@/app/libs/common-components'
import { education, work } from '@/app/libs/database'
import { theme } from '@/app/libs/theme'

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

const ExperienceSectionHeader = styled.h2`
  color: ${theme.colors.black};
  font-size: xx-large;
  margin: 40px 0 0 5px;
`

const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
  background: ${theme.colors.offWhite};
  border-radius: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const ExperienceInfo = styled.div`
  width: 40%;
  margin: 10px;

  @media (max-width: 750px) {
    align-self: center;
    width: 90%;
  }
`

const ExperienceTitle = styled.p`
  color: ${theme.colors.black};
  font-size: xx-large;
`

const ExperienceLocation = styled.p`
  color: ${theme.colors.black};
  font-size: x-large;
`

const ExperienceDate = styled.p`
  color: ${theme.colors.black};
  font-size: large;
  font-style: italic;
`

const ExperienceDescriptionWrapper = styled.div`
  width: 40%;
  margin: 10px;

  @media (max-width: 750px) {
    align-self: center;
    width: 90%;
  }
`

const ExperienceDescription = styled.p`
  display: flex;
  color: ${theme.colors.black};
  font-size: large;
  margin: 8px;
`

function Experience() {
  return (
    <BodyWrapper>
      <BodyHeaderWrapper>
        <BodyHeaderNarrow>
          <HeaderTitle>Experience.</HeaderTitle>
          <HeaderDescription>
            A little more on how I got to where I am today.
          </HeaderDescription>
        </BodyHeaderNarrow>
      </BodyHeaderWrapper>

      <BodyContentWrapper>
        <BodyContentWide>
          <ExperienceWrapper>
            {/* WORK SECTION */}
            {getExperienceSection(work, "Where I've worked.")}

            {/* EDUCATION SECTION */}
            {getExperienceSection(education, 'My education.')}
          </ExperienceWrapper>
        </BodyContentWide>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

/**
 * Get the content to be displayed for work and education
 * @param {JSON} category
 * @param {String} sectionHeader
 * @returns
 */
function getExperienceSection(category: any, sectionHeader: string) {
  return (
    <div>
      <ExperienceSectionHeader>{sectionHeader}</ExperienceSectionHeader>
      {category.map((experience: any) => (
        <ExperienceItemWrapper key={experience.title}>
          {/* INFORMATION ABOUT THE EXPERIENCE */}
          <ExperienceInfo>
            <ExperienceTitle>{experience.title}</ExperienceTitle>
            <ExperienceLocation>{experience.location}</ExperienceLocation>
            <ExperienceDate>{experience.date}</ExperienceDate>
          </ExperienceInfo>

          {/* DESCRIPTION OF THE EXPERIENCE */}
          <ExperienceDescriptionWrapper>
            {experience.bulletPoints.map(
              (bulletPoints: string, index: number) => (
                <ExperienceDescription key={experience.title + index}>
                  &#x2022; {bulletPoints}
                </ExperienceDescription>
              )
            )}
          </ExperienceDescriptionWrapper>
        </ExperienceItemWrapper>
      ))}
    </div>
  )
}

export default Experience
