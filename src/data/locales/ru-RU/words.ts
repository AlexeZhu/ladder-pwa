// src/data/locales/ru-RU/words.ts
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
  { id: 'greetings', name: '👋 Приветствия', icon: '👋', color: '#FF6B6B' },
  { id: 'numbers', name: '🔢 Числа', icon: '1️⃣', color: '#4ECDC4' },
  { id: 'family', name: '👨‍👩‍👧 Семья', icon: '👪', color: '#45B7D1' },
  { id: 'food', name: '🍜 Еда', icon: '🍞', color: '#96CEB4' },
  { id: 'daily', name: '📅 Повседневное', icon: '☀️', color: '#FFEAA7' },
  { id: 'colors', name: '🎨 Цвета', icon: '🌈', color: '#DFE6E9' },
];

export const wordData: WordItem[] = [
  // 问候
  { id: 'zdravstvuyte', word: 'Здравствуйте', translation: '你好', pronunciation: 'zdravstvuyte', partOfSpeech: '问候', exampleSentence: 'Здравствуйте, как дела?', exampleTranslation: '你好，最近怎么样？', group: 'greetings' },
  { id: 'privet', word: 'Привет', translation: '嗨', pronunciation: 'privet', partOfSpeech: '问候', exampleSentence: 'Привет, друг!', exampleTranslation: '嗨，朋友！', group: 'greetings' },
  { id: 'spasibo', word: 'Спасибо', translation: '谢谢', pronunciation: 'spasibo', partOfSpeech: '问候', exampleSentence: 'Спасибо за помощь.', exampleTranslation: '谢谢你的帮助。', group: 'greetings' },
  { id: 'pozhaluysta', word: 'Пожалуйста', translation: '请/不客气', pronunciation: 'pozhaluysta', partOfSpeech: '问候', exampleSentence: 'Пожалуйста, проходите.', exampleTranslation: '请进。', group: 'greetings' },
  { id: 'do_svidaniya', word: 'До свидания', translation: '再见', pronunciation: 'do svidaniya', partOfSpeech: '问候', exampleSentence: 'До свидания, увидимся завтра.', exampleTranslation: '再见，明天见。', group: 'greetings' },
  { id: 'izvinite', word: 'Извините', translation: '对不起', pronunciation: 'izvinite', partOfSpeech: '问候', exampleSentence: 'Извините, я опоздал.', exampleTranslation: '对不起，我迟到了。', group: 'greetings' },
  
  // 数字
  { id: 'odin', word: 'один', translation: '一', pronunciation: 'odin', partOfSpeech: '数词', exampleSentence: 'Один, два, три', exampleTranslation: '一、二、三', group: 'numbers' },
  { id: 'dva', word: 'два', translation: '二', pronunciation: 'dva', partOfSpeech: '数词', exampleSentence: 'Два часа', exampleTranslation: '两点', group: 'numbers' },
  { id: 'tri', word: 'три', translation: '三', pronunciation: 'tri', partOfSpeech: '数词', exampleSentence: 'Три дня', exampleTranslation: '三天', group: 'numbers' },
  { id: 'chetyre', word: 'четыре', translation: '四', pronunciation: 'chetyre', partOfSpeech: '数词', exampleSentence: 'Четыре года', exampleTranslation: '四年', group: 'numbers' },
  { id: 'pyat', word: 'пять', translation: '五', pronunciation: 'pyat', partOfSpeech: '数词', exampleSentence: 'Пять минут', exampleTranslation: '五分钟', group: 'numbers' },
  { id: 'shest', word: 'шесть', translation: '六', pronunciation: 'shest', partOfSpeech: '数词', exampleSentence: 'Шесть книг', exampleTranslation: '六本书', group: 'numbers' },
  { id: 'sem', word: 'семь', translation: '七', pronunciation: 'sem', partOfSpeech: '数词', exampleSentence: 'Семь дней', exampleTranslation: '七天', group: 'numbers' },
  { id: 'vosem', word: 'восемь', translation: '八', pronunciation: 'vosem', partOfSpeech: '数词', exampleSentence: 'Восемь часов', exampleTranslation: '八小时', group: 'numbers' },
  { id: 'devyat', word: 'девять', translation: '九', pronunciation: 'devyat', partOfSpeech: '数词', exampleSentence: 'Девять раз', exampleTranslation: '九次', group: 'numbers' },
  { id: 'desyat', word: 'десять', translation: '十', pronunciation: 'desyat', partOfSpeech: '数词', exampleSentence: 'Десять лет', exampleTranslation: '十年', group: 'numbers' },
  
  // 家庭
  { id: 'mat', word: 'мать', translation: '母亲', pronunciation: 'mat', partOfSpeech: '名词', exampleSentence: 'Моя мать врач.', exampleTranslation: '我的母亲是医生。', group: 'family' },
  { id: 'otets', word: 'отец', translation: '父亲', pronunciation: 'otets', partOfSpeech: '名词', exampleSentence: 'Мой отец работает.', exampleTranslation: '我的父亲在工作。', group: 'family' },
  { id: 'brat', word: 'брат', translation: '兄弟', pronunciation: 'brat', partOfSpeech: '名词', exampleSentence: 'У меня есть брат.', exampleTranslation: '我有一个兄弟。', group: 'family' },
  { id: 'sestra', word: 'сестра', translation: '姐妹', pronunciation: 'sestra', partOfSpeech: '名词', exampleSentence: 'Это моя сестра.', exampleTranslation: '这是我的姐妹。', group: 'family' },
  { id: 'syn', word: 'сын', translation: '儿子', pronunciation: 'syn', partOfSpeech: '名词', exampleSentence: 'Мой сын студент.', exampleTranslation: '我的儿子是学生。', group: 'family' },
  { id: 'doch', word: 'дочь', translation: '女儿', pronunciation: 'doch', partOfSpeech: '名词', exampleSentence: 'Моя дочь маленькая.', exampleTranslation: '我的女儿很小。', group: 'family' },
  
  // 食物
  { id: 'chleb', word: 'хлеб', translation: '面包', pronunciation: 'khleb', partOfSpeech: '名词', exampleSentence: 'Я люблю хлеб.', exampleTranslation: '我喜欢面包。', group: 'food' },
  { id: 'voda', word: 'вода', translation: '水', pronunciation: 'voda', partOfSpeech: '名词', exampleSentence: 'Пейте воду.', exampleTranslation: '喝水。', group: 'food' },
  { id: 'myaso', word: 'мясо', translation: '肉', pronunciation: 'myaso', partOfSpeech: '名词', exampleSentence: 'Я ем мясо.', exampleTranslation: '我吃肉。', group: 'food' },
  { id: 'sup', word: 'суп', translation: '汤', pronunciation: 'sup', partOfSpeech: '名词', exampleSentence: 'Суп горячий.', exampleTranslation: '汤是热的。', group: 'food' },
  
  // 日常动词
  { id: 'idti', word: 'идти', translation: '走/去', pronunciation: 'idti', partOfSpeech: '动词', exampleSentence: 'Я иду в школу.', exampleTranslation: '我去学校。', group: 'daily' },
  { id: 'govorit', word: 'говорить', translation: '说', pronunciation: 'govorit', partOfSpeech: '动词', exampleSentence: 'Я говорю по-русски.', exampleTranslation: '我说俄语。', group: 'daily' },
  { id: 'rabotat', word: 'работать', translation: '工作', pronunciation: 'rabotat', partOfSpeech: '动词', exampleSentence: 'Я работаю каждый день.', exampleTranslation: '我每天工作。', group: 'daily' },
  { id: 'chitat', word: 'читать', translation: '读', pronunciation: 'chitat', partOfSpeech: '动词', exampleSentence: 'Я читаю книгу.', exampleTranslation: '我在读书。', group: 'daily' },
  { id: 'pisat', word: 'писать', translation: '写', pronunciation: 'pisat', partOfSpeech: '动词', exampleSentence: 'Я пишу письмо.', exampleTranslation: '我在写信。', group: 'daily' },
  
  // 颜色
  { id: 'krasny', word: 'красный', translation: '红色', pronunciation: 'krasny', partOfSpeech: '形容词', exampleSentence: 'Красное яблоко', exampleTranslation: '红苹果', group: 'colors' },
  { id: 'siniy', word: 'синий', translation: '蓝色', pronunciation: 'siniy', partOfSpeech: '形容词', exampleSentence: 'Синее небо', exampleTranslation: '蓝色的天空', group: 'colors' },
  { id: 'zhyolty', word: 'жёлтый', translation: '黄色', pronunciation: 'zhyolty', partOfSpeech: '形容词', exampleSentence: 'Жёлтый цветок', exampleTranslation: '黄色的花', group: 'colors' },
  { id: 'zelyony', word: 'зелёный', translation: '绿色', pronunciation: 'zelyony', partOfSpeech: '形容词', exampleSentence: 'Зелёная трава', exampleTranslation: '绿色的草', group: 'colors' },
  { id: 'bely', word: 'белый', translation: '白色', pronunciation: 'bely', partOfSpeech: '形容词', exampleSentence: 'Белый снег', exampleTranslation: '白色的雪', group: 'colors' },
  { id: 'chorny', word: 'чёрный', translation: '黑色', pronunciation: 'chorny', partOfSpeech: '形容词', exampleSentence: 'Чёрный кот', exampleTranslation: '黑色的猫', group: 'colors' },
];