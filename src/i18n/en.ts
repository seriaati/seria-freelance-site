export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Seria — Freelance Developer',
    prefix: 'Want to build a',
    suffix: '?',
    items: [
      'website',
      'Discord bot',
      'LINE bot',
      'automation tool',
      'web scraper',
      'Telegram bot',
    ],
    cta: 'See my work',
    ctaSecondary: 'Get in touch',
  },
  about: {
    sectionLabel: 'About',
    heading: 'Crafting digital things that work.',
    body: "I'm Seria — a freelance developer based in Taiwan. I build websites, bots, and automation tools that solve real problems. I care about clean code, thoughtful design, and delivering work that lasts.",
    cta: 'More about me',
    page: {
      title: "About — Seria",
      description: "Learn more about Seria, a freelance developer based in Taiwan.",
      pageTitle: "Hello, I'm Seria.",
      lead: "I'm a freelance developer based in Taiwan, building digital things that work well and look good.",
      prose1: "I specialize in web development, chatbot development, and automation — the kind of work that makes businesses run smoother and users happier. Whether it's a polished website, a Discord bot that handles your community, or a scraper that monitors prices while you sleep, I build it with care.",
      prose2: "I've been writing code for several years, working with clients ranging from small local businesses to online communities with thousands of members. Every project gets the same attention: clean code, clear communication, and results that last.",
      prose3: "When I'm not building things for clients, I'm usually exploring new tools, contributing to open source, or finding ways to automate something that shouldn't need to be done manually.",
      skillsHeading: "What I work with",
      skillWeb: "Web",
      skillBots: "Bots & APIs",
      skillAutomation: "Automation",
      skillInfra: "Infrastructure",
      skillAutomationItem4: "Cron & Scheduling",
      sidebarBasedIn: "Based in",
      sidebarBasedInValue: "Taiwan",
      sidebarLanguages: "Languages",
      sidebarLanguagesValue: "Traditional Chinese\nEnglish",
      sidebarAvailability: "Availability",
      sidebarAvailabilityValue: "Available for work",
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
    contactBody: "I'm available for freelance work. Whether you need a website, a bot, or an automation tool — let's talk.",
    contactCta: 'Get in touch',
  },
  testimonials: {
    sectionLabel: 'Client Feedback',
    heading: 'What clients say.',
  },
  footer: {
    tagline: 'Available for freelance work.',
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
