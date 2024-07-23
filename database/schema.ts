export type icon = 'Email' | 'GitHub' | 'LinkedIn' | 'Phone' | string // TODO: remove string

export interface me {
  name: string
  title: string
  about: string
  photo: string
}

export interface social {
  name: string
  url: string
  icon: icon
}

export interface about {
  me: me
  socials: social[]
}

export interface experience {
  title: string
  location: string
  date: string
  logo: string
  paragraph?: string
  bulletPoints?: string[]
  display: 'paragraph' | 'bulletPoints' | string // TODO: remove string
  skills?: string[]
}

export interface allExperience {
  work: experience[]
  education: experience[]
}

export interface project {
  name: string
  description: string
  photo: string
  techstack: string[]
  github: string
  date: string
  live_demo: string | null
}
