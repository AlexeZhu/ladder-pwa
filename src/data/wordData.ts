// src/data/wordData.ts
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
  { id: 'animals', name: '🐾 动物', icon: '🐕', color: '#FF6B6B' },
  { id: 'food', name: '🍕 食物', icon: '🍎', color: '#4ECDC4' },
  { id: 'family', name: '👨‍👩‍👧 家庭', icon: '👪', color: '#45B7D1' },
  { id: 'colors', name: '🎨 颜色', icon: '🌈', color: '#96CEB4' },
  { id: 'numbers', name: '🔢 数字', icon: '1️⃣', color: '#FFEAA7' },
  { id: 'daily', name: '📅 日常', icon: '☀️', color: '#DFE6E9' },
];

export const wordData: WordItem[] = [
  // 动物组
  { id: 'cat', word: 'cat', translation: '猫', pronunciation: '/kæt/', partOfSpeech: '名词', exampleSentence: 'The cat is sleeping.', exampleTranslation: '猫在睡觉。', group: 'animals' },
  { id: 'dog', word: 'dog', translation: '狗', pronunciation: '/dɔːɡ/', partOfSpeech: '名词', exampleSentence: 'I have a dog.', exampleTranslation: '我有一只狗。', group: 'animals' },
  { id: 'bird', word: 'bird', translation: '鸟', pronunciation: '/bɜːd/', partOfSpeech: '名词', exampleSentence: 'The bird can fly.', exampleTranslation: '鸟会飞。', group: 'animals' },
  { id: 'fish', word: 'fish', translation: '鱼', pronunciation: '/fɪʃ/', partOfSpeech: '名词', exampleSentence: 'Fish live in water.', exampleTranslation: '鱼生活在水里。', group: 'animals' },
  
  // 食物组
  { id: 'apple', word: 'apple', translation: '苹果', pronunciation: '/ˈæpl/', partOfSpeech: '名词', exampleSentence: 'I eat an apple every day.', exampleTranslation: '我每天吃一个苹果。', group: 'food' },
  { id: 'rice', word: 'rice', translation: '米饭', pronunciation: '/raɪs/', partOfSpeech: '名词', exampleSentence: 'Rice is a staple food.', exampleTranslation: '米饭是主食。', group: 'food' },
  { id: 'water', word: 'water', translation: '水', pronunciation: '/ˈwɔːtər/', partOfSpeech: '名词', exampleSentence: 'We need water to live.', exampleTranslation: '我们需要水来生存。', group: 'food' },
  
  // 家庭组
  { id: 'mother', word: 'mother', translation: '母亲', pronunciation: '/ˈmʌðər/', partOfSpeech: '名词', exampleSentence: 'My mother loves me.', exampleTranslation: '我的母亲爱我。', group: 'family' },
  { id: 'father', word: 'father', translation: '父亲', pronunciation: '/ˈfɑːðər/', partOfSpeech: '名词', exampleSentence: 'My father works hard.', exampleTranslation: '我的父亲工作努力。', group: 'family' },
  { id: 'brother', word: 'brother', translation: '兄弟', pronunciation: '/ˈbrʌðər/', partOfSpeech: '名词', exampleSentence: 'I have a brother.', exampleTranslation: '我有一个兄弟。', group: 'family' },
  { id: 'sister', word: 'sister', translation: '姐妹', pronunciation: '/ˈsɪstər/', partOfSpeech: '名词', exampleSentence: 'She is my sister.', exampleTranslation: '她是我的姐妹。', group: 'family' },
  
  // 颜色组
  { id: 'red', word: 'red', translation: '红色', pronunciation: '/red/', partOfSpeech: '形容词', exampleSentence: 'The apple is red.', exampleTranslation: '苹果是红色的。', group: 'colors' },
  { id: 'blue', word: 'blue', translation: '蓝色', pronunciation: '/bluː/', partOfSpeech: '形容词', exampleSentence: 'The sky is blue.', exampleTranslation: '天空是蓝色的。', group: 'colors' },
  { id: 'yellow', word: 'yellow', translation: '黄色', pronunciation: '/ˈjeləʊ/', partOfSpeech: '形容词', exampleSentence: 'The sun is yellow.', exampleTranslation: '太阳是黄色的。', group: 'colors' },
  
  // 数字组
  { id: 'one', word: 'one', translation: '一', pronunciation: '/wʌn/', partOfSpeech: '数词', exampleSentence: 'I have one book.', exampleTranslation: '我有一本书。', group: 'numbers' },
  { id: 'two', word: 'two', translation: '二', pronunciation: '/tuː/', partOfSpeech: '数词', exampleSentence: 'Two cats are playing.', exampleTranslation: '两只猫在玩。', group: 'numbers' },
  { id: 'three', word: 'three', translation: '三', pronunciation: '/θriː/', partOfSpeech: '数词', exampleSentence: 'Three birds are flying.', exampleTranslation: '三只鸟在飞。', group: 'numbers' },
  
  // 日常组
  { id: 'run', word: 'run', translation: '跑', pronunciation: '/rʌn/', partOfSpeech: '动词', exampleSentence: 'I run every morning.', exampleTranslation: '我每天早上跑步。', group: 'daily' },
  { id: 'eat', word: 'eat', translation: '吃', pronunciation: '/iːt/', partOfSpeech: '动词', exampleSentence: 'I eat breakfast at 7am.', exampleTranslation: '我早上7点吃早餐。', group: 'daily' },
  { id: 'sleep', word: 'sleep', translation: '睡觉', pronunciation: '/sliːp/', partOfSpeech: '动词', exampleSentence: 'I sleep 8 hours a day.', exampleTranslation: '我每天睡8小时。', group: 'daily' },
];