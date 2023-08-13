/**
 * File that contains JSON objects with all of my informatoin to be displayed
 */

import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material'


/**
 * JSON of basic information about me
 */
export const me = {
  "name": "Luke Moenning",
  "title": "Software Engineer",
  "about": "I'm a software engineer studying computer science and mathematics at the University of Iowa. In my free time I love playing and watching soccer, and recently I've even been involved with coaching. I also enjoy learning new skills through projects - like the fun game I hid somewhere on this website. (Hint: it's hidden where it should never be found.)",
  "photo": '/images/profile_picture.png', 
};

/**
 * JSON of socials information
 */
export const socials = [
  {
    "name": "GitHub",
    "url": "https://github.com/lukemoenning",
    "icon": GitHub,
  },
  {
    "name": "LinkedIn",
    "url": "https://www.linkedin.com/in/lukemoenning/",
    "icon": LinkedIn,
  },
  {
    "name": "Email",
    "url": "https://www.lukemoenning.com/contact",
    "icon": Email,
  },
  {
    "name": "Phone",
    "url": "tel:1-319-440-7133",
    "icon": Phone,
  },
];

/**
 * JSON of work information
 */
export const work = [
  {
    "title": "HCI Undergraduate Researcher",
    "location": "Project: Story Carnival",
    "date": "January 2023 - Present",
    "paragraph": "",
    "bulletPoints": [
      "Developed a teacher reflection tool that will be demoed for 16 preschools that tracks classroom progress",
      "Validated the efficacy of the tool by researching established tools and commonly followed learning standards",
    ],
    "display": "",
    "skills": [],
  },
  {
    "title": "Software Developer Intern",
    "location": "W.R. Berkley Corporation",
    "date": "May 2023 - Present",
    "paragraph": "",
    "bulletPoints": [
      "Improved an agile team’s velocity by 20% by efficiently handling tickets and meeting sprint deadlines while developing a micro front-end, internal portal",
      "Optimized GraphQL services and resolvers to enhance client-side data representation and error handling",
      "Accelerated development time for 70+ engineers by refactoring 50+ test files, expediting the CI/CD pipeline for multiple applications",
    ],
    "display": "",
    "skills": [],
  },
  {
    "title": "Soccer Coach",
    "location": "Northwest Junior High",
    "date": "March 2023 – May 2023",
    "paragraph": "",
    "bulletPoints": [
      "Mentored and coached 63 seventh and eighth-grade boys, fostering team development and individual player growth",
      "Established the program for success during its inaugural year by taking initiative in organizational decisions and working directly with executive members of the school’s staff",
    ],
    "display": "",
    "skills": [],
  },
  {
    "title": "Web Developer Intern",
    "location": "The University of Iowa - College of Engineering",
    "date": "September 2022 – January 2023",
    "paragraph": "",
    "bulletPoints": [
      "Collaborated with a team of 3 interns to efficiently port 100% of the Biomedical Engineering Website to SiteNow v3",
      "Managed the College of Engineering website by handling 30+ ticket requests and communicating results directly to clients",
    ],
    "display": "",
    "skills": [],
  },
  {
    "title": "Lead Instructor",
    "location": "Mathnasium - The Math Learning Center",
    "date": "June 2019 - December 2022",
    "paragraph": "",
    "bulletPoints": [
      "Led a team of 10+ instructors to successfully help students recover from learning setbacks caused by COVID-19",
      "Streamlined teaching by directing instructional training sessions for the other instructors",
      "Provided individualized instruction to 100+ students, ranging from kindergarten to Calculus",
    ],
    "display": "",
    "skills": [],
  },
]

/**
 * JSON of education information
 */
