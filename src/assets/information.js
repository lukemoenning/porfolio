/**
 * File that contains JSON objects with all of my informatoin to be displayed
 */

import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';


/**
 * JSON of the color theme
 */
export const colors = {
  "white": "#FFFFFF",
  "offwhite": "#F9F9F9",
  "black": "#000000",
  "accent": "#800000",
}

/**
 * JSON of basic information about me
 */
export const me = {
  "name": "Luke Moenning",
  "title": "Software Engineer",
  "about": ".................",
  "profile_picture": 'src/assets/images/profile_picture.png', 
}

/**
 * JSON of socials
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
]

