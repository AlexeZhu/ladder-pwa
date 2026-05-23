// src/data/locales/fr-FR/articles.ts
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
    id: 'fr1',
    title: 'Ma Famille',
    titleTranslation: '我的家庭',
    level: 'beginner',
    wordCount: 75,
    tags: ['famille', 'vie'],
    content: [
      'Ma famille est petite.',
      'Nous sommes quatre personnes.',
      'Mon père s\'appelle Pierre.',
      'Ma mère s\'appelle Sophie.',
      'J\'ai une petite soeur.',
      'Nous habitons dans une maison.',
      'J\'aime beaucoup ma famille.'
    ],
    contentTranslation: [
      '我的家庭很小。',
      '我们四个人。',
      '我的父亲叫皮埃尔。',
      '我的母亲叫苏菲。',
      '我有一个妹妹。',
      '我们住在一所房子里。',
      '我非常爱我的家人。'
    ]
  },
  {
    id: 'fr2',
    title: 'La Cuisine Française',
    titleTranslation: '法国美食',
    level: 'intermediate',
    wordCount: 120,
    tags: ['cuisine', 'culture'],
    content: [
      'La cuisine française est très réputée.',
      'Le croissant est célèbre dans le monde entier.',
      'La baguette est le pain traditionnel français.',
      'Le fromage français a de nombreuses variétés.',
      'Le vin français est aussi très connu.',
      'Les Français prennent leur repas lentement.',
      'Ils aiment partager des moments autour de la table.'
    ],
    contentTranslation: [
      '法国美食非常有名。',
      '羊角面包闻名全世界。',
      '法棍面包是法国的传统面包。',
      '法国奶酪有很多种类。',
      '法国葡萄酒也很有名。',
      '法国人吃饭很慢。',
      '他们喜欢在餐桌旁分享时光。'
    ]
  },
  {
    id: 'fr3',
    title: 'Paris, la Ville Lumière',
    titleTranslation: '巴黎，光之城',
    level: 'advanced',
    wordCount: 150,
    tags: ['voyage', 'ville'],
    content: [
      'Paris est la capitale de la France.',
      'On l\'appelle la Ville Lumière.',
      'La Tour Eiffel est le monument le plus célèbre.',
      'Le Louvre est le plus grand musée du monde.',
      'La Seine traverse la ville.',
      'Les Champs-Élysées est la plus belle avenue.',
      'Paris est une ville romantique.',
      'Chaque année, des millions de touristes visitent Paris.'
    ],
    contentTranslation: [
      '巴黎是法国的首都。',
      '人们称它为光之城。',
      '埃菲尔铁塔是最著名的纪念碑。',
      '卢浮宫是世界上最大的博物馆。',
      '塞纳河穿过城市。',
      '香榭丽舍大街是最美丽的大道。',
      '巴黎是一个浪漫的城市。',
      '每年有数百万游客访问巴黎。'
    ]
  }
];