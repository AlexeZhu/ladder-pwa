// src/data/locales/fr-FR/sentences.ts
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
  // 初级
  { id: 'f1', text: 'Bonjour!', translation: '你好！', difficulty: 'beginner', keywords: ['bonjour'], grammarNote: '问候语' },
  { id: 'f2', text: 'Comment ça va?', translation: '你好吗？', difficulty: 'beginner', keywords: ['comment'], grammarNote: '询问状态' },
  { id: 'f3', text: 'Ça va bien, merci.', translation: '我很好，谢谢。', difficulty: 'beginner', keywords: ['bien'], grammarNote: '回答问候' },
  { id: 'f4', text: 'Comment tu t\'appelles?', translation: '你叫什么名字？', difficulty: 'beginner', keywords: ['appelles'], grammarNote: '询问姓名' },
  { id: 'f5', text: 'Je m\'appelle Marie.', translation: '我叫玛丽。', difficulty: 'beginner', keywords: ['appelle'], grammarNote: '自我介绍' },
  { id: 'f6', text: 'D\'où viens-tu?', translation: '你来自哪里？', difficulty: 'beginner', keywords: ['viens'], grammarNote: '询问国籍' },
  { id: 'f7', text: 'Je viens de France.', translation: '我来自法国。', difficulty: 'beginner', keywords: ['france'], grammarNote: '回答国籍' },
  { id: 'f8', text: 'Quel âge as-tu?', translation: '你几岁了？', difficulty: 'beginner', keywords: ['âge'], grammarNote: '询问年龄' },
  { id: 'f9', text: 'J\'ai vingt ans.', translation: '我二十岁。', difficulty: 'beginner', keywords: ['vingt'], grammarNote: '回答年龄' },
  { id: 'f10', text: 'Pardon.', translation: '对不起。', difficulty: 'beginner', keywords: ['pardon'], grammarNote: '道歉' },
  { id: 'f11', text: 'S\'il vous plaît.', translation: '请。', difficulty: 'beginner', keywords: ['plaît'], grammarNote: '礼貌用语' },
  { id: 'f12', text: 'Oui', translation: '是', difficulty: 'beginner', keywords: ['oui'], grammarNote: '肯定回答' },
  { id: 'f13', text: 'Non', translation: '不是', difficulty: 'beginner', keywords: ['non'], grammarNote: '否定回答' },
  { id: 'f14', text: 'Je ne comprends pas.', translation: '我不明白。', difficulty: 'beginner', keywords: ['comprends'], grammarNote: '表达不理解' },
  { id: 'f15', text: 'Parlez-vous anglais?', translation: '您会说英语吗？', difficulty: 'beginner', keywords: ['anglais'], grammarNote: '询问语言' },
  
  // 中级
  { id: 'f16', text: 'Qu\'est-ce que tu aimes faire?', translation: '你喜欢做什么？', difficulty: 'intermediate', keywords: ['aimes'], grammarNote: '询问喜好' },
  { id: 'f17', text: 'J\'aime lire des livres.', translation: '我喜欢读书。', difficulty: 'intermediate', keywords: ['aime'], grammarNote: '表达喜好' },
  { id: 'f18', text: 'Où habites-tu?', translation: '你住在哪里？', difficulty: 'intermediate', keywords: ['habites'], grammarNote: '询问住处' },
  { id: 'f19', text: 'J\'habite à Paris.', translation: '我住在巴黎。', difficulty: 'intermediate', keywords: ['habite'], grammarNote: '回答住处' },
  { id: 'f20', text: 'Quelle heure est-il?', translation: '几点了？', difficulty: 'intermediate', keywords: ['heure'], grammarNote: '询问时间' },
  { id: 'f21', text: 'Il fait beau aujourd\'hui.', translation: '今天天气好。', difficulty: 'intermediate', keywords: ['beau'], grammarNote: '描述天气' },
  { id: 'f22', text: 'Que fais-tu ce week-end?', translation: '你这周末做什么？', difficulty: 'intermediate', keywords: ['week-end'], grammarNote: '询问计划' },
  { id: 'f23', text: 'Je vais au cinéma.', translation: '我去看电影。', difficulty: 'intermediate', keywords: ['cinéma'], grammarNote: '表达计划' },
  
  // 高级
  { id: 'f24', text: 'Pourriez-vous m\'aider?', translation: '您能帮我吗？', difficulty: 'advanced', keywords: ['aider'], grammarNote: '礼貌请求' },
  { id: 'f25', text: 'Je voudrais visiter la France.', translation: '我想访问法国。', difficulty: 'advanced', keywords: ['voudrais'], grammarNote: '表达愿望' },
  { id: 'f26', text: 'Bon appétit!', translation: '请慢用！', difficulty: 'advanced', keywords: ['appétit'], grammarNote: '餐桌用语' },
  { id: 'f27', text: 'Félicitations!', translation: '恭喜！', difficulty: 'advanced', keywords: ['félicitations'], grammarNote: '祝贺' },
  { id: 'f28', text: 'Je vous en prie.', translation: '不客气。', difficulty: 'advanced', keywords: ['prie'], grammarNote: '回应感谢' },
];