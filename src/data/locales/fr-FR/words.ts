// src/data/locales/fr-FR/words.ts
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
  { id: 'greetings', name: '👋 Salutations', icon: '👋', color: '#FF6B6B' },
  { id: 'numbers', name: '🔢 Nombres', icon: '1️⃣', color: '#4ECDC4' },
  { id: 'family', name: '👨‍👩‍👧 Famille', icon: '👪', color: '#45B7D1' },
  { id: 'food', name: '🍜 Nourriture', icon: '🍚', color: '#96CEB4' },
  { id: 'daily', name: '📅 Quotidien', icon: '☀️', color: '#FFEAA7' },
  { id: 'colors', name: '🎨 Couleurs', icon: '🌈', color: '#DFE6E9' },
];

export const wordData: WordItem[] = [
  // 问候
  { id: 'bonjour', word: 'Bonjour', translation: '你好/早上好', pronunciation: 'bonjour', partOfSpeech: '问候', exampleSentence: 'Bonjour, comment allez-vous?', exampleTranslation: '你好，你好吗？', group: 'greetings' },
  { id: 'merci', word: 'Merci', translation: '谢谢', pronunciation: 'mersi', partOfSpeech: '问候', exampleSentence: 'Merci beaucoup pour votre aide.', exampleTranslation: '非常感谢您的帮助。', group: 'greetings' },
  { id: 'au_revoir', word: 'Au revoir', translation: '再见', pronunciation: 'o revoir', partOfSpeech: '问候', exampleSentence: 'Au revoir, à demain!', exampleTranslation: '再见，明天见！', group: 'greetings' },
  { id: 'bonsoir', word: 'Bonsoir', translation: '晚上好', pronunciation: 'bonsoir', partOfSpeech: '问候', exampleSentence: 'Bonsoir, comment ça va?', exampleTranslation: '晚上好，你好吗？', group: 'greetings' },
  { id: 'salut', word: 'Salut', translation: '你好/再见(非正式)', pronunciation: 'salu', partOfSpeech: '问候', exampleSentence: 'Salut, mon ami!', exampleTranslation: '你好，我的朋友！', group: 'greetings' },
  
  // 数字
  { id: 'un', word: 'un', translation: '一', pronunciation: 'un', partOfSpeech: '数词', exampleSentence: 'Un, deux, trois', exampleTranslation: '一、二、三', group: 'numbers' },
  { id: 'deux', word: 'deux', translation: '二', pronunciation: 'deu', partOfSpeech: '数词', exampleSentence: 'Deux personnes', exampleTranslation: '两个人', group: 'numbers' },
  { id: 'trois', word: 'trois', translation: '三', pronunciation: 'troi', partOfSpeech: '数词', exampleSentence: 'Trois jours', exampleTranslation: '三天', group: 'numbers' },
  { id: 'quatre', word: 'quatre', translation: '四', pronunciation: 'katr', partOfSpeech: '数词', exampleSentence: 'Quatre saisons', exampleTranslation: '四季', group: 'numbers' },
  { id: 'cinq', word: 'cinq', translation: '五', pronunciation: 'sank', partOfSpeech: '数词', exampleSentence: 'Cinq minutes', exampleTranslation: '五分钟', group: 'numbers' },
  { id: 'six', word: 'six', translation: '六', pronunciation: 'sis', partOfSpeech: '数词', exampleSentence: 'Six livres', exampleTranslation: '六本书', group: 'numbers' },
  { id: 'sept', word: 'sept', translation: '七', pronunciation: 'set', partOfSpeech: '数词', exampleSentence: 'Sept jours', exampleTranslation: '七天', group: 'numbers' },
  { id: 'huit', word: 'huit', translation: '八', pronunciation: 'uit', partOfSpeech: '数词', exampleSentence: 'Huit heures', exampleTranslation: '八小时', group: 'numbers' },
  { id: 'neuf', word: 'neuf', translation: '九', pronunciation: 'neuf', partOfSpeech: '数词', exampleSentence: 'Neuf fois', exampleTranslation: '九次', group: 'numbers' },
  { id: 'dix', word: 'dix', translation: '十', pronunciation: 'dis', partOfSpeech: '数词', exampleSentence: 'Dix ans', exampleTranslation: '十年', group: 'numbers' },
  
  // 家庭
  { id: 'mere', word: 'mère', translation: '母亲', pronunciation: 'mer', partOfSpeech: '名词', exampleSentence: 'Ma mère est très gentille.', exampleTranslation: '我的母亲很温柔。', group: 'family' },
  { id: 'pere', word: 'père', translation: '父亲', pronunciation: 'per', partOfSpeech: '名词', exampleSentence: 'Mon père travaille beaucoup.', exampleTranslation: '我的父亲工作很努力。', group: 'family' },
  { id: 'frere', word: 'frère', translation: '兄弟', pronunciation: 'frer', partOfSpeech: '名词', exampleSentence: 'J\'ai un frère aîné.', exampleTranslation: '我有一个哥哥。', group: 'family' },
  { id: 'soeur', word: 'soeur', translation: '姐妹', pronunciation: 'seur', partOfSpeech: '名词', exampleSentence: 'Ma soeur est étudiante.', exampleTranslation: '我的姐妹是学生。', group: 'family' },
  { id: 'enfant', word: 'enfant', translation: '孩子', pronunciation: 'anfan', partOfSpeech: '名词', exampleSentence: 'L\'enfant joue dans le parc.', exampleTranslation: '孩子在公园玩耍。', group: 'family' },
  
  // 食物
  { id: 'pain', word: 'pain', translation: '面包', pronunciation: 'pan', partOfSpeech: '名词', exampleSentence: 'Je mange du pain tous les jours.', exampleTranslation: '我每天吃面包。', group: 'food' },
  { id: 'fromage', word: 'fromage', translation: '奶酪', pronunciation: 'fromaj', partOfSpeech: '名词', exampleSentence: 'Le fromage français est délicieux.', exampleTranslation: '法国奶酪很美味。', group: 'food' },
  { id: 'vin', word: 'vin', translation: '葡萄酒', pronunciation: 'van', partOfSpeech: '名词', exampleSentence: 'Il boit du vin rouge.', exampleTranslation: '他喝红葡萄酒。', group: 'food' },
  { id: 'croissant', word: 'croissant', translation: '羊角面包', pronunciation: 'croissan', partOfSpeech: '名词', exampleSentence: 'Je prends un croissant au petit-déjeuner.', exampleTranslation: '我早餐吃一个羊角面包。', group: 'food' },
  
  // 日常动词
  { id: 'aller', word: 'aller', translation: '去', pronunciation: 'ale', partOfSpeech: '动词', exampleSentence: 'Je vais à l\'école.', exampleTranslation: '我去学校。', group: 'daily' },
  { id: 'manger', word: 'manger', translation: '吃', pronunciation: 'manje', partOfSpeech: '动词', exampleSentence: 'Je mange des pommes.', exampleTranslation: '我吃苹果。', group: 'daily' },
  { id: 'boire', word: 'boire', translation: '喝', pronunciation: 'boir', partOfSpeech: '动词', exampleSentence: 'Je bois de l\'eau.', exampleTranslation: '我喝水。', group: 'daily' },
  { id: 'parler', word: 'parler', translation: '说', pronunciation: 'parle', partOfSpeech: '动词', exampleSentence: 'Je parle français.', exampleTranslation: '我说法语。', group: 'daily' },
  
  // 颜色
  { id: 'rouge', word: 'rouge', translation: '红色', pronunciation: 'rouj', partOfSpeech: '形容词', exampleSentence: 'Une pomme rouge', exampleTranslation: '一个红苹果', group: 'colors' },
  { id: 'bleu', word: 'bleu', translation: '蓝色', pronunciation: 'bleu', partOfSpeech: '形容词', exampleSentence: 'Le ciel est bleu.', exampleTranslation: '天空是蓝色的。', group: 'colors' },
  { id: 'jaune', word: 'jaune', translation: '黄色', pronunciation: 'jaune', partOfSpeech: '形容词', exampleSentence: 'Une fleur jaune', exampleTranslation: '一朵黄色的花', group: 'colors' },
  { id: 'vert', word: 'vert', translation: '绿色', pronunciation: 'ver', partOfSpeech: '形容词', exampleSentence: 'L\'herbe est verte.', exampleTranslation: '草是绿色的。', group: 'colors' },
  { id: 'noir', word: 'noir', translation: '黑色', pronunciation: 'noir', partOfSpeech: '形容词', exampleSentence: 'Un chat noir', exampleTranslation: '一只黑猫', group: 'colors' },
  { id: 'blanc', word: 'blanc', translation: '白色', pronunciation: 'blan', partOfSpeech: '形容词', exampleSentence: 'La neige est blanche.', exampleTranslation: '雪是白色的。', group: 'colors' },
];