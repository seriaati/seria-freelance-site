export interface Testimonial {
  id: string;
  author: string;
  role: {
    en: string;
    'zh-TW': string;
  };
  body: {
    en: string;
    'zh-TW': string;
  };
  platform?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-3',
    author: '樂比仙境',
    role: {
      en: 'Game Server Owner',
      'zh-TW': '遊戲伺服器經營',
    },
    body: {
      en: "I hired Seria to set up my Discord channels and write a Discord bot. Throughout the collaboration, not only could Seria handle every requirement I mentioned, but he also proactively warned me about potential issues and offered alternative solutions. Working together was very comfortable and extremely professional. The turnaround was incredibly fast - even when something came up, he'd let me know in advance so I had a clear idea of when things would be done. BTW, since I often forget rarely-used Discord commands, Seria's after-sales support is excellent too - he never just disappears after the job is done and will patiently explain things again whenever I ask. Highly recommended!!!",
      'zh-TW': '之前請Seria幫我製作DC頻道建立跟寫DC機器人，合作的過程，對於我說出的需求部分，Seria不只都能辦到，還能提前告知我這樣做可能會遇到什麼麻煩，再提供另一個解法給我，合作起來相當舒服而且非常之專業，完工速度也非常快，即便當天有事也會提前跟我說讓我知道進度大概會在什麼時候完成。BTW，因為不常用的DC指令我常常會忘記，Seria的售後服務也很好，不是架好了就不鳥人，忘記了的東西問他也都會不厭其煩地再告訴我一次，大推!!!',
    },
    platform: 'Discord',
  },
  {
    id: 'testimonial-1',
    author: '米糖',
    role: {
      en: 'Medium Discord Community Owner',
      'zh-TW': '中型 Discord 社群主',
    },
    body: {
      en: "It's amazing! I've wanted my own server for a long time, but since I wanted to make it more fun and couldn't really code, with his help I was finally able to build my own Discord server. Response and setup speed were both very fast, and the price was great too. Highly recommended!!",
      'zh-TW': '超棒的，想要有一個自己的伺服器很久了，因為想增加趣味性，又礙於不太會寫程式，有了他的幫助我才能順利建立起一個屬於自己的Discord 伺服器，回覆與施工速度都很快，費用也很甜，超級推薦！！',
    },
    platform: 'Discord',
  },
  {
    id: 'testimonial-5',
    author: 'N先生',
    role: {
      en: 'League of Legends Community Owner',
      'zh-TW': '英雄聯盟遊戲社群',
    },
    body: {
      en: "I sincerely appreciate Seria for customizing my Discord server! His efficiency and professionalism exceeded my expectations, and what surprised me even more was how excellent the after-sales support was! Whenever I had a small issue or wanted to make adjustments, Seria handled it quickly without any excuses — very responsible. I feel really lucky to have found such a great service provider! Highly recommend Seria to anyone looking to customize their Discord server!",
      'zh-TW': '真心感謝 Seria 幫我客製化了 Discord 群組！他的效率和專業度都讓我非常滿意，而且更讓我驚喜的是，售後服務真的超好！中間我有任何小問題或想調整的地方，Seria 都很快就幫我處理好，完全沒有推託，很有責任感。能遇到這麼棒的服務提供者真的很幸運！強烈推薦 Seria 給所有想客製化 Discord 群組的朋友！',
    },
    platform: 'Discord',
  },
  {
    id: 'testimonial-4',
    author: '傑克',
    role: {
      en: 'Playmate Service Operator',
      'zh-TW': '陪玩服務經營',
    },
    body: {
      en: 'Conscientious bot development, excellent and enthusiastic after-sales service, fair and affordable pricing. Very creative and full of ideas when it comes to Discord setup, and highly accommodating. Definitely worth recommending.',
      'zh-TW': '老闆良心製作機器人 售後服務很棒很熱心 價錢公道實惠對於DC搭建很有創意跟想法 配合度又很高, 值得推薦',
    },
    platform: 'Discord',
  },
  {
    id: 'testimonial-2',
    author: '不要嘻嘻哈哈',
    role: {
      en: 'Small Discord Community Owner',
      'zh-TW': '小型 Discord 社群主',
    },
    body: {
      en: 'Seria made a Discord bot for me. Very easy to communicate with and really understood what I wanted. The final product turned out great. I especially love the tiered management feature.',
      'zh-TW': 'Seria 幫我做了discord的機器人，很好溝通，也很理解我想要的方式，成品非常得棒。我特別喜歡分層管理的功能。',
    },
    platform: 'Discord',
  },
  {
    id: 'testimonial-6',
    author: 'J小姐',
    role: {
      en: 'K-pop Fan Club Owner',
      'zh-TW': '韓國女團粉絲後援團',
    },
    body: {
      en: "Thank you Seria for setting up my server! It saved me from so many tedious steps. After taking over the server, I found that many settings had notes left for me, which I thought was a great touch! Basically I can just use it without thinking — truly grateful. On top of that, his efficiency is great, the discussions throughout the process were clear and easy to understand, and the pricing is very affordable! This was a really wonderful experience overall, and I'll definitely come back if I need anything again 👍",
      'zh-TW': '感謝Seria替我創建伺服器！省去了很多對我來說繁瑣的流程，接手伺服器後很多設定都有幫我備註我也覺得很棒！基本上只要無腦使用就好了真的大感謝，另外他效率很高，過程的討論也有效讓人理解，收費很實惠！這次的消費體驗真的非常好，之後有需要也會再回購👍',
    },
    platform: 'Discord',
  },
  {
    id: 'testimonial-7',
    author: '連先生',
    role: {
      en: 'Game Guild Owner',
      'zh-TW': '遊戲公會群組',
    },
    body: {
      en: "Seria helped me create a game guild server. Throughout the collaboration, every question was answered promptly and the whole process was incredibly efficient. I'm very satisfied with the final result hahaha — I'll definitely come back if I need anything again. I especially love the self-service bot feature, it looks really cool.",
      'zh-TW': 'Seria 老闆幫我創了遊戲公會類型的群組，合作的過成中有問必答，而且特別有效率，成品我相當的滿意哈哈哈，有需要絕對會再找老闆。我特別喜歡那個自助機器人的功能，看起來很有感覺',
    },
    platform: 'Discord',
  },
];

export function getTestimonialField<K extends keyof Testimonial>(
  testimonial: Testimonial,
  key: K,
  locale: string,
): K extends 'role' | 'body' ? string : Testimonial[K] {
  const value = testimonial[key];
  if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'zh-TW' in value)) {
    const localized = value as Record<string, string>;
    return (localized[locale] ?? localized['zh-TW'] ?? '') as never;
  }
  return value as never;
}
