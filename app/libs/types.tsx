export interface navItem {
  name: string,
  href: string,
}

export interface social {
  name: string,
  url: string,
  icon: any,
}

export interface socialLinkProps {
  social: social,
  size: string,
  displayName: boolean,
}

export interface experience { 
  title: string,
  location: string,
  date: string,
  paragraph: string,
  bulletPoints: string[],
  display: 'paragraph' | 'bulletPoints' | string,
  skills: string[],
}

export interface project {
  name: string,
  description: string,
  photo: string,
  techstack: string[],
  github: string,
  date: string,
  live_demo: string | null,
}

export interface formLabelProps {
  icon: any,
  text: string,
  required: boolean,
}