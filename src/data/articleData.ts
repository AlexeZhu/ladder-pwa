// src/data/articleData.ts
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
  // 初级范文
  {
    id: 'a1',
    title: 'My Daily Routine',
    titleTranslation: '我的日常生活',
    level: 'beginner',
    wordCount: 120,
    tags: ['生活', '日常'],
    content: [
      'I wake up at 7 o\'clock every morning.',
      'First, I brush my teeth and wash my face.',
      'Then, I eat breakfast with my family.',
      'After breakfast, I go to school by bus.',
      'I have lunch at school at 12 o\'clock.',
      'In the afternoon, I play with my friends.',
      'I go home at 5 o\'clock.',
      'I do my homework after dinner.',
      'I go to bed at 10 o\'clock.'
    ],
    contentTranslation: [
      '我每天早上7点起床。',
      '首先，我刷牙洗脸。',
      '然后，我和家人一起吃早餐。',
      '早餐后，我坐公交车去上学。',
      '我中午12点在学校吃午餐。',
      '下午，我和朋友们一起玩。',
      '我5点回家。',
      '晚饭后我做作业。',
      '我10点上床睡觉。'
    ]
  },
  {
    id: 'a2',
    title: 'My Family',
    titleTranslation: '我的家庭',
    level: 'beginner',
    wordCount: 95,
    tags: ['家庭', '人物'],
    content: [
      'There are four people in my family.',
      'They are my father, my mother, my sister and me.',
      'My father is a doctor. He works in a hospital.',
      'My mother is a teacher. She teaches English.',
      'My sister is a student. She is 15 years old.',
      'I love my family very much.',
      'We often watch TV together in the evening.',
      'On weekends, we go to the park.'
    ],
    contentTranslation: [
      '我家有四口人。',
      '他们是我的父亲、母亲、姐姐和我。',
      '我的父亲是一名医生。他在医院工作。',
      '我的母亲是一名老师。她教英语。',
      '我的姐姐是一名学生。她15岁了。',
      '我非常爱我的家人。',
      '我们晚上经常一起看电视。',
      '周末我们去公园。'
    ]
  },
  
  // 中级范文
  {
    id: 'a3',
    title: 'The Benefits of Reading',
    titleTranslation: '阅读的好处',
    level: 'intermediate',
    wordCount: 180,
    tags: ['教育', '健康'],
    content: [
      'Reading is one of the best habits you can develop.',
      'First of all, reading helps you learn new things.',
      'You can gain knowledge about different topics.',
      'Secondly, reading improves your vocabulary and writing skills.',
      'You learn new words and how to use them correctly.',
      'Thirdly, reading reduces stress and helps you relax.',
      'When you read a good book, you forget your problems.',
      'Finally, reading improves your focus and concentration.',
      'In our modern world, people have short attention spans.',
      'Reading a book requires you to focus for a long time.',
      'I recommend reading at least 30 minutes every day.'
    ],
    contentTranslation: [
      '阅读是你能养成的最好习惯之一。',
      '首先，阅读帮助你学习新事物。',
      '你可以获得关于不同主题的知识。',
      '其次，阅读能提高你的词汇量和写作能力。',
      '你学习新单词以及如何正确使用它们。',
      '第三，阅读能减轻压力，帮助你放松。',
      '当你读一本好书时，你会忘记你的烦恼。',
      '最后，阅读能提高你的注意力和专注力。',
      '在现代社会，人们的注意力持续时间很短。',
      '读一本书需要你长时间保持专注。',
      '我建议每天至少阅读30分钟。'
    ]
  },
  {
    id: 'a4',
    title: 'A Memorable Trip',
    titleTranslation: '一次难忘的旅行',
    level: 'intermediate',
    wordCount: 165,
    tags: ['旅行', '经历'],
    content: [
      'Last summer, I went to Beijing with my parents.',
      'It was my first time visiting the capital city.',
      'We stayed there for five days.',
      'On the first day, we visited the Great Wall.',
      'It was amazing to see such a huge structure.',
      'The next day, we went to the Forbidden City.',
      'I learned a lot about Chinese history there.',
      'We also tried many local foods.',
      'Beijing duck was my favorite.',
      'The trip was both educational and fun.',
      'I hope to visit Beijing again in the future.'
    ],
    contentTranslation: [
      '去年夏天，我和父母一起去了北京。',
      '那是我第一次参观首都。',
      '我们在那里待了五天。',
      '第一天，我们参观了长城。',
      '看到如此巨大的建筑真是太棒了。',
      '第二天，我们去了故宫。',
      '我在那里学到了很多关于中国历史的知识。',
      '我们还品尝了许多当地美食。',
      '北京烤鸭是我的最爱。',
      '这次旅行既有教育意义又有趣。',
      '我希望将来能再次访问北京。'
    ]
  },
  
  // 高级范文
  {
    id: 'a5',
    title: 'The Impact of Technology on Society',
    titleTranslation: '科技对社会的影响',
    level: 'advanced',
    wordCount: 245,
    tags: ['科技', '社会'],
    content: [
      'Technology has transformed the way we live, work, and communicate.',
      'On the positive side, it has made information accessible to everyone.',
      'We can learn anything we want with just a few clicks.',
      'Communication has become faster and easier than ever before.',
      'People can connect with others from all around the world.',
      'However, technology also has negative effects.',
      'Many people spend too much time on their phones.',
      'This can lead to less face-to-face interaction.',
      'Another concern is privacy and data security.',
      'Our personal information is collected and used by companies.',
      'Despite these problems, technology continues to advance.',
      'The key is to use technology wisely and responsibly.',
      'We should balance our online and offline lives.',
      'Technology is a tool, not a master.'
    ],
    contentTranslation: [
      '科技已经改变了我们生活、工作和交流的方式。',
      '从积极方面看，它使信息对每个人都变得可获取。',
      '只需点击几下，我们就能学到任何想学的东西。',
      '交流变得比以往任何时候都更快、更容易。',
      '人们可以和来自世界各地的人联系。',
      '然而，科技也有负面影响。',
      '很多人花太多时间在手机上。',
      '这可能导致面对面的交流减少。',
      '另一个担忧是隐私和数据安全。',
      '我们的个人信息被公司收集和使用。',
      '尽管存在这些问题，科技仍在不断进步。',
      '关键在于明智和负责任地使用科技。',
      '我们应该平衡线上和线下的生活。',
      '科技是工具，不是主人。'
    ]
  }
];