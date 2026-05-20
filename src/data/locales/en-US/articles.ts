// src/data/locales/en-US/articles.ts
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
  // ========== 初级范文 ==========
  {
    id: 'en1',
    title: 'My Daily Routine',
    titleTranslation: '我的日常生活',
    level: 'beginner',
    wordCount: 120,
    tags: ['Daily', 'Life'],
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
    id: 'en2',
    title: 'My Family',
    titleTranslation: '我的家庭',
    level: 'beginner',
    wordCount: 95,
    tags: ['Family', 'People'],
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
  {
    id: 'en3',
    title: 'My Hobby',
    titleTranslation: '我的爱好',
    level: 'beginner',
    wordCount: 85,
    tags: ['Hobby', 'Life'],
    content: [
      'My hobby is reading books.',
      'I like to read storybooks and comics.',
      'I usually read before going to bed.',
      'Reading makes me happy and relaxed.',
      'I also like to go to the library.',
      'There are many interesting books there.',
      'My favorite book is "The Little Prince".'
    ],
    contentTranslation: [
      '我的爱好是读书。',
      '我喜欢读故事书和漫画。',
      '我通常睡前读书。',
      '读书让我快乐和放松。',
      '我也喜欢去图书馆。',
      '那里有很多有趣的书。',
      '我最喜欢的书是《小王子》。'
    ]
  },

  // ========== 中级范文 ==========
  {
    id: 'en4',
    title: 'The Benefits of Reading',
    titleTranslation: '阅读的好处',
    level: 'intermediate',
    wordCount: 180,
    tags: ['Education', 'Health'],
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
    id: 'en5',
    title: 'A Memorable Trip',
    titleTranslation: '一次难忘的旅行',
    level: 'intermediate',
    wordCount: 165,
    tags: ['Travel', 'Experience'],
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
  {
    id: 'en6',
    title: 'The Four Seasons',
    titleTranslation: '四季',
    level: 'intermediate',
    wordCount: 150,
    tags: ['Nature', 'Weather'],
    content: [
      'There are four seasons in a year: spring, summer, autumn, and winter.',
      'Spring is the season when flowers bloom and trees turn green.',
      'The weather becomes warmer, and birds start to sing.',
      'Summer is the hottest season. Many people go to the beach.',
      'Children enjoy summer vacation and eat ice cream.',
      'Autumn is my favorite season. The leaves turn beautiful colors.',
      'The weather is cool and perfect for outdoor activities.',
      'Winter is the coldest season. It sometimes snows.',
      'People wear warm clothes and stay indoors.',
      'Each season has its own beauty and activities.'
    ],
    contentTranslation: [
      '一年有四个季节：春、夏、秋、冬。',
      '春天是花儿绽放、树木变绿的季节。',
      '天气变暖，鸟儿开始歌唱。',
      '夏天是最热的季节。很多人去海边。',
      '孩子们享受暑假，吃冰淇淋。',
      '秋天是我最喜欢的季节。树叶变成美丽的颜色。',
      '天气凉爽，非常适合户外活动。',
      '冬天是最冷的季节。有时会下雪。',
      '人们穿上暖和的衣服，待在室内。',
      '每个季节都有它独特的美和活动。'
    ]
  },

  // ========== 高级范文 ==========
  {
    id: 'en7',
    title: 'The Impact of Technology on Society',
    titleTranslation: '科技对社会的影响',
    level: 'advanced',
    wordCount: 245,
    tags: ['Technology', 'Society'],
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
  },
  {
    id: 'en8',
    title: 'Climate Change and Our Responsibility',
    titleTranslation: '气候变化与我们的责任',
    level: 'advanced',
    wordCount: 220,
    tags: ['Environment', 'Society'],
    content: [
      'Climate change is one of the biggest challenges facing humanity.',
      'Global temperatures are rising due to greenhouse gas emissions.',
      'This leads to melting ice caps, rising sea levels, and extreme weather.',
      'Forest fires, floods, and droughts are becoming more common.',
      'Human activities are the main cause of this crisis.',
      'Burning fossil fuels and deforestation contribute to the problem.',
      'We all have a responsibility to take action.',
      'We can reduce our carbon footprint by using public transportation.',
      'Saving energy at home and recycling are also important.',
      'Planting trees helps absorb carbon dioxide from the air.',
      'Governments must also implement policies to protect the environment.',
      'Every small action counts in the fight against climate change.',
      'The future of our planet depends on what we do today.'
    ],
    contentTranslation: [
      '气候变化是人类面临的最大挑战之一。',
      '由于温室气体排放，全球气温正在上升。',
      '这导致冰盖融化、海平面上升和极端天气。',
      '森林火灾、洪水和干旱变得越来越常见。',
      '人类活动是这场危机的主要原因。',
      '燃烧化石燃料和砍伐森林加剧了问题。',
      '我们都有责任采取行动。',
      '通过使用公共交通可以减少碳足迹。',
      '在家里节约能源和回收利用也很重要。',
      '植树有助于吸收空气中的二氧化碳。',
      '政府也必须实施保护环境的政策。',
      '在应对气候变化的斗争中，每一个小行动都很重要。',
      '地球的未来取决于我们今天做什么。'
    ]
  },
  {
    id: 'en9',
    title: 'The Importance of Mental Health',
    titleTranslation: '心理健康的重要性',
    level: 'advanced',
    wordCount: 210,
    tags: ['Health', 'Wellness'],
    content: [
      'Mental health is just as important as physical health.',
      'It affects how we think, feel, and act in daily life.',
      'Good mental health helps us handle stress and relate to others.',
      'Many people suffer from anxiety and depression.',
      'These conditions can affect anyone, regardless of age or background.',
      'Mental illness is often misunderstood and stigmatized.',
      'It is important to talk openly about mental health issues.',
      'Seeking help is a sign of strength, not weakness.',
      'Exercise, good sleep, and healthy eating support mental well-being.',
      'Taking breaks and practicing mindfulness can reduce stress.',
      'Talking to friends or a therapist can also help.',
      'Employers should create supportive work environments.',
      'Schools need to teach students about emotional intelligence.',
      'Together, we can break the stigma around mental health.'
    ],
    contentTranslation: [
      '心理健康和身体健康同样重要。',
      '它影响我们日常生活中的思考、感受和行为方式。',
      '良好的心理健康帮助我们应对压力和与人相处。',
      '许多人患有焦虑和抑郁。',
      '这些状况可能影响任何人，无论年龄或背景。',
      '心理疾病常常被误解和污名化。',
      '公开谈论心理健康问题很重要。',
      '寻求帮助是力量的表现，而不是软弱。',
      '运动、良好睡眠和健康饮食有助于心理健康。',
      '休息和练习正念可以减轻压力。',
      '与朋友或治疗师交谈也有帮助。',
      '雇主应创造支持性的工作环境。',
      '学校需要教育学生关于情商的知识。',
      '我们可以一起打破围绕心理健康的污名。'
    ]
  },
  {
    id: 'en10',
    title: 'The Future of Artificial Intelligence',
    titleTranslation: '人工智能的未来',
    level: 'advanced',
    wordCount: 230,
    tags: ['Technology', 'Future'],
    content: [
      'Artificial intelligence is rapidly changing our world.',
      'AI can now write articles, create art, and drive cars.',
      'It helps doctors diagnose diseases and scientists discover new drugs.',
      'AI makes our lives more convenient in many ways.',
      'Virtual assistants like Siri and Alexa are examples of AI.',
      'However, AI also raises important ethical questions.',
      'Will AI take away jobs from humans?',
      'How can we ensure AI is used for good purposes?',
      'Bias in AI algorithms can lead to unfair decisions.',
      'Privacy is another concern with AI systems that collect data.',
      'Experts believe AI will continue to advance rapidly.',
      'Humans and AI should work together, not compete.',
      'We need laws and guidelines to govern AI development.',
      'The future of AI depends on the choices we make today.'
    ],
    contentTranslation: [
      '人工智能正在迅速改变我们的世界。',
      'AI现在可以写文章、创作艺术、驾驶汽车。',
      '它帮助医生诊断疾病，帮助科学家发现新药。',
      'AI在许多方面让我们的生活更便利。',
      '像Siri和Alexa这样的虚拟助手就是AI的例子。',
      '然而，AI也引发了重要的伦理问题。',
      'AI会夺走人类的工作吗？',
      '我们如何确保AI用于好的目的？',
      'AI算法中的偏见可能导致不公平的决定。',
      '隐私是收集数据的AI系统的另一个担忧。',
      '专家认为AI将继续快速发展。',
      '人类和AI应该合作，而不是竞争。',
      '我们需要法律和准则来规范AI的发展。',
      'AI的未来取决于我们今天所做的选择。'
    ]
  }
];