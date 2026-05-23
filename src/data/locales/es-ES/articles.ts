// src/data/locales/es-ES/articles.ts
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
    id: 'es1',
    title: 'Mi Familia',
    titleTranslation: '我的家庭',
    level: 'beginner',
    wordCount: 70,
    tags: ['familia', 'vida'],
    content: [
      'Mi familia es pequeña.',
      'Somos cuatro personas: mis padres, mi hermana y yo.',
      'Mi padre se llama Carlos.',
      'Mi madre se llama Ana.',
      'Mi hermana se llama Laura.',
      'Vivimos en una casa cerca del parque.',
      'Me gusta pasar tiempo con mi familia.'
    ],
    contentTranslation: [
      '我的家庭很小。',
      '我们四个人：我的父母、妹妹和我。',
      '我的父亲叫卡洛斯。',
      '我的母亲叫安娜。',
      '我的妹妹叫劳拉。',
      '我们住在公园附近的一所房子里。',
      '我喜欢和家人一起度过时光。'
    ]
  },
  {
    id: 'es2',
    title: 'La Comida Española',
    titleTranslation: '西班牙美食',
    level: 'intermediate',
    wordCount: 110,
    tags: ['comida', 'cultura'],
    content: [
      'La comida española es muy famosa.',
      'La paella es un plato típico de Valencia.',
      'Las tapas son pequeñas porciones de comida.',
      'La tortilla de patatas es muy popular.',
      'El jamón serrano es un producto típico.',
      'Los españoles comen tarde en comparación con otros países.'
    ],
    contentTranslation: [
      '西班牙美食非常有名。',
      '海鲜饭是巴伦西亚的特色菜。',
      '小份菜是一小份食物。',
      '土豆饼非常受欢迎。',
      '塞拉诺火腿是一种特色产品。',
      '西班牙人比其他国家的吃饭时间晚。'
    ]
  }
];