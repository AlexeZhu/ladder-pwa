// src/data/locales/es-ES/words.ts
export interface WordItem {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  partOfSpeech: string;
  exampleSentence: string;
  exampleTranslation: string;
  imageUrl?: string;
  group: string;
}

export const wordGroups = [
  { id: 'greetings', name: '👋 Saludos', icon: '👋', color: '#FF6B6B' },
  { id: 'numbers', name: '🔢 Números', icon: '1️⃣', color: '#4ECDC4' },
  { id: 'family', name: '👨‍👩‍👧 Familia', icon: '👪', color: '#45B7D1' },
  { id: 'food', name: '🍜 Comida', icon: '🍚', color: '#96CEB4' },
  { id: 'daily', name: '📅 Diario', icon: '☀️', color: '#FFEAA7' },
  { id: 'colors', name: '🎨 Colores', icon: '🌈', color: '#DFE6E9' },
];

export const wordData: WordItem[] = [
  // 问候
  { id: 'hola', word: 'Hola', translation: '你好', pronunciation: 'ola', partOfSpeech: '问候', exampleSentence: '¡Hola! ¿Cómo estás?', exampleTranslation: '你好！你好吗？', group: 'greetings' },
  { id: 'gracias', word: 'Gracias', translation: '谢谢', pronunciation: 'grasias', partOfSpeech: '问候', exampleSentence: 'Muchas gracias por tu ayuda.', exampleTranslation: '非常感谢你的帮助。', group: 'greetings' },
  { id: 'adios', word: 'Adiós', translation: '再见', pronunciation: 'adios', partOfSpeech: '问候', exampleSentence: 'Adiós, hasta mañana.', exampleTranslation: '再见，明天见。', group: 'greetings' },
  { id: 'buenos_dias', word: 'Buenos días', translation: '早上好', pronunciation: 'buenos dias', partOfSpeech: '问候', exampleSentence: 'Buenos días, ¿cómo durmió?', exampleTranslation: '早上好，睡得好吗？', group: 'greetings' },
  { id: 'buenas_noches', word: 'Buenas noches', translation: '晚上好/晚安', pronunciation: 'buenas noches', partOfSpeech: '问候', exampleSentence: 'Buenas noches, que duerma bien.', exampleTranslation: '晚安，祝你好眠。', group: 'greetings' },
  
  // 数字
  { id: 'uno', word: 'uno', translation: '一', pronunciation: 'uno', partOfSpeech: '数词', exampleSentence: 'Uno, dos, tres', exampleTranslation: '一、二、三', group: 'numbers' },
  { id: 'dos', word: 'dos', translation: '二', pronunciation: 'dos', partOfSpeech: '数词', exampleSentence: 'Dos personas', exampleTranslation: '两个人', group: 'numbers' },
  { id: 'tres', word: 'tres', translation: '三', pronunciation: 'tres', partOfSpeech: '数词', exampleSentence: 'Tres días', exampleTranslation: '三天', group: 'numbers' },
  { id: 'cuatro', word: 'cuatro', translation: '四', pronunciation: 'kuatro', partOfSpeech: '数词', exampleSentence: 'Cuatro estaciones', exampleTranslation: '四季', group: 'numbers' },
  { id: 'cinco', word: 'cinco', translation: '五', pronunciation: 'sinko', partOfSpeech: '数词', exampleSentence: 'Cinco minutos', exampleTranslation: '五分钟', group: 'numbers' },
  
  // 家庭
  { id: 'madre', word: 'madre', translation: '母亲', pronunciation: 'madre', partOfSpeech: '名词', exampleSentence: 'Mi madre es muy cariñosa.', exampleTranslation: '我的母亲很慈爱。', group: 'family' },
  { id: 'padre', word: 'padre', translation: '父亲', pronunciation: 'padre', partOfSpeech: '名词', exampleSentence: 'Mi padre trabaja mucho.', exampleTranslation: '我的父亲工作很努力。', group: 'family' },
  { id: 'hermano', word: 'hermano', translation: '兄弟', pronunciation: 'ermano', partOfSpeech: '名词', exampleSentence: 'Tengo un hermano mayor.', exampleTranslation: '我有一个哥哥。', group: 'family' },
  { id: 'hermana', word: 'hermana', translation: '姐妹', pronunciation: 'ermana', partOfSpeech: '名词', exampleSentence: 'Mi hermana es estudiante.', exampleTranslation: '我的姐妹是学生。', group: 'family' },
  
  // 食物
  { id: 'pan', word: 'pan', translation: '面包', pronunciation: 'pan', partOfSpeech: '名词', exampleSentence: 'Como pan cada día.', exampleTranslation: '我每天吃面包。', group: 'food' },
  { id: 'agua', word: 'agua', translation: '水', pronunciation: 'agua', partOfSpeech: '名词', exampleSentence: 'Bebo agua fría.', exampleTranslation: '我喝冷水。', group: 'food' },
  { id: 'paella', word: 'paella', translation: '海鲜饭', pronunciation: 'paeya', partOfSpeech: '名词', exampleSentence: 'La paella es típica de Valencia.', exampleTranslation: '海鲜饭是巴伦西亚的特色。', group: 'food' },
  { id: 'tapas', word: 'tapas', translation: '西班牙小吃', pronunciation: 'tapas', partOfSpeech: '名词', exampleSentence: 'Me gustan las tapas.', exampleTranslation: '我喜欢西班牙小吃。', group: 'food' },
  
  // 日常动词
  { id: 'ir', word: 'ir', translation: '去', pronunciation: 'ir', partOfSpeech: '动词', exampleSentence: 'Voy a la escuela.', exampleTranslation: '我去学校。', group: 'daily' },
  { id: 'comer', word: 'comer', translation: '吃', pronunciation: 'komer', partOfSpeech: '动词', exampleSentence: 'Como manzanas.', exampleTranslation: '我吃苹果。', group: 'daily' },
  { id: 'beber', word: 'beber', translation: '喝', pronunciation: 'bever', partOfSpeech: '动词', exampleSentence: 'Bebo agua.', exampleTranslation: '我喝水。', group: 'daily' },
  { id: 'hablar', word: 'hablar', translation: '说', pronunciation: 'ablar', partOfSpeech: '动词', exampleSentence: 'Hablo español.', exampleTranslation: '我说西班牙语。', group: 'daily' },
  
  // 颜色
  { id: 'rojo', word: 'rojo', translation: '红色', pronunciation: 'rojo', partOfSpeech: '形容词', exampleSentence: 'Manzana roja', exampleTranslation: '红苹果', group: 'colors' },
  { id: 'azul', word: 'azul', translation: '蓝色', pronunciation: 'asul', partOfSpeech: '形容词', exampleSentence: 'Cielo azul', exampleTranslation: '蓝色的天空', group: 'colors' },
  { id: 'amarillo', word: 'amarillo', translation: '黄色', pronunciation: 'amarillo', partOfSpeech: '形容词', exampleSentence: 'Flor amarilla', exampleTranslation: '黄色的花', group: 'colors' },
  { id: 'verde', word: 'verde', translation: '绿色', pronunciation: 'verde', partOfSpeech: '形容词', exampleSentence: 'Pastos verdes', exampleTranslation: '绿草', group: 'colors' },
];