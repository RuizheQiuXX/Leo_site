// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }

export const careerList: Array<CareerItemType> = [
  {
    company: 'PwC (PricewaterhouseCoopers) AC Shanghai',
    title: 'Business Analyst & Solution Engineer',
    logo: 'bank',
    start: '2021',
    end: '2024',
  },
  {
    company: 'Hoperun Information Technology',
    title: 'Assistant IT & Testing Engineer (Intern)',
    logo: 'code',
    start: '2020',
    end: '2020',
  },
  {
    company: 'Duke University',
    title: 'Research Assistant',
    logo: 'college',
    start: '2024',
    end: 'Present'
  },
  {
    company: 'Duke University Health Center',
    title: 'Fitness Counselor',
    logo: 'coffee',
    start: '2024',
    end: 'Present'
  }
]
