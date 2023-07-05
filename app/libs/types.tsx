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
  descriptions: string[],
}

export interface project {
  name: string,
  description: string,
  photo: string,
  techstack: string[],
  github: string,
  live_demo: string | null,
}