export const education = [
  {
    "title": "Bachelors of Science",
    "location": "The University of Iowa",
    "date": "August 2021 - May 2025",
    "bulletPoints": [
      "Computer Science BS - Mathematics BS - Pyschology Minor - Artificial Intelligence, Modeling, and Simulation Certificate - Honors Program",
      "University of Iowa Flagship Scholar - Jason and Leslie Weber Emerging Technologies Scholarship - Edward B. Buchanan, Jr. and Mary Louise Buchanan Scholarship - Undergraduate Electrical Engineering Scholarship",
      "Awarded Dean's List for Fall 2021, Spring 2022, Fall 2022, Spring 2023",
      "Memeber of UIowa Association for Computing Machinary (ACM), Intramural Soccer",
    ],
  },
  {
    "title": "Coaching Authorization",
    "location": "Kirkwood Continuing Education",
    "date": "December 2022 - January 2023",
    "bulletPoints": [
      "Obtained my coaching license through the completion of a comprehensive 55-hour coaching authorization course",
    ],
  },
  {
    "title": "High School Diploma",
    "location": "West Senior High School",
    "date": "August 2017 - May 2021",
    "bulletPoints": [
      "Graduated with a GPA of 4.32 - University of Iowa Dual Enrollment Student",
      "Member of the National Honors Society in 2020 and 2021",
      "Awarded AP Scholar with Distinction",
      "Varisty soccer athlete, state runner-up two years in a row",
    ],
  },
]

/**
 * JSON of projects information
 * 
 * Project photos should be 1920x1080 pixels
 */
export const projects = [
  {
    "name": "EduQuest",
    "description": "The project my team and I created for YouthCodeX 2023 Hackathon. EduQuest is a web-based education platform that uses OpenAI's API to generate questions for young children, and to provide an interactive AI tutor to help with instruction. Our goal was to create a tool that would allow children to learn online in a fun and engaging way.",
    "photo": "/images/projects/eduquest.png",
    "techstack": ["React.js", "GraphQL", "AWS", "DynamoDB", "OpenAI API"],
    "github": "https://github.com/lukemoenning/eduquest",
    "date": "",
    "live_demo": null,
  },
  {
    "name": "TrailTrekkers",
    "description": "A full-stack social media application with a focus on finding and tracking hikes. This was a great opportunity to develop my GraphQL and AWS skills, as well as a fun way to track hikes that I personally go on.",
    "photo": "/images/projects/trailtrekkers.png",
    "techstack": ["React.js", "GraphQL", "AWS", "DynamoDB"],
    "github": "https://github.com/lukemoenning/trailtrekkers",
    "date": "",
    "live_demo": null,
  },
  {
    "name": "Trackify",
    "description": "A Spotify statistics tracker so the user can be up to date with all their top songs and artists. My goal in developing Trackify was to become more confident with APIs, react, and containerization with docker. Along the way I practiced preventing tightly coupled code with a data layer and developing documentation using the JSDoc tool.",
    "photo": "/images/projects/trackify.png",
    "techstack": ["React.js", "Docker", "JSDoc", "Spotify API"],
    "github": "https://github.com/lukemoenning/trackify",
    "date": "",
    "live_demo": null,
  },
  {
    "name": "Personal Website",
    "description": "I created this website as a place where you can learn more about me and what I've been part of. I enjoyed the challenge of making it scalable and maintainable so I can update its information as easily as possible.",
    "photo": "/images/logo_background.png",
    "techstack": ["Next.js, TypeScript, Vercel"],
    "github": "https://github.com/lukemoenning/portfolio",
    "date": "",
    "live_demo": "https://lukemoenning.com",
  },
  {
    "name": "Lost in Space",
    "description": "A little game I made so I could hide it somewhere on this website. I had a great time practicing concepts of Object-Oriented Programming I learned in my software development class.",
    "photo": "/images/projects/lost_in_space.png",
    "techstack": ["JavaScript"],
    "github": "https://github.com/lukemoenning/portfolio",
    "date": "",
    "live_demo": "https://lukemoenning.com/lostinspace",
  },
  {
    "name": "Weather App",
    "description": "A simple python weather app retrieving data from the OpenWeatherMap API. This project served as a way for me to step foot into the world of APIs and data manipulation.",
    "photo": "/images/projects/weatherapp.png",
    "techstack": ["Python", "Tkinter"],
    "github": "https://github.com/lukemoenning/weather-app",
    "date": "",
    "live_demo": null,
  },
  {
    "name": "Snake Game",
    "description": "My very first project. I created this game with hopes to practice using data structures I was learning in class, such as LinkedLists. I wanted a way to track my score, so I used a CSV file to serve as an introduction to working with data and a way store accounts and their high scores.",
    "photo": "/images/projects/snake-game-final.png",
    "techstack": ["Java", "JavaSwing"],
    "github": "https://github.com/lukemoenning/snake-game-final",
    "date": "",
    "live_demo": null,
  },
]
