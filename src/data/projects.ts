export interface Project {
  id: string;
  featured: boolean;
  year: string;
  tags: string[];
  title: {
    en: string;
    'zh-TW': string;
  };
  category: {
    en: string;
    'zh-TW': string;
  };
  description: {
    en: string;
    'zh-TW': string;
  };
  url?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    featured: true,
    year: '2024',
    tags: ['Astro', 'TypeScript', 'Stripe'],
    title: {
      en: 'E-commerce Platform',
      'zh-TW': '電商平台',
    },
    category: {
      en: 'Web Development',
      'zh-TW': '網站開發',
    },
    description: {
      en: 'A full-featured online store with inventory management, payment integration, and a custom admin dashboard.',
      'zh-TW': '功能完整的線上商店，包含庫存管理、金流串接與自訂後台管理介面。',
    },
  },
  {
    id: 'discord-community-bot',
    featured: true,
    year: '2024',
    tags: ['Node.js', 'Discord.js', 'PostgreSQL'],
    title: {
      en: 'Discord Community Bot',
      'zh-TW': 'Discord 社群機器人',
    },
    category: {
      en: 'Bot Development',
      'zh-TW': '機器人開發',
    },
    description: {
      en: 'A feature-rich Discord bot handling moderation, custom commands, role management, and server analytics.',
      'zh-TW': '功能豐富的 Discord 機器人，處理管理、自訂指令、身分組管理與伺服器數據分析。',
    },
  },
  {
    id: 'price-monitoring-system',
    featured: true,
    year: '2023',
    tags: ['Python', 'Playwright', 'Redis'],
    title: {
      en: 'Price Monitoring System',
      'zh-TW': '價格監控系統',
    },
    category: {
      en: 'Automation',
      'zh-TW': '自動化',
    },
    description: {
      en: 'Automated web scraper tracking prices across multiple platforms, sending alerts when targets are hit.',
      'zh-TW': '自動化爬蟲追蹤多平台商品價格，達到目標價格時即時發送通知。',
    },
  },
  {
    id: 'line-booking-bot',
    featured: true,
    year: '2023',
    tags: ['Node.js', 'LINE API', 'MySQL'],
    title: {
      en: 'LINE Booking Bot',
      'zh-TW': 'LINE 預約機器人',
    },
    category: {
      en: 'Bot Development',
      'zh-TW': '機器人開發',
    },
    description: {
      en: 'A LINE chatbot for a local business handling appointment bookings, reminders, and customer follow-ups.',
      'zh-TW': '為在地商家打造的 LINE 聊天機器人，處理預約、提醒與客戶後續追蹤。',
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectField<K extends keyof Project>(
  project: Project,
  key: K,
  locale: string,
): K extends 'title' | 'category' | 'description'
  ? string
  : Project[K] {
  const value = project[key];
  if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'zh-TW' in value)) {
    const localized = value as Record<string, string>;
    return (localized[locale] ?? localized['zh-TW'] ?? '') as never;
  }
  return value as never;
}
