import { experience } from '../schema'

const education: experience[] = [
  {
    title: 'Bachelors of Science',
    location: 'The University of Iowa',
    date: 'August 2021 - May 2025',
    bulletPoints: [
      'Computer Science BS - Mathematics BS - Psychology Minor - Artificial Intelligence, Modeling, and Simulation Certificate - Honors Program',
      'University of Iowa Flagship Scholar - Jason and Leslie Weber Emerging Technologies Scholarship - Edward B. Buchanan, Jr. and Mary Louise Buchanan Scholarship - Undergraduate Electrical Engineering Scholarship',
      "Awarded Dean's List for Fall 2021, Spring 2022, Fall 2022, Spring 2023",
      'Member of UIowa Association for Computing Machinery (ACM), Intramural Soccer'
    ],
    display: 'bulletPoints'
  },
  {
    title: 'Coaching Authorization',
    location: 'Kirkwood Continuing Education',
    date: 'December 2022 - January 2023',
    bulletPoints: [
      'Obtained my coaching license through the completion of a comprehensive 55-hour coaching authorization course'
    ],
    display: 'bulletPoints'
  },
  {
    title: 'High School Diploma',
    location: 'West Senior High School',
    date: 'August 2017 - May 2021',
    bulletPoints: [
      'Graduated with a GPA of 4.32 - University of Iowa Dual Enrollment Student',
      'Member of the National Honors Society in 2020 and 2021',
      'Awarded AP Scholar with Distinction',
      'Varsity soccer athlete, state runner-up two years in a row'
    ],
    display: 'bulletPoints'
  }
]

export default education
