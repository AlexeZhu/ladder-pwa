// src/data/locales/de-DE/words.ts
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
  { id: 'greetings', name: '👋 Begrüßungen', icon: '👋', color: '#FF6B6B' },
  { id: 'numbers', name: '🔢 Zahlen', icon: '1️⃣', color: '#4ECDC4' },
  { id: 'family', name: '👨‍👩‍👧 Familie', icon: '👪', color: '#45B7D1' },
  { id: 'food', name: '🍜 Essen', icon: '🍚', color: '#96CEB4' },
  { id: 'daily', name: '📅 Täglich', icon: '☀️', color: '#FFEAA7' },
  { id: 'colors', name: '🎨 Farben', icon: '🌈', color: '#DFE6E9' },
];

export const wordData: WordItem[] = [
  // 问候
  { id: 'hallo', word: 'Hallo', translation: '你好', pronunciation: 'halo', partOfSpeech: '问候', exampleSentence: 'Hallo, wie geht es dir?', exampleTranslation: '你好，你好吗？', group: 'greetings' },
  { id: 'guten_tag', word: 'Guten Tag', translation: '你好(白天)', pronunciation: 'guten tak', partOfSpeech: '问候', exampleSentence: 'Guten Tag, schön Sie zu sehen.', exampleTranslation: '你好，很高兴见到您。', group: 'greetings' },
  { id: 'danke', word: 'Danke', translation: '谢谢', pronunciation: 'danke', partOfSpeech: '问候', exampleSentence: 'Danke für deine Hilfe.', exampleTranslation: '谢谢你的帮助。', group: 'greetings' },
  { id: 'auf_wiedersehen', word: 'Auf Wiedersehen', translation: '再见', pronunciation: 'auf viderzehen', partOfSpeech: '问候', exampleSentence: 'Auf Wiedersehen, bis morgen!', exampleTranslation: '再见，明天见！', group: 'greetings' },
  { id: 'bitte', word: 'Bitte', translation: '请/不客气', pronunciation: 'bite', partOfSpeech: '问候', exampleSentence: 'Bitte schön.', exampleTranslation: '不客气。', group: 'greetings' },
  
  // 数字
  { id: 'eins', word: 'eins', translation: '一', pronunciation: 'ains', partOfSpeech: '数词', exampleSentence: 'Eins, zwei, drei', exampleTranslation: '一、二、三', group: 'numbers' },
  { id: 'zwei', word: 'zwei', translation: '二', pronunciation: 'zvai', partOfSpeech: '数词', exampleSentence: 'Zwei Personen', exampleTranslation: '两个人', group: 'numbers' },
  { id: 'drei', word: 'drei', translation: '三', pronunciation: 'drai', partOfSpeech: '数词', exampleSentence: 'Drei Tage', exampleTranslation: '三天', group: 'numbers' },
  { id: 'vier', word: 'vier', translation: '四', pronunciation: 'fir', partOfSpeech: '数词', exampleSentence: 'Vier Jahreszeiten', exampleTranslation: '四季', group: 'numbers' },
  { id: 'fuenf', word: 'fünf', translation: '五', pronunciation: 'fünf', partOfSpeech: '数词', exampleSentence: 'Fünf Minuten', exampleTranslation: '五分钟', group: 'numbers' },
  
  // 家庭
  { id: 'mutter', word: 'Mutter', translation: '母亲', pronunciation: 'mutter', partOfSpeech: '名词', exampleSentence: 'Meine Mutter ist sehr lieb.', exampleTranslation: '我的母亲很慈爱。', group: 'family' },
  { id: 'vater', word: 'Vater', translation: '父亲', pronunciation: 'fater', partOfSpeech: '名词', exampleSentence: 'Mein Vater arbeitet viel.', exampleTranslation: '我的父亲工作很努力。', group: 'family' },
  { id: 'bruder', word: 'Bruder', translation: '兄弟', pronunciation: 'bruder', partOfSpeech: '名词', exampleSentence: 'Ich habe einen Bruder.', exampleTranslation: '我有一个兄弟。', group: 'family' },
  { id: 'schwester', word: 'Schwester', translation: '姐妹', pronunciation: 'schwester', partOfSpeech: '名词', exampleSentence: 'Meine Schwester ist Studentin.', exampleTranslation: '我的姐妹是学生。', group: 'family' },
  
  // 食物
  { id: 'brot', word: 'Brot', translation: '面包', pronunciation: 'brot', partOfSpeech: '名词', exampleSentence: 'Ich esse Brot zum Frühstück.', exampleTranslation: '我早餐吃面包。', group: 'food' },
  { id: 'wasser', word: 'Wasser', translation: '水', pronunciation: 'wasser', partOfSpeech: '名词', exampleSentence: 'Ich trinke Wasser.', exampleTranslation: '我喝水。', group: 'food' },
  { id: 'bier', word: 'Bier', translation: '啤酒', pronunciation: 'bir', partOfSpeech: '名词', exampleSentence: 'Deutsches Bier ist weltberühmt.', exampleTranslation: '德国啤酒世界闻名。', group: 'food' },
  { id: 'wurst', word: 'Wurst', translation: '香肠', pronunciation: 'vurst', partOfSpeech: '名词', exampleSentence: 'Ich esse gerne Wurst.', exampleTranslation: '我喜欢吃香肠。', group: 'food' },
  
  // 日常动词
  { id: 'gehen', word: 'gehen', translation: '去/走', pronunciation: 'gayen', partOfSpeech: '动词', exampleSentence: 'Ich gehe zur Schule.', exampleTranslation: '我去学校。', group: 'daily' },
  { id: 'essen', word: 'essen', translation: '吃', pronunciation: 'essen', partOfSpeech: '动词', exampleSentence: 'Ich esse Äpfel.', exampleTranslation: '我吃苹果。', group: 'daily' },
  { id: 'trinken', word: 'trinken', translation: '喝', pronunciation: 'trinken', partOfSpeech: '动词', exampleSentence: 'Ich trinke Wasser.', exampleTranslation: '我喝水。', group: 'daily' },
  { id: 'sprechen', word: 'sprechen', translation: '说', pronunciation: 'shprechen', partOfSpeech: '动词', exampleSentence: 'Ich spreche Deutsch.', exampleTranslation: '我说德语。', group: 'daily' },
  
  // 颜色
  { id: 'rot', word: 'rot', translation: '红色', pronunciation: 'rot', partOfSpeech: '形容词', exampleSentence: 'Ein roter Apfel', exampleTranslation: '一个红苹果', group: 'colors' },
  { id: 'blau', word: 'blau', translation: '蓝色', pronunciation: 'blau', partOfSpeech: '形容词', exampleSentence: 'Der Himmel ist blau.', exampleTranslation: '天空是蓝色的。', group: 'colors' },
  { id: 'gelb', word: 'gelb', translation: '黄色', pronunciation: 'gelb', partOfSpeech: '形容词', exampleSentence: 'Eine gelbe Blume', exampleTranslation: '一朵黄色的花', group: 'colors' },
  { id: 'gruen', word: 'grün', translation: '绿色', pronunciation: 'grün', partOfSpeech: '形容词', exampleSentence: 'Das Gras ist grün.', exampleTranslation: '草是绿色的。', group: 'colors' },
  { id: 'schwarz', word: 'schwarz', translation: '黑色', pronunciation: 'schwarz', partOfSpeech: '形容词', exampleSentence: 'Eine schwarze Katze', exampleTranslation: '一只黑猫', group: 'colors' },
  { id: 'weiss', word: 'weiß', translation: '白色', pronunciation: 'vais', partOfSpeech: '形容词', exampleSentence: 'Der Schnee ist weiß.', exampleTranslation: '雪是白色的。', group: 'colors' },
];