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
  },
  projects: {
    sectionLabel: 'Selected Work',
    heading: 'Things I\'ve built.',
    cta: 'View all projects',
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
