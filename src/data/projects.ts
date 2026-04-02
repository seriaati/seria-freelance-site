export interface Project {
  id: string;
  featured: boolean;
  year: string;
  thumbnail?: string;
  tags?: string[];
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
    id: 'unitrpg',
    featured: false,
    year: '2026',
    title: {
      en: 'UniTRPG',
      'zh-TW': 'UniTRPG',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord bot that provides comprehensive dice rolling functionality for TRPG, supporting multiple roll types (simple, multi, compound), CCB (Call of Cthulhu) skill checks, fortune telling, and random choice selection with optional secret rolls.',
      'zh-TW': '一個 Discord 機器人，提供 TRPG 的骰子投擲功能，支援多種投擲方式（簡單、多次、複合）、CCB（克蘇魯的呼喚）技能檢定、運勢占卜和隨機選擇，並支援秘匿投擲。',
    },
  },
  {
    id: 'number-gv-bot',
    featured: false,
    year: '2026',
    title: {
      en: 'Custom Giveaway Bot',
      'zh-TW': '客製化抽獎機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord giveaway bot that conducts weighted raffles based on members\' numeric roles, with persistent join buttons and automatic winner drawing via scheduled tasks.',
      'zh-TW': '一個 Discord 抽獎機器人，根據成員的數字身份組進行加權抽籤，支持持久化加入按鈕和自動排程抽獎功能。',
    },
  },
  {
    id: 'turtlegame-bot',
    featured: false,
    year: '2026',
    title: {
      en: 'TurtleGame Discord Bot',
      'zh-TW': '烏龜手遊 Discord 機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord bot for gaming communities featuring game channel management, member leveling with role progression, giveaway systems with automated winner selection, and community moderation tools.',
      'zh-TW': '一個為遊戲社群設計的 Discord 機器人，提供遊戲頻道管理、成員等級系統與身份組進階、自動化抽獎活動以及社群審核工具。',
    },
  },
  {
    id: 'turtlegame-line-bot',
    featured: false,
    year: '2026',
    title: {
      en: 'TurtleGame LINE Bot',
      'zh-TW': '烏龜手遊 LINE 機器人',
    },
    category: {
      en: 'LINE Bot',
      'zh-TW': 'LINE 機器人',
    },
    description: {
      en: 'A LINE bot for managing customer orders, VIP tiers, and referral discounts with admin controls and automated order notifications.',
      'zh-TW': '一個 LINE 聊天機器人，用於管理客戶訂單、VIP 等級和推薦折扣，並提供管理員控制和自動訂單通知功能。',
    },
  },
  {
    id: 'datou-bot',
    featured: false,
    year: '2026',
    title: {
      en: 'Blood Guild Helper',
      'zh-TW': '血盟幫手',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'Discord bot for a game guild, with a join/application system: users fill out a form, the moderators approve/reject the member, and on approval it assigns Discord roles + adds the user\'s in-game class to their nickname.',
      'zh-TW': 'Discord 機器人，用於遊戲公會，具備加入/申請系統：用戶填寫表格，版主審核成員申請，審核通過後分配 Discord 身份組並將用戶的遊戲職業添加到他們的暱稱中。',
    },
  },
  {
    id: 'chengyu-bot',
    featured: true,
    year: '2026',
    title: {
      en: 'Chengyu Helper',
      'zh-TW': '丞宇生醫小幫手',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord bot for Chengyu Bio Medical that facilitates product marketplace transactions with role-based access control; features include vendor/clinic staff verification through interactive questionnaires, product listing with automatic expiration, and private trade channels for buyer-seller communication.',
      'zh-TW': '一個為丞宇生醫設計的 Discord 機器人，提供產品市集交易功能與身份組驗證系統；包含互動式問卷驗證、商品自動下架機制，以及買賣雙方的私密交易頻道。',
    },
  },
  {
    id: 'ad-bots',
    featured: false,
    year: '2026',
    title: {
      en: 'Discord Server Stress Tester',
      'zh-TW': 'Discord 伺服器壓力測試工具',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord server stress-testing tool that orchestrates multiple self-bot accounts to concurrently post messages across specified guilds and channels with configurable intervals, randomized identities, and flexible token management.',
      'zh-TW': '一個 Discord 伺服器壓力測試工具，可協調多個自動機器人帳號同時在指定的伺服器和頻道發送訊息，支援可配置的發送間隔、隨機化身份和靈活的 Token 管理。',
    },
  },
  {
    id: 'xiaoxi-bot',
    featured: true,
    year: '2026',
    title: {
      en: 'Large Gaming Server Management Bot',
      'zh-TW': '全台最大楓之谷私服推廣區管理機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord bot for managing a large gaming community (largest MapleStory private server promotion server in Taiwan) with features including server advertisement posting with approval workflows, anti-scam detection using image hashing and link analysis, member engagement tracking with role management, voting systems, and automated welcome messages for new members.',
      'zh-TW': '一個 Discord 機器人，用於管理大型遊戲伺服器社群（全台最大私服推廣區），具備伺服器廣告發布與審核流程、使用圖像雜湊和連結分析的反詐騙檢測、成員參與度追蹤與身份組管理、投票系統，以及新成員自動歡迎訊息等功能。',
    },
  },
  {
    id: 'tag-gv-bot',
    featured: false,
    year: '2026',
    title: {
      en: 'Discord Server Tag Giveaway Bot',
      'zh-TW': 'Discord 伺服器標籤抽獎機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord bot that enables server administrators to create and manage giveaways based on member tags, with automated winner selection.',
      'zh-TW': '一個 Discord 機器人，讓伺服器管理員能夠根據成員標籤建立和管理抽獎活動，具備自動選獎功能。',
    },
  },
  {
    id: 'mt-love',
    featured: false,
    year: '2025',
    title: {
      en: 'MT Love',
      'zh-TW': '初創未來俱樂部機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A customized Discord bot for MT Love (playmate providing service) that provides comprehensive server management and community engagement features, including ticket/support systems, dynamic voice channel creation, economy/banking functionality, and member welcome automation.',
      'zh-TW': '一個為初創未來俱樂部（陪玩公司）製作的客製化 Discord 機器人，提供完整的伺服器管理和社群互動功能，包括工單/客服系統、動態語音頻道建立、經濟/銀行系統，以及成員歡迎自動化。',
    },
  },
  {
    id: 'unsalted-butter',
    featured: false,
    year: '2025',
    title: {
      en: 'Unsalted Butter',
      'zh-TW': '無鹽奶油',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A custom Discord bot featuring an experience-based leveling system with role progression, a gacha system, PvP combat with skill mechanics, music playback, and community management tools.',
      'zh-TW': '一個客製化的 Discord 機器人，具備經驗值升級系統與身份組進階、抽卡系統、PvP 戰鬥與技能機制、音樂播放以及社群管理工具。',
    },
  },
  {
    id: 'card-game',
    featured: true,
    year: '2025',
    title: {
      en: 'Card Game Bot',
      'zh-TW': '卡片遊戲機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord-integrated card game featuring player progression through gacha mechanics, PvP ranking battles, trading systems, and shop management. Players can create cards with AI and unlease their creativity.',
      'zh-TW': '一個與 Discord 整合的卡片遊戲，特色包括透過抽卡機制進行玩家進展、PvP 排位戰、交易系統和商店管理。玩家可以使用 AI 創建卡片，釋放他們的創造力。',
    },
  },
  {
    id: 'gcalendar-bot',
    featured: false,
    year: '2025',
    title: {
      en: 'Google Calendar Bot',
      'zh-TW': 'Google 日曆機器人',
    },
    category: {
      en: 'LINE Bot',
      'zh-TW': 'LINE 機器人',
    },
    description: {
      en: 'A LINE bot that seamlessly integrates with Google Calendar to deliver automatic event notifications and reminders directly to users through LINE messaging. Users can authorize their Google Calendar access via OAuth2 and receive timely notifications for upcoming events.',
      'zh-TW': '一個 LINE 機器人，可無縫整合 Google 日曆並自動傳送事件通知和提醒給使用者。使用者可透過 OAuth2 授權 Google 日曆存取權限，並接收即將到來的事件的及時通知。',
    },
  },
  {
    id: 'trademark-scraper',
    featured: false,
    year: '2025',
    title: {
      en: 'Trademark Scraper',
      'zh-TW': '商標爬蟲機器人',
    },
    category: {
      en: 'Web Scraper',
      'zh-TW': '網路爬蟲',
    },
    description: {
      en: 'A multi-source trademark monitoring system that automatically scrapes trademark applications from four global trademark offices (USPTO, KIPRIS, ISED, EUIPO) using keyword-based searches and sends new registrations to Discord webhooks for real-time notifications.',
      'zh-TW': '一個多源商標監控系統，自動從四個全球商標局（美國專利商標局、韓國、加拿大、歐盟）抓取商標申請資料，並透過關鍵字搜尋和 Discord 通知系統即時報告新的商標註冊。',
    },
  },
  {
    id: 'go-now',
    featured: true,
    year: '2025',
    title: {
      en: 'Go Now',
      'zh-TW': '即刻行',
    },
    category: {
      en: 'Web Application',
      'zh-TW': '網頁應用',
    },
    description: {
      en: 'A modern transportation booking web application that enables users to seamlessly book airport and harbor transportation services through LINE authentication, featuring an intuitive reservation interface and comprehensive admin dashboard for managing bookings.',
      'zh-TW': '一個現代化的運輸預訂網頁應用程式，使用者可透過 LINE 帳號驗證無縫預訂機場和港口運輸服務，並提供直觀的預訂介面和完整的管理員儀表板來管理預訂。',
    },
  },
  {
    id: 'scratchcard-linebot',
    featured: false,
    year: '2025',
    title: {
      en: 'Scratch Card',
      'zh-TW': '刮刮卡',
    },
    category: {
      en: 'Web Application',
      'zh-TW': '網頁應用',
    },
    description: {
      en: 'An interactive web application that enables users to participate in scratch card games integrated with LINE messaging platform, featuring an admin dashboard for managing scratch cards, tracking user results, and analyzing engagement metrics.',
      'zh-TW': '一個互動式網頁應用程式，讓使用者可以透過 LINE 訊息平台參與刮刮卡遊戲，並提供管理員儀表板用於管理刮刮卡、追蹤使用者結果和分析參與度指標。',
    },
  },
  {
    id: 'guagua',
    featured: false,
    year: '2025',
    title: {
      en: 'Artale Event Manager',
      'zh-TW': '楓之谷活動管理機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord bot that streamlines event management for gaming communities, enabling users to create, sign up for, and manage events with role assignments, participant tracking, and automated overview updates.',
      'zh-TW': '一個 Discord 機器人，為遊戲社群簡化活動管理流程，讓使用者能夠建立、報名和管理活動，並支援身份組分配、參與者追蹤和自動化活動總覽更新。',
    },
  },
  {
    id: 'artale-monitor',
    featured: false,
    year: '2025',
    title: {
      en: 'Artale Monitor',
      'zh-TW': 'Artale 監控機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A Discord bot that monitors Artale game broadcasts and intelligently routes messages to designated channels based on customizable keywords and blacklist filters, allowing users to follow specific trading categories or create private channels for personalized notifications.',
      'zh-TW': '一個 Discord 機器人，可監聽 Artale 遊戲廣播並根據自訂關鍵字和黑名單篩選器智能地將訊息路由到指定頻道，讓使用者能夠關注特定交易類別或建立私人頻道以接收個人化通知。',
    },
  },
  {
    id: 'lebi-line-bot',
    featured: false,
    year: '2024',
    title: {
      en: 'Lebi LINE Bot',
      'zh-TW': '樂比 LINE 機器人',
    },
    category: {
      en: 'LINE Bot',
      'zh-TW': 'LINE 機器人',
    },
    description: {
      en: 'A LINE bot that enables users to link multiple game accounts and manage notification settings through LINE Notify integration, providing seamless account management and real-time notifications directly within the messaging platform.',
      'zh-TW': '一個 LINE 機器人，讓使用者能夠連結多個遊戲帳戶並透過 LINE Notify 整合管理通知設定，在訊息平台內提供無縫的帳戶管理和即時通知功能。',
    },
  },
  {
    id: 'lebi-bot',
    featured: false,
    year: '2024',
    title: {
      en: 'Lebi Discord Bot',
      'zh-TW': '樂比 Discord 機器人',
    },
    category: {
      en: 'Discord Bot',
      'zh-TW': 'Discord 機器人',
    },
    description: {
      en: 'A comprehensive Discord bot made for Lebi (Artale private server) featuring gamified community engagement with leveling and economy systems, mini-games (number guessing and rock-paper-scissors), birthday celebrations, and integrated store functionality for in-game item trading. The bot includes administrative tools for server management, user surveys, and real-time server status monitoring.',
      'zh-TW': '一個為樂比仙境（楓之谷 Artale 私服）製作的，功能完整的 Discord 機器人，提供遊戲化的社群互動體驗，包括等級和經濟系統、小遊戲（數字猜謎和剪刀石頭布）、生日慶祝功能，以及整合的商店系統供玩家交易遊戲內物品。機器人還包含伺服器管理工具、使用者問卷調查和即時伺服器狀態監控功能。',
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
