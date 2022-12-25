/**
 * File that contains JSON objects with all of my informatoin to be displayed
 */

import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';


/**
 * JSON of the color theme
 */
export const colors = {
  "white": "#FFFFFF",
  "offwhite": "#e1e4e9",
  "black": "#000000",
  "accent": "#63868a",
};

/**
 * JSON of basic information about me
 */
export const me = {
  "name": "Luke Moenning",
  "title": "Software Engineer",
  "about": ".................",
  "profile_picture": '../assets/images/profile_picture.png', 
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
    "url": "mailto:luke.moenning@gmail.com",
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
    "title": "Web Intern",
    "location": "The University of Iowa - College of Engineering",
    "date": "September 2022 - Present",
    "description": "Maintain The University of Iowa - College of Engineering website. Handle ticket requests and communicate results and constraints with the requester. Developed front end software skills.",
  },
  {
    "title": "Lead Instructor",
    "location": "Mathnasium - The Math Learning Center",
    "date": "June 2019 - December 2022",
    "description": "Help students look at math from a differenet perspective in hopes that they can find a better understanding of it. Responsibilities include taking charge when the Center Director is absent, instructing students, and interating with parents.",
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
    "description": "Honors student with a computer science major and psychology minor. Awarded Dean's List for Fall 2021 and Spring 2022. Memeber of UIowa Association for Computing Machinary (ACM).",
  },
  {
    "title": "High School Diploma",
    "location": "West Senior High School",
    "date": "August 2017 - May 2021",
    "description": "Graduated with a GPA of 4.32. Member of the National Honors Society in 2020 and 2021. Varisty soccer athlete for two years, team played in the state final both of those years.",
  },
]

/**
 * JSON of projects information
 * 
 * Project photos should be 1920x1080 pixels
 */
export const projects = [
  {
    "name": "Trackify",
    "description": "React Spotify clone that has the added feature of displaying account statistics.",
    "photo": require("./images/trackify.png"),
    "techstack": ["React", "Docker", "JSDoc"],
    "github": "https://github.com/lukemoenning/trackify",
    "live_demo": "https://lukemoenning.github.io/trackify/",
  },
  {
    "name": "Personal Website",
    "description": "...",
    "photo": require("./images/website.png"),
    "techstack": ["React", "Docker"],
    "github": "https://github.com/lukemoenning/portfolio",
    "live_demo": null,
  },
  {
    "name": "Snake Game",
    "description": "...",
    "photo": require("./images/snake-game-final.png"),
    "techstack": ["Java", "JavaSwing"],
    "github": "https://github.com/lukemoenning/snake-game-final",
    "live_demo": null,
  },
  {
    "name": "Weather App",
    "description": "...",
    "photo": require("./images/weatherapp.png"),
    "techstack": ["Python", "Tkinter"],
    "github": "https://github.com/lukemoenning/weather-app",
    "live_demo": null,
  },
]

