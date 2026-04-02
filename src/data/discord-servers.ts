export interface DiscordServer {
  id: string;
  memberCount: number;
  icon?: string;
  name: {
    en: string;
    'zh-TW': string;
  };
  purpose: {
    en: string;
    'zh-TW': string;
  };
  tags?: {
    en: string[];
    'zh-TW': string[];
  };
}

export const discordServers: DiscordServer[] = [
  {
    id: 'turtlegame',
    memberCount: 274,
    name: {
      en: 'TurtleGame Community',
      'zh-TW': '烏龜手遊社群',
    },
    purpose: {
      en: 'A gaming community server for TurtleGame mobile players, featuring game channels, events, and giveaways.',
      'zh-TW': '烏龜手遊玩家的遊戲社群伺服器，提供遊戲頻道、活動與抽獎功能。',
    },
    tags: {
      en: ['Giveaway', 'Invite Tracking', 'Reaction Roles'],
      'zh-TW': ['抽獎', '邀請追蹤', '反應身分組'],
    },
  },
  {
    id: 'twice-fans',
    memberCount: 254,
    name: {
      en: 'ONE IN A MILLION',
      'zh-TW': 'ONE IN A MILLION',
    },
    purpose: {
      en: 'A fan community for TWICE supporters in Taiwan.',
      'zh-TW': '台灣 TWICE 粉絲的交流社群。',
    },
  },
  {
    id: 'mt-love',
    memberCount: 469,
    name: {
      en: 'MT Love Community',
      'zh-TW': '初創未來俱樂部',
    },
    purpose: {
      en: 'A playmate service community server, providing a platform for playmate service operators and customers to connect, share information, and receive support.',
      'zh-TW': '初創未來俱樂部，提供一個平台讓陪玩服務業者和客戶能夠連接、分享資訊並獲得支援。',
    },
    tags: {
      en: ['Member Verification', 'Dynamic Voice Channels', "Ticketing System"],
      'zh-TW': ['會員驗證', '動態語音頻道', '工單系統'],
    },
  },
  {
    id: 'binot',
    memberCount: 30,
    name: {
      en: 'Binot Community',
      'zh-TW': '比諾特的伺服器',
    },
    purpose: {
      en: 'A community server for Binot, a VTuber and content creator.',
      'zh-TW': '比諾特的社群伺服器，一位 VTuber 和內容創作者。',
    },
    tags: {
      en: ['Music'],
      'zh-TW': ['音樂'],
    },
  },
  {
    id: 's7en',
    memberCount: 350,
    name: {
      en: 'S7en Community',
      'zh-TW': 'S7EN浮生館',
    },
    purpose: {
      en: 'Gaming community server for a Jade Dynasty World guild.',
      'zh-TW': '誅仙世界遊戲公會群。',
    },
    tags: {
      en: ['Giveaway', 'Music', 'Reaction Roles'],
      'zh-TW': ['抽獎', '音樂', '反應身分組'],
    },
  },
  {
    id: 'half-sugar',
    memberCount: 55,
    name: {
      en: 'Half Sugar Community',
      'zh-TW': '半糖去冰',
    },
    purpose: {
      en: 'League of Legends community server.',
      'zh-TW': '英雄聯盟遊戲社群。',
    },
    tags: {
      en: ['Music', 'Leveling System', 'League of Legends Tracker'],
      'zh-TW': ['音樂', '經驗值系統', '英雄聯盟追蹤器'],
    },
  },
  {
    id: 'trick-or-treat',
    memberCount: 55,
    name: {
      en: 'Trick or Treat Community',
      'zh-TW': '不給糖就搗蛋',
    },
    purpose: {
      en: 'Personal community server.',
      'zh-TW': '個人社群伺服器。',
    },
    tags: {
      en: ['Music', 'Leveling System'],
      'zh-TW': ['音樂', '經驗值系統'],
    },
  },
  {
    id: 'stars',
    memberCount: 46,
    name: {
      en: 'Stars Community',
      'zh-TW': '星落旅團',
    },
    purpose: {
      en: 'Guild community server.',
      'zh-TW': '公會社群伺服器。',
    },
    tags: {
      en: ['Music', 'Dynamic Voice Channels'],
      'zh-TW': ['音樂', '動態語音頻道'],
    },
  },
  {
    id: 'butter',
    memberCount: 261,
    name: {
      en: 'Butter Community',
      'zh-TW': '奶油糖的龍窩',
    },
    purpose: {
      en: 'Personal community server.',
      'zh-TW': '個人社群伺服器。',
    },
    tags: {
      en: ['Music', 'Leveling System'],
      'zh-TW': ['音樂', '經驗值系統'],
    },
  },
  {
    id: 'lloyds-broker',
    memberCount: 300,
    name: {
      en: 'Lloyds Broker',
      'zh-TW': '諾億保經',
    },
    purpose: {
      en: 'Company internal server.',
      'zh-TW': '公司內部伺服器。',
    },
  },
  {
    id: 'realm-fantasy',
    memberCount: 45,
    name: {
      en: 'Realm Fantasy',
      'zh-TW': '仙境幻想',
    },
    purpose: {
      en: 'Gaming community server.',
      'zh-TW': '遊戲社群伺服器。',
    },
    tags: {
      en: ['Music', 'Giveaway'],
      'zh-TW': ['音樂', '抽獎'],
    },
  },
  {
    id: 'dmt-trading-club',
    memberCount: 322,
    name: {
      en: 'DMT Trading Club',
      'zh-TW': 'DMT 交易俱樂部',
    },
    purpose: {
      en: 'Cryptocurrency trading community server.',
      'zh-TW': '加密貨幣交易社群伺服器。',
    },
  },
  {
    id: 'ac-shop',
    memberCount: 439,
    name: {
      en: 'AC Shop',
      'zh-TW': 'AC 商店',
    },
    purpose: {
      en: 'PUBG top-up service community server.',
      'zh-TW': 'PUBG 第三方儲值服務社群伺服器。',
    },
  },
  {
    id: 'soj-guild',
    memberCount: 51,
    name: {
      en: 'Guild Community',
      'zh-TW': '公會社群',
    },
    purpose: {
      en: 'Guild community server for Sword of Justice game.',
      'zh-TW': '逆水寒遊戲公會社群伺服器。',
    },
  },
  {
    id: 'hope',
    memberCount: 106,
    name: {
      en: 'Hope',
      'zh-TW': '狂人希望',
    },
    purpose: {
      en: 'Personal community server.',
      'zh-TW': '個人社群伺服器。',
    },
    tags: {
      en: ['Welcoming System'],
      'zh-TW': ['歡迎系統'],
    },
  },
  {
    id: 'heaven',
    memberCount: 204,
    name: {
      en: 'Lineage: Classic',
      'zh-TW': '天堂：經典服',
    },
    purpose: {
      en: 'Gaming community server for Lineage: Classic.',
      'zh-TW': '天堂：經典服遊戲社群伺服器。',
    },
    tags: {
      en: ['Welcoming System', 'Reaction Roles'],
      'zh-TW': ['歡迎系統', '反應身分組'],
    },
  },
];

export function getServerField<K extends keyof DiscordServer>(
  server: DiscordServer,
  key: K,
  locale: string,
): K extends 'name' | 'purpose' ? string : K extends 'tags' ? string[] : DiscordServer[K] {
  const value = server[key];
  if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'zh-TW' in value)) {
    const localized = value as Record<string, string | string[]>;
    return (localized[locale] ?? localized['zh-TW'] ?? '') as never;
  }
  return value as never;
}

export function formatMemberCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}k`;
  }
  return count.toLocaleString();
}
