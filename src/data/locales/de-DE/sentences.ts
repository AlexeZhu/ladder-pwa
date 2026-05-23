// src/data/locales/de-DE/sentences.ts
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
  { id: 'd1', text: 'Hallo!', translation: '你好！', difficulty: 'beginner', keywords: ['hallo'], grammarNote: '问候语' },
  { id: 'd2', text: 'Wie geht es dir?', translation: '你好吗？', difficulty: 'beginner', keywords: ['geht'], grammarNote: '询问状态' },
  { id: 'd3', text: 'Mir geht es gut, danke.', translation: '我很好，谢谢。', difficulty: 'beginner', keywords: ['gut'], grammarNote: '回答问候' },
  { id: 'd4', text: 'Wie heißt du?', translation: '你叫什么名字？', difficulty: 'beginner', keywords: ['heißt'], grammarNote: '询问姓名' },
  { id: 'd5', text: 'Ich heiße Anna.', translation: '我叫安娜。', difficulty: 'beginner', keywords: ['heiße'], grammarNote: '自我介绍' },
  { id: 'd6', text: 'Woher kommst du?', translation: '你来自哪里？', difficulty: 'beginner', keywords: ['woher'], grammarNote: '询问国籍' },
  { id: 'd7', text: 'Ich komme aus Deutschland.', translation: '我来自德国。', difficulty: 'beginner', keywords: ['deutschland'], grammarNote: '回答国籍' },
  { id: 'd8', text: 'Wie alt bist du?', translation: '你几岁了？', difficulty: 'beginner', keywords: ['alt'], grammarNote: '询问年龄' },
  { id: 'd9', text: 'Ich bin 20 Jahre alt.', translation: '我20岁。', difficulty: 'beginner', keywords: ['jahre'], grammarNote: '回答年龄' },
  { id: 'd10', text: 'Entschuldigung!', translation: '对不起！', difficulty: 'beginner', keywords: ['entschuldigung'], grammarNote: '道歉' },
  { id: 'd11', text: 'Ja', translation: '是', difficulty: 'beginner', keywords: ['ja'], grammarNote: '肯定回答' },
  { id: 'd12', text: 'Nein', translation: '不是', difficulty: 'beginner', keywords: ['nein'], grammarNote: '否定回答' },
  { id: 'd13', text: 'Ich verstehe nicht.', translation: '我不明白。', difficulty: 'beginner', keywords: ['verstehe'], grammarNote: '表达不理解' },
  
  // 中级
  { id: 'd14', text: 'Was machst du gerne?', translation: '你喜欢做什么？', difficulty: 'intermediate', keywords: ['gerne'], grammarNote: '询问喜好' },
  { id: 'd15', text: 'Ich lese gerne Bücher.', translation: '我喜欢读书。', difficulty: 'intermediate', keywords: ['lese'], grammarNote: '表达喜好' },
  { id: 'd16', text: 'Wo wohnst du?', translation: '你住在哪里？', difficulty: 'intermediate', keywords: ['wohnst'], grammarNote: '询问住处' },
  { id: 'd17', text: 'Ich wohne in Berlin.', translation: '我住在柏林。', difficulty: 'intermediate', keywords: ['wohne'], grammarNote: '回答住处' },
  { id: 'd18', text: 'Wie spät ist es?', translation: '几点了？', difficulty: 'intermediate', keywords: ['spät'], grammarNote: '询问时间' },
  { id: 'd19', text: 'Das Wetter ist heute schön.', translation: '今天天气好。', difficulty: 'intermediate', keywords: ['wetter'], grammarNote: '描述天气' },
  { id: 'd20', text: 'Was machst du am Wochenende?', translation: '你这周末做什么？', difficulty: 'intermediate', keywords: ['wochenende'], grammarNote: '询问计划' },
  { id: 'd21', text: 'Ich gehe ins Kino.', translation: '我去看电影。', difficulty: 'intermediate', keywords: ['kino'], grammarNote: '表达计划' },
  
  // 高级
  { id: 'd22', text: 'Können Sie mir helfen?', translation: '您能帮我吗？', difficulty: 'advanced', keywords: ['helfen'], grammarNote: '礼貌请求' },
  { id: 'd23', text: 'Ich möchte Deutschland besuchen.', translation: '我想访问德国。', difficulty: 'advanced', keywords: ['möchte'], grammarNote: '表达愿望' },
  { id: 'd24', text: 'Guten Appetit!', translation: '请慢用！', difficulty: 'advanced', keywords: ['appetit'], grammarNote: '餐桌用语' },
  { id: 'd25', text: 'Herzlichen Glückwunsch!', translation: '恭喜！', difficulty: 'advanced', keywords: ['glückwunsch'], grammarNote: '祝贺' },
  { id: 'd26', text: 'Es tut mir leid.', translation: '我很抱歉。', difficulty: 'advanced', keywords: ['leid'], grammarNote: '道歉' },
];