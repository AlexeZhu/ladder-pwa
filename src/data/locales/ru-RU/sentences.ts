// src/data/locales/ru-RU/sentences.ts
export interface SentenceItem {
  id: string;
  text: string;
  translation: string;
  audioUrl?: string;
  grammarNote?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  keywords: string[];
}

export const sentenceData: SentenceItem[] = [
  // ========== 初级 ==========
  { id: 'r1', text: 'Здравствуйте!', translation: '您好！', difficulty: 'beginner', keywords: ['здравствуйте'], grammarNote: '正式问候' },
  { id: 'r2', text: 'Привет!', translation: '嗨！', difficulty: 'beginner', keywords: ['привет'], grammarNote: '非正式问候' },
  { id: 'r3', text: 'Как дела?', translation: '最近怎么样？', difficulty: 'beginner', keywords: ['дела'], grammarNote: '问候' },
  { id: 'r4', text: 'Спасибо!', translation: '谢谢！', difficulty: 'beginner', keywords: ['спасибо'], grammarNote: '感谢' },
  { id: 'r5', text: 'Пожалуйста!', translation: '不客气！', difficulty: 'beginner', keywords: ['пожалуйста'], grammarNote: '回应感谢' },
  { id: 'r6', text: 'Извините!', translation: '对不起！', difficulty: 'beginner', keywords: ['извините'], grammarNote: '道歉' },
  { id: 'r7', text: 'Как вас зовут?', translation: '您叫什么名字？', difficulty: 'beginner', keywords: ['зовут'], grammarNote: '询问姓名' },
  { id: 'r8', text: 'Меня зовут Анна.', translation: '我叫安娜。', difficulty: 'beginner', keywords: ['зовут'], grammarNote: '自我介绍' },
  { id: 'r9', text: 'Откуда вы?', translation: '您从哪里来？', difficulty: 'beginner', keywords: ['откуда'], grammarNote: '询问国籍' },
  { id: 'r10', text: 'Я из России.', translation: '我来自俄罗斯。', difficulty: 'beginner', keywords: ['россии'], grammarNote: '回答国籍' },
  { id: 'r11', text: 'Сколько вам лет?', translation: '您多大了？', difficulty: 'beginner', keywords: ['лет'], grammarNote: '询问年龄' },
  { id: 'r12', text: 'Мне 20 лет.', translation: '我20岁。', difficulty: 'beginner', keywords: ['лет'], grammarNote: '回答年龄' },
  { id: 'r13', text: 'Что это?', translation: '这是什么？', difficulty: 'beginner', keywords: ['что'], grammarNote: '疑问句' },
  { id: 'r14', text: 'Это книга.', translation: '这是书。', difficulty: 'beginner', keywords: ['книга'], grammarNote: '回答' },
  { id: 'r15', text: 'Где туалет?', translation: '洗手间在哪里？', difficulty: 'beginner', keywords: ['туалет'], grammarNote: '问路' },
  { id: 'r16', text: 'Я не понимаю.', translation: '我不明白。', difficulty: 'beginner', keywords: ['понимаю'], grammarNote: '表达不理解' },
  
  // ========== 中级 ==========
  { id: 'r17', text: 'Я люблю русский язык.', translation: '我喜欢俄语。', difficulty: 'intermediate', keywords: ['люблю'], grammarNote: '表达喜好' },
  { id: 'r18', text: 'Что вы делаете?', translation: '您在做什么？', difficulty: 'intermediate', keywords: ['делаете'], grammarNote: '现在时' },
  { id: 'r19', text: 'Я учу русский язык.', translation: '我在学习俄语。', difficulty: 'intermediate', keywords: ['учу'], grammarNote: '进行时' },
  { id: 'r20', text: 'Где вы живёте?', translation: '您住在哪里？', difficulty: 'intermediate', keywords: ['живёте'], grammarNote: '询问住处' },
  { id: 'r21', text: 'Сколько это стоит?', translation: '这个多少钱？', difficulty: 'intermediate', keywords: ['стоит'], grammarNote: '询问价格' },
  { id: 'r22', text: 'Который час?', translation: '几点了？', difficulty: 'intermediate', keywords: ['час'], grammarNote: '询问时间' },
  { id: 'r23', text: 'Можно войти?', translation: '可以进来吗？', difficulty: 'intermediate', keywords: ['войти'], grammarNote: '请求许可' },
  { id: 'r24', text: 'Я хочу есть.', translation: '我饿了。', difficulty: 'intermediate', keywords: ['есть'], grammarNote: '表达饥饿' },
  { id: 'r25', text: 'Какая красивая погода!', translation: '天气真好！', difficulty: 'intermediate', keywords: ['погода'], grammarNote: '感叹句' },
  { id: 'r26', text: 'У меня есть вопрос.', translation: '我有一个问题。', difficulty: 'intermediate', keywords: ['вопрос'], grammarNote: '表达' },
  
  // ========== 高级 ==========
  { id: 'r27', text: 'Можно с вами познакомиться?', translation: '可以和您认识一下吗？', difficulty: 'advanced', keywords: ['познакомиться'], grammarNote: '礼貌请求' },
  { id: 'r28', text: 'Вы не подскажете, как пройти?', translation: '您能告诉我去怎么走吗？', difficulty: 'advanced', keywords: ['подскажете'], grammarNote: '问路' },
  { id: 'r29', text: 'Будьте здоровы!', translation: '祝您健康！', difficulty: 'advanced', keywords: ['здоровы'], grammarNote: '祝福语' },
  { id: 'r30', text: 'Всего хорошего!', translation: '祝一切顺利！', difficulty: 'advanced', keywords: ['хорошего'], grammarNote: '道别' },
  { id: 'r31', text: 'Большое спасибо за помощь.', translation: '非常感谢您的帮助。', difficulty: 'advanced', keywords: ['помощь'], grammarNote: '感谢' },
  { id: 'r32', text: 'Извините за беспокойство.', translation: '抱歉打扰了。', difficulty: 'advanced', keywords: ['беспокойство'], grammarNote: '道歉' },
];