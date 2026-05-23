// src/data/locales/es-ES/sentences.ts
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
  { id: 'e1', text: '¡Hola!', translation: '你好！', difficulty: 'beginner', keywords: ['hola'], grammarNote: '问候语' },
  { id: 'e2', text: '¿Cómo estás?', translation: '你好吗？', difficulty: 'beginner', keywords: ['cómo'], grammarNote: '询问状态' },
  { id: 'e3', text: 'Estoy bien, gracias.', translation: '我很好，谢谢。', difficulty: 'beginner', keywords: ['bien'], grammarNote: '回答问候' },
  { id: 'e4', text: '¿Cómo te llamas?', translation: '你叫什么名字？', difficulty: 'beginner', keywords: ['llamas'], grammarNote: '询问姓名' },
  { id: 'e5', text: 'Me llamo María.', translation: '我叫玛丽亚。', difficulty: 'beginner', keywords: ['llamo'], grammarNote: '自我介绍' },
  { id: 'e6', text: '¿De dónde eres?', translation: '你来自哪里？', difficulty: 'beginner', keywords: ['dónde'], grammarNote: '询问国籍' },
  { id: 'e7', text: 'Soy de España.', translation: '我来自西班牙。', difficulty: 'beginner', keywords: ['españa'], grammarNote: '回答国籍' },
  { id: 'e8', text: '¿Cuántos años tienes?', translation: '你几岁了？', difficulty: 'beginner', keywords: ['años'], grammarNote: '询问年龄' },
  { id: 'e9', text: 'Tengo 20 años.', translation: '我20岁。', difficulty: 'beginner', keywords: ['tengo'], grammarNote: '回答年龄' },
  { id: 'e10', text: 'Lo siento.', translation: '对不起。', difficulty: 'beginner', keywords: ['siento'], grammarNote: '道歉' },
  
  // 中级
  { id: 'e11', text: '¿Qué te gusta hacer?', translation: '你喜欢做什么？', difficulty: 'intermediate', keywords: ['gusta'], grammarNote: '询问喜好' },
  { id: 'e12', text: 'Me gusta leer libros.', translation: '我喜欢读书。', difficulty: 'intermediate', keywords: ['gusta'], grammarNote: '表达喜好' },
  { id: 'e13', text: '¿Dónde vives?', translation: '你住在哪里？', difficulty: 'intermediate', keywords: ['vives'], grammarNote: '询问住处' },
  { id: 'e14', text: 'Vivo en Madrid.', translation: '我住在马德里。', difficulty: 'intermediate', keywords: ['vivo'], grammarNote: '回答住处' },
  { id: 'e15', text: '¿Qué hora es?', translation: '几点了？', difficulty: 'intermediate', keywords: ['hora'], grammarNote: '询问时间' },
  { id: 'e16', text: 'Hoy hace buen tiempo.', translation: '今天天气好。', difficulty: 'intermediate', keywords: ['tiempo'], grammarNote: '描述天气' },
  { id: 'e17', text: '¡Qué bonito!', translation: '真漂亮！', difficulty: 'intermediate', keywords: ['bonito'], grammarNote: '感叹句' },
  
  // 高级
  { id: 'e18', text: '¿Podría ayudarme?', translation: '您能帮我吗？', difficulty: 'advanced', keywords: ['ayudarme'], grammarNote: '礼貌请求' },
  { id: 'e19', text: 'Me encantaría visitar España.', translation: '我很想访问西班牙。', difficulty: 'advanced', keywords: ['encantaría'], grammarNote: '表达愿望' },
  { id: 'e20', text: '¡Buen provecho!', translation: '请慢用！', difficulty: 'advanced', keywords: ['provecho'], grammarNote: '餐桌用语' },
];