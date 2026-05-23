// src/data/locales/de-DE/articles.ts
export interface ArticleItem {
  id: string;
  title: string;
  titleTranslation: string;
  content: string[];
  contentTranslation: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  wordCount: number;
  tags: string[];
}

export const articleData: ArticleItem[] = [
  {
    id: 'de1',
    title: 'Meine Familie',
    titleTranslation: '我的家庭',
    level: 'beginner',
    wordCount: 70,
    tags: ['familie', 'leben'],
    content: [
      'Meine Familie ist klein.',
      'Wir sind vier Personen.',
      'Mein Vater heißt Thomas.',
      'Meine Mutter heißt Lisa.',
      'Ich habe eine kleine Schwester.',
      'Wir wohnen in einem Haus.',
      'Ich liebe meine Familie sehr.'
    ],
    contentTranslation: [
      '我的家庭很小。',
      '我们四个人。',
      '我的父亲叫托马斯。',
      '我的母亲叫莉萨。',
      '我有一个妹妹。',
      '我们住在一所房子里。',
      '我非常爱我的家人。'
    ]
  },
  {
    id: 'de2',
    title: 'Die Deutsche Küche',
    titleTranslation: '德国美食',
    level: 'intermediate',
    wordCount: 110,
    tags: ['küche', 'kultur'],
    content: [
      'Die deutsche Küche ist sehr vielfältig.',
      'Bratwurst ist eine berühmte Wurst.',
      'Sauerkraut wird oft mit Wurst gegessen.',
      'Brot ist sehr wichtig in Deutschland.',
      'Es gibt viele verschiedene Brotsorten.',
      'Deutsches Bier ist weltweit bekannt.',
      'Die Deutschen lieben ihr Bier.'
    ],
    contentTranslation: [
      '德国美食非常多样。',
      '烤香肠是一种著名的香肠。',
      '酸菜经常和香肠一起吃。',
      '面包在德国非常重要。',
      '有很多种不同的面包。',
      '德国啤酒世界闻名。',
      '德国人喜欢他们的啤酒。'
    ]
  },
  {
    id: 'de3',
    title: 'Berlin, die Hauptstadt',
    titleTranslation: '柏林，首都',
    level: 'advanced',
    wordCount: 140,
    tags: ['reise', 'stadt'],
    content: [
      'Berlin ist die Hauptstadt Deutschlands.',
      'Die Stadt ist sehr groß und lebendig.',
      'Das Brandenburger Tor ist das bekannteste Wahrzeichen.',
      'Die Berliner Mauer ist ein wichtiges historisches Denkmal.',
      'Berlin hat viele Museen und Theater.',
      'Die Stadt ist auch für ihr Nachtleben bekannt.',
      'Jedes Jahr besuchen Millionen Touristen Berlin.'
    ],
    contentTranslation: [
      '柏林是德国的首都。',
      '这座城市非常大且充满活力。',
      '勃兰登堡门是最著名的地标。',
      '柏林墙是一个重要的历史纪念碑。',
      '柏林有很多博物馆和剧院。',
      '这座城市也以夜生活闻名。',
      '每年有数百万游客访问柏林。'
    ]
  }
];