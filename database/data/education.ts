import { experience } from '../schema'

const education: experience[] = [
  {
    title: 'Bachelors of Science',
    location: 'The University of Iowa',
    date: '',
    logo: '/images/logos/uiowa.png',
    bulletPoints: [
      'Computer Science BS - Mathematics BS - Psychology Minor - Artificial Intelligence, Modeling, and Simulation Certificate - Honors Program',
      'University of Iowa Flagship Scholar - Jason and Leslie Weber Emerging Technologies Scholarship - Edward B. Buchanan, Jr. and Mary Louise Buchanan Scholarship - Undergraduate Electrical Engineering Scholarship',
      'Secretary and Treasurer of UIowa Association for Computing Machinery (ACM), Intramural Soccer'
    ],
    display: 'bulletPoints'
  },
  {
    title: 'Coaching Authorization',
    location: 'Kirkwood Continuing Education',
    date: '',
    logo: '/images/logos/kirkwood.png',
    bulletPoints: [
      'Obtained my coaching license through the completion of a comprehensive 55-hour coaching authorization course'
    ],
    display: 'bulletPoints'
  },
  {
    title: 'High School Diploma',
    location: 'West Senior High School',
    date: '',
    logo: '/images/logos/westhighschool.png',
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
