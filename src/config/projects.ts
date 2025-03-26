// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'PwC 20th Anniversary Community Contribution Award',
    description: 'Recognized for outstanding contributions to community impact initiatives during PwC China’s 20th anniversary celebration.',
    date: '2024',
    location: 'Shanghai, China',
  },
  {
    name: 'Certification as Venerated Blood Donor',
    description: 'Honorary recognition for voluntary blood donation and continuous contributions to public health.',
    date: '2023',
    location: 'Shanghai, China',
  },
]


// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'PwC AI Chatbot Rollout',
    description: 'Championed the internal adoption of PwC’s NLP chatbot by 1,600+ employees, increasing task automation by 35%.',
    link: { href: 'https://www.linkedin.com/in/linsong-hao2077', label: 'LinkedIn' },
    tags: ['AI', 'NLP', 'Automation', 'PwC']
  },
  {
    name: 'Epidemic Risk Tracking System',
    description: 'Built a real-time health risk tracker with CDC & mobility data, achieving 90% outbreak prediction accuracy.',
    link: { href: '#', label: 'View Dashboard' },
    tags: ['Public Health', 'Python', 'Data Visualization', 'Tableau']
  },
  {
    name: 'Finance Process Automation (RPA)',
    description: 'Automated financial reporting workflows, cutting reporting time by 40% and enhancing audit compliance.',
    link: { href: '#', label: 'Capstone Project' },
    tags: ['Automation', 'RPA', 'Compliance', 'Python']
  },
  {
    name: 'ESG Data Analytics – PwC Solvers Challenge',
    description: 'Led sustainability data analysis on carbon footprints from 1,600+ participants to shape corporate ESG insights.',
    link: { href: '#', label: 'Challenge Overview' },
    tags: ['ESG', 'Data Science', 'Sustainability', 'PwC']
  },
]


// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'AI Ethics Roundtable',
    description:
      'Hosted a peer-led discussion on AI ethics, focusing on algorithmic bias, data privacy, and the balance between innovation and responsibility.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Circle',
    description:
      'Facilitated weekly code review sessions for junior developers, sharing best practices in clean code, readability, and debugging techniques.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
  {
    name: 'Judo & Jiu-jitsu Training',
    description:
      '12 years of martial arts training with a black belt in Judo. Practicing discipline, focus, and the philosophy of movement both on and off the mat.',
    date: 'Ongoing',
    location: 'Various Dojos across China & U.S.',
  },
]

