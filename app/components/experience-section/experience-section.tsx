import CustomImage from '../custom-image/custom-image'

import * as S from './experience-section.styles'

import type { experience } from '@/database/schema'

type ExperienceSectionProps = {
  category: experience[]
  sectionHeader: string
}

const experienceLogoStyles = {
  alignSelf: 'center',
  borderRadius: '10px',
  margin: '10px',
  objectFit: 'cover'
}

const ExperienceSection = ({
  category,
  sectionHeader
}: ExperienceSectionProps) => {
  return (
    <div>
      <S.ExperienceSectionHeader>{sectionHeader}</S.ExperienceSectionHeader>
      {category.map((experience: experience) => (
        <S.ExperienceItemWrapper
          key={experience.title + '-' + experience.location}
        >
          {/* IMAGE OF THE EXPERIENCE */}
          <S.ExperienceImageWrapper>
            <CustomImage
              src={experience.logo}
              alt={experience.title}
              width={100}
              height={100}
              styles={experienceLogoStyles}
            />
          </S.ExperienceImageWrapper>

          {/* INFORMATION ABOUT THE EXPERIENCE */}
          <S.ExperienceInfo>
            <S.ExperienceTitle>{experience.location}</S.ExperienceTitle>
            <S.ExperienceLocation>{experience.title}</S.ExperienceLocation>
            <S.ExperienceDate>{experience.date}</S.ExperienceDate>
          </S.ExperienceInfo>

          {/* DESCRIPTION OF THE EXPERIENCE */}
          <S.ExperienceDescriptionWrapper>
            {experience.display === 'bulletPoints' && experience.bulletPoints
              ? experience.bulletPoints.map(
                  (bulletPoints: string, index: number) => (
                    <S.ExperienceDescription key={experience.title + index}>
                      &#x2022; {bulletPoints}
                    </S.ExperienceDescription>
                  )
                )
              : null}
          </S.ExperienceDescriptionWrapper>
        </S.ExperienceItemWrapper>
      ))}
    </div>
  )
}

export default ExperienceSection
