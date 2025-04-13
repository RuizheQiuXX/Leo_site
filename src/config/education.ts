
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Duke University',
      major: 'MQM: Business Analytics - Risk Track',
      logo: 'college',
      start: '2024',
      end: '2025'
    },
    {
      school: 'University of Minnesota- Twin Cities',
      major: 'Financial Risk Mangement & Insurance',
      logo: 'college',
      start: '2020',
      end: '2024'
    },
  ]