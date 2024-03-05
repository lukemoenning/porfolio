import { project } from '../schema'

const projects: project[] = [
  {
    name: 'SolarViz',
    description:
      'For HackUIowa 2024, my team built a data analsis and visualization tool for solar panel data local to the Iowa City area. It was a great experience to chat with employees of the local companies and learn that our application proved to provide value to them.',
    photo: '/images/projects/solarviz.png',
    techstack: ['Python', 'Streamlit', 'Docker'],
    github: 'https://github.com/lukemoenning/solar-viz',
    date: '',
    live_demo: null
  },
  {
    name: 'EduQuest',
    description:
      "The project my team and I created for YouthCodeX 2023 Hackathon. EduQuest is a web-based education platform that uses OpenAI's API to generate questions for young children, and to provide an interactive AI tutor to help with instruction. Our goal was to create a tool that would allow children to learn online in a fun and engaging way.",
    photo: '/images/projects/eduquest.png',
    techstack: ['React.js', 'GraphQL', 'AWS', 'DynamoDB', 'OpenAI API'],
    github: 'https://github.com/lukemoenning/eduquest',
    date: '',
    live_demo: null
  },
  {
    name: 'TrailTrekkers',
    description:
      'A full-stack social media application with a focus on finding and tracking hikes. This was a great opportunity to develop my GraphQL and AWS skills, as well as a fun way to track hikes that I personally go on.',
    photo: '/images/projects/trailtrekkers.png',
    techstack: ['React.js', 'GraphQL', 'AWS', 'DynamoDB'],
    github: 'https://github.com/lukemoenning/trailtrekkers',
    date: '',
    live_demo: null
  },
  {
    name: 'Trackify',
    description:
      'A Spotify statistics tracker so the user can be up to date with all their top songs and artists. My goal in developing Trackify was to become more confident with APIs, react, and containerization with docker. Along the way I practiced preventing tightly coupled code with a data layer and developing documentation using the JSDoc tool.',
    photo: '/images/projects/trackify.png',
    techstack: ['React.js', 'Docker', 'JSDoc', 'Spotify API'],
    github: 'https://github.com/lukemoenning/trackify',
    date: '',
    live_demo: null
  },
  {
    name: 'Personal Website',
    description:
      "I created this website as a place where you can learn more about me and what I've been part of. I enjoyed the challenge of making it scalable and maintainable so I can update its information as easily as possible.",
    photo: '/images/logo_background.png',
    techstack: ['Next.js', 'TypeScript', 'Vercel'],
    github: 'https://github.com/lukemoenning/portfolio',
    date: '',
    live_demo: 'https://lukemoenning.com'
  },
  {
    name: 'Lost in Space',
    description:
      'A little game I made so I could hide it somewhere on this website. I had a great time practicing concepts of Object-Oriented Programming I learned in my software development class.',
    photo: '/images/projects/lost_in_space.png',
    techstack: ['JavaScript'],
    github: 'https://github.com/lukemoenning/portfolio',
    date: '',
    live_demo: 'https://lukemoenning.com/lostinspace'
  },
  {
    name: 'Weather App',
    description:
      'A simple python weather app retrieving data from the OpenWeatherMap API. This project served as a way for me to step foot into the world of APIs and data manipulation.',
    photo: '/images/projects/weatherapp.png',
    techstack: ['Python', 'Tkinter'],
    github: 'https://github.com/lukemoenning/weather-app',
    date: '',
    live_demo: null
  },
  {
    name: 'Snake Game',
    description:
      'My very first project. I created this game with hopes to practice using data structures I was learning in class, such as LinkedLists. I wanted a way to track my score, so I used a CSV file to serve as an introduction to working with data and a way store accounts and their high scores.',
    photo: '/images/projects/snake-game-final.png',
    techstack: ['Java', 'JavaSwing'],
    github: 'https://github.com/lukemoenning/snake-game-final',
    date: '',
    live_demo: null
  }
]

export default projects
