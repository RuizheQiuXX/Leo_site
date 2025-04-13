export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Ruizhe Qiu'
export const headline = 'Student at Duke University.'
export const introduction =
  "Coucou Les Amis! My name is Ruizhe Qiu. I'm from Jiangsu and an alumnus of NFLS, NYU, and Duke. My passion is in Risk Management, Compliance & Judo."
export const email = 'ruizhe.qiu@duke.edu'
export const githubUsername = 'HenryRorschach'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hey there! I’m Ruizhe Qiu — born in China, trained in tech in NYC, and now diving into the world of business analytics at Duke University. My journey bridges the gap between code and strategy, with a B.A. from NYU and current grad studies at Fuqua.",
  "Right now, I'm building real-time risk tracking systems, automating finance with RPA, and pushing the frontier of AI chatbot adoption at PwC. I love turning complex problems into elegant solutions.",
  "This site is my digital dojo — part journal, part lab. Expect thoughts on AI, strategy, data, and sometimes, judo. Welcome to the brain of someone who believes tech should be both powerful and human.",
];


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/23740961',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
