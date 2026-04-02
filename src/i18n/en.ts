export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    communities: 'Discord Communities',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Seria - Freelance Developer',
    prefix: 'Want to build a',
    suffix: '?',
    items: [
      'Discord bot',
      'LINE bot',
      'Discord server',
      'personal site',
      'web scraper',
      'web app',
    ],
    cta: 'See my work',
    ctaSecondary: 'Get in touch',
  },
  about: {
    sectionLabel: 'About',
    heading: 'You have the idea. I have the solution.',
    body: "I'm Seria - a freelance developer based in Taiwan. I build websites, bots, and automation tools that address long-standing pain points, custom needs, or business ideas you want to bring to life. Whether you're a business, a community, or an individual, I provide professional technical services to help you make it happen.",
    cta: 'More about me',
    page: {
      title: "About - Seria",
      description: "Seria is a freelance developer based in Taiwan, specializing in websites, bots, and automation tools.",
      pageTitle: "Hi, I'm Seria.",
      lead: "I can turn any idea you have into reality through code.",
      prose1: "I specialize in web development, chatbot development, and automation - the kind of work that makes businesses run smoother and users happier. Whether it's a polished website, a Discord bot that handles your community, or a scraper that monitors prices while you sleep, I build it with care.",
      prose2: "I've been writing code for several years, working with clients ranging from small local businesses to online communities with thousands of members. Every project gets the same attention: high-quality deliverables, clear communication, and results that last.",
      prose3: "Having spent years deep in Discord bot development, I know the platform's capabilities and limitations inside out - which means I can give you informed recommendations and build exactly the bot your community needs.",
      sidebarBasedIn: "Based in",
      sidebarBasedInValue: "Taiwan",
      sidebarLanguages: "Languages",
      sidebarLanguagesValue: "Traditional Chinese\nEnglish",
      ctaProjects: "See my projects",
      contactLabel: "Contact",
      contactHeading: "Have a project in mind?",
      contactDesc: "Reach out through any of the channels below. I usually respond within one business day.",
    },
  },
  projects: {
    sectionLabel: 'Selected Work',
    heading: 'Things I\'ve built.',
    cta: 'View all projects',
    contactLabel: 'Work with me',
    contactHeading: 'Have a project in mind?',
    contactBody: "I'm available for freelance work. Whether you need a website, a bot, or an automation tool - let's talk.",
    contactCta: 'Get in touch',
  },
  communities: {
    sectionLabel: 'Discord Communities',
    heading: 'Servers I\'ve built.',
    lead: 'Every server is designed from the ground up - channels, bots, roles, and visual styling - built entirely around what your community needs.',
    members: 'members',
    contactLabel: 'Want a community of your own?',
    contactHeading: 'Let\'s build your community.',
    contactBody: "A great Discord server is more than channels and roles. You can give your members an outstanding experience without breaking the bank.",
    contactCta: 'Get in touch',
  },
  testimonials: {
    sectionLabel: 'Client Feedback',
    heading: 'What clients say.',
  },
  footer: {
    tagline: 'Turning imagination into reality.',
    rights: 'All rights reserved.',
  },
} as const;

type DeepMutable<T> = {
  -readonly [K in keyof T]: T[K] extends readonly (infer U)[]
  ? U extends string
  ? string[]
  : DeepMutable<U>[]
  : T[K] extends string
  ? string
  : T[K] extends object
  ? DeepMutable<T[K]>
  : T[K];
};

export type Translations = DeepMutable<typeof en>;
