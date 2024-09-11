import { experience } from '../schema'

const work: experience[] = [
  {
    title: 'Software Engineer Intern',
    location: 'GoDaddy',
    date: 'June 2024 - Present',
    logo: '/images/logos/godaddy.png',
    paragraph: '',
    bulletPoints: [
      'Increased the speed of new metric onboarding for the experimentation platform by 4x by adding a query validation feature',
      'Reduced AWS costs by 73% by optimizing Step Function executions running Spark queries',
      "Improved integration by designing and implementing enhancements to streamline the project's integration with 2 adjacent projects"
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
      'Improved executive skills in 16 preschools and special education classrooms by developing a full-stack learning management system allowing educators to track, reflect on, and analyze cumulative student progress',
      'Provided custom progress tracking features by converting 2 complex Qualtrics surveys to be natively integrated using JavaScript',
      'Efficiently handled classroom data by building back-end APIs and databases with Node.js, Python, AWS, and DynamoDB'
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
