import { experience } from '../schema'

const work: experience[] = [
  {
    title: 'Software Engineer Intern',
    location: 'GoDaddy',
    date: 'June 2024 - Present',
    logo: '/images/logos/godaddy.png',
    paragraph: '',
    bulletPoints: [
      'Increased the speed of new metric onboarding for the experimentation platform by 4x by releasing a query validation feature',
      'Built out supporting Python endpoints, integrated AWS IAM authentication through custom policies, and delivered a new Next.js page on the platform to enhance user interaction and feature accessibility, committing code across 4 repositories',
      'Designed and implemented enhancements to the feature’s query runner backbone to streamline integration with 2 adjacent projects',
      'Achieved a 73% reduction in AWS costs by optimizing Spark queries integrated with EMR and Step Function workflows'
    ],
    display: 'bulletPoints',
    skills: []
  },
  {
    title: 'Software Engineer Intern',
    location: 'Sage Bionetworks',
    date: 'January 2024 - May 2024',
    logo: '/images/logos/sage.png',
    paragraph: '',
    bulletPoints: [
      'Reduced data latency for the Synapse data platform from an average of 60 minutes to 200 milliseconds for a team of 20+ researchers by designing and implementing a real-time notification system using webhooks',
      'Developed an algorithm utilizing AWS SQS to process and distribute batches of 1,000,000+ simultaneous notifications',
      'Created APIs for webhook registrations and additional data validation services for 100k+ monthly users',
      'Enhanced MySQL performance by developing an algorithm to parse SQL statements and optimize memory allocation by 28%'
    ],
    display: 'bulletPoints',
    skills: []
  },
  {
    title: 'Undergraduate Researcher',
    location: 'HawCHI Lab - Story Carnival',
    date: 'January 2023 - Present',
    logo: '/images/logos/uiowa.png',
    paragraph: '',
    bulletPoints: [
      'Improved executive skills in 16 preschools and special education classrooms by developing Story Carnival, a full-stack learning management system (LMS) that allows educators to track, reflect on, and analyze cumulative student progress',
      'Researched 12 LMSs and 5 learning standards, including Head Start and NAEYC, to align the tool’s design with best practices',
      'Gathered feedback from educators by demoing a prototype of the tool, incorporating suggestions to improve user experience',
      'Converted 2 convoluted Qualtrics surveys into a simple, custom solution using SurveyJS, improving project maintainability and UX'
    ],
    display: 'bulletPoints',
    skills: []
  },
  {
    title: 'Software Engineer Intern',
    location: 'W.R. Berkley Corporation',
    date: 'May 2023 - Present',
    logo: '/images/logos/wrberkley.png',
    paragraph: '',
    bulletPoints: [
      'Developed support for quoting Monoline General Liability policies for the launch of a micro React.js insurance portal',
      'Built GraphQL services and resolvers to enhance client-side data representation and error handling',
      'Accelerated development time for 70+ engineers by rewriting 50+ test files to remove a slow and deprecated library'
    ],
    display: 'bulletPoints',
    skills: []
  },
  {
    title: 'Soccer Coach',
    location: 'Northwest Junior High',
    date: 'March 2023 – May 2023',
    logo: '/images/logos/northwest.png',
    paragraph: '',
    bulletPoints: [
      'Mentored and coached 63 seventh and eighth-grade boys, fostering team development and individual player growth',
      'Established the program for success during its inaugural year by taking initiative in organizational decisions and working directly with executive members of the school’s staff'
    ],
    display: 'bulletPoints',
    skills: []
  },
  {
    title: 'Web Developer Intern',
    location: 'The University of Iowa - College of Engineering',
    date: 'September 2022 – January 2023',
    logo: '/images/logos/uiowa.png',
    paragraph: '',
    bulletPoints: [
      'Collaborated with a team of 3 interns to efficiently port 100% of the Biomedical Engineering Website to SiteNow v3',
      'Managed the College of Engineering website by handling 30+ ticket requests and communicating results directly to clients'
    ],
    display: 'bulletPoints',
    skills: []
  },
  {
    title: 'Lead Instructor',
    location: 'Mathnasium - The Math Learning Center',
    date: 'June 2019 - December 2022',
    logo: '/images/logos/mathnasium.png',
    paragraph: '',
    bulletPoints: [
      'Led a team of 10+ instructors to successfully help students recover from learning setbacks caused by COVID-19',
      'Streamlined teaching by directing instructional training sessions for the other instructors',
      'Provided individualized instruction to 100+ students, ranging from kindergarten to Calculus'
    ],
    display: 'bulletPoints',
    skills: []
  }
]

export default work
