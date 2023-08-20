import * as S from './experience.styles'

import ExperienceSection from '@/app/components/experience-section/experience-section'
import {
  BodyContentWide,
  BodyContentWrapper,
  BodyHeaderNarrow,
  BodyHeaderWrapper,
  BodyWrapper,
  HeaderDescription,
  HeaderTitle
} from '@/app/libs/common-styles'
import type { allExperience } from '@/database/schema'

const Experience = ({ work, education }: allExperience) => {
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
          <S.ExperienceWrapper>
            {/* WORK SECTION */}
            <ExperienceSection
              category={work}
              sectionHeader="Where I've worked."
            />

            {/* EDUCATION SECTION */}
            <ExperienceSection
              category={education}
              sectionHeader="My education."
            />
          </S.ExperienceWrapper>
        </BodyContentWide>
      </BodyContentWrapper>
    </BodyWrapper>
  )
}

export default Experience
