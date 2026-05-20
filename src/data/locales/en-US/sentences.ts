// src/data/locales/en-US/sentences.ts
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
  { id: 's1', text: 'Hello, how are you?', translation: '你好，你好吗？', difficulty: 'beginner', keywords: ['hello', 'how'], grammarNote: '问候语' },
  { id: 's2', text: 'I am fine, thank you.', translation: '我很好，谢谢。', difficulty: 'beginner', keywords: ['fine', 'thank'], grammarNote: '回答问候' },
  { id: 's3', text: 'What is your name?', translation: '你叫什么名字？', difficulty: 'beginner', keywords: ['what', 'name'], grammarNote: '询问姓名' },
  { id: 's4', text: 'My name is Tom.', translation: '我的名字是汤姆。', difficulty: 'beginner', keywords: ['name'], grammarNote: '介绍自己' },
  { id: 's5', text: 'Where are you from?', translation: '你来自哪里？', difficulty: 'beginner', keywords: ['where', 'from'], grammarNote: '询问国籍' },
  { id: 's6', text: 'I am from China.', translation: '我来自中国。', difficulty: 'beginner', keywords: ['from', 'china'], grammarNote: '回答国籍' },
  { id: 's7', text: 'How old are you?', translation: '你多大了？', difficulty: 'beginner', keywords: ['how', 'old'], grammarNote: '询问年龄' },
  { id: 's8', text: 'I am 18 years old.', translation: '我18岁了。', difficulty: 'beginner', keywords: ['years', 'old'], grammarNote: '回答年龄' },
  { id: 's9', text: 'I like to read books in my free time.', translation: '我喜欢在空闲时间读书。', difficulty: 'intermediate', keywords: ['like', 'read', 'free time'], grammarNote: '表达爱好' },
  { id: 's10', text: 'She is a very kind person.', translation: '她是一个非常善良的人。', difficulty: 'intermediate', keywords: ['kind', 'person'], grammarNote: '描述人物' },
  { id: 's11', text: 'We went to the beach yesterday.', translation: '我们昨天去了海滩。', difficulty: 'intermediate', keywords: ['went', 'beach', 'yesterday'], grammarNote: '一般过去时' },
  { id: 's12', text: 'The weather is beautiful today.', translation: '今天天气很好。', difficulty: 'intermediate', keywords: ['weather', 'beautiful'], grammarNote: '描述天气' },
  { id: 's13', text: 'Can you help me with this problem?', translation: '你能帮我解决这个问题吗？', difficulty: 'intermediate', keywords: ['help', 'problem'], grammarNote: '请求帮助' },
  { id: 's14', text: 'I will call you later.', translation: '我晚点打给你。', difficulty: 'intermediate', keywords: ['call', 'later'], grammarNote: '一般将来时' },
  { id: 's15', text: 'Although it was raining, we decided to go for a walk.', translation: '虽然下雨了，我们还是决定去散步。', difficulty: 'advanced', keywords: ['although', 'decided'], grammarNote: '让步状语从句' }
];