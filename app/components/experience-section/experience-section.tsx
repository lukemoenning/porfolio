import * as S from './experience-section.styles'

type ExperienceSectionProps = {
  category: any
  sectionHeader: string
}

const ExperienceSection = ({
  category,
  sectionHeader
}: ExperienceSectionProps) => {
  return (
    <div>
      <S.ExperienceSectionHeader>{sectionHeader}</S.ExperienceSectionHeader>
      {category.map((experience: any) => (
        <S.ExperienceItemWrapper key={experience.title}>
          {/* INFORMATION ABOUT THE EXPERIENCE */}
          <S.ExperienceInfo>
            <S.ExperienceTitle>{experience.title}</S.ExperienceTitle>
            <S.ExperienceLocation>{experience.location}</S.ExperienceLocation>
            <S.ExperienceDate>{experience.date}</S.ExperienceDate>
          </S.ExperienceInfo>

          {/* DESCRIPTION OF THE EXPERIENCE */}
          <S.ExperienceDescriptionWrapper>
            {experience.bulletPoints.map(
              (bulletPoints: string, index: number) => (
                <S.ExperienceDescription key={experience.title + index}>
                  &#x2022; {bulletPoints}
                </S.ExperienceDescription>
              )
            )}
          </S.ExperienceDescriptionWrapper>
        </S.ExperienceItemWrapper>
      ))}
    </div>
  )
}

export default ExperienceSection
