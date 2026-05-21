// src/data/locales/ru-RU/alphabet.ts
export interface AlphabetItem {
  id: string;
  char: string;
  name: string;
  sound: string;
  type: 'vowel' | 'consonant' | 'sign';
  exampleWord: string;
  exampleTranslation: string;
}

// 俄语字母表顺序
export const alphabetData: AlphabetItem[] = [
  // 元音 (10个)
  { id: 'a', char: 'А', name: 'а', sound: 'a', type: 'vowel', exampleWord: 'Автобус', exampleTranslation: '公交车' },
  { id: 'e', char: 'Е', name: 'е', sound: 'ye', type: 'vowel', exampleWord: 'Еда', exampleTranslation: '食物' },
  { id: 'yo', char: 'Ё', name: 'ё', sound: 'yo', type: 'vowel', exampleWord: 'Ёлка', exampleTranslation: '圣诞树' },
  { id: 'i', char: 'И', name: 'и', sound: 'ee', type: 'vowel', exampleWord: 'Игра', exampleTranslation: '游戏' },
  { id: 'o', char: 'О', name: 'о', sound: 'o', type: 'vowel', exampleWord: 'Окно', exampleTranslation: '窗户' },
  { id: 'u', char: 'У', name: 'у', sound: 'oo', type: 'vowel', exampleWord: 'Утро', exampleTranslation: '早晨' },
  { id: 'y', char: 'Ы', name: 'ы', sound: 'i', type: 'vowel', exampleWord: 'Мышь', exampleTranslation: '老鼠' },
  { id: 'e_rev', char: 'Э', name: 'э', sound: 'e', type: 'vowel', exampleWord: 'Этот', exampleTranslation: '这个' },
  { id: 'yu', char: 'Ю', name: 'ю', sound: 'yoo', type: 'vowel', exampleWord: 'Юг', exampleTranslation: '南方' },
  { id: 'ya', char: 'Я', name: 'я', sound: 'ya', type: 'vowel', exampleWord: 'Яблоко', exampleTranslation: '苹果' },
  
  // 辅音 (21个)
  { id: 'b', char: 'Б', name: 'бэ', sound: 'b', type: 'consonant', exampleWord: 'Брат', exampleTranslation: '兄弟' },
  { id: 'v', char: 'В', name: 'вэ', sound: 'v', type: 'consonant', exampleWord: 'Вода', exampleTranslation: '水' },
  { id: 'g', char: 'Г', name: 'гэ', sound: 'g', type: 'consonant', exampleWord: 'Город', exampleTranslation: '城市' },
  { id: 'd', char: 'Д', name: 'дэ', sound: 'd', type: 'consonant', exampleWord: 'Дом', exampleTranslation: '房子' },
  { id: 'zh', char: 'Ж', name: 'жэ', sound: 'zh', type: 'consonant', exampleWord: 'Жук', exampleTranslation: '甲虫' },
  { id: 'z', char: 'З', name: 'зэ', sound: 'z', type: 'consonant', exampleWord: 'Зима', exampleTranslation: '冬天' },
  { id: 'k', char: 'К', name: 'ка', sound: 'k', type: 'consonant', exampleWord: 'Кот', exampleTranslation: '猫' },
  { id: 'l', char: 'Л', name: 'эль', sound: 'l', type: 'consonant', exampleWord: 'Лес', exampleTranslation: '森林' },
  { id: 'm', char: 'М', name: 'эм', sound: 'm', type: 'consonant', exampleWord: 'Мама', exampleTranslation: '妈妈' },
  { id: 'n', char: 'Н', name: 'эн', sound: 'n', type: 'consonant', exampleWord: 'Нос', exampleTranslation: '鼻子' },
  { id: 'p', char: 'П', name: 'пэ', sound: 'p', type: 'consonant', exampleWord: 'Парк', exampleTranslation: '公园' },
  { id: 'r', char: 'Р', name: 'эр', sound: 'r', type: 'consonant', exampleWord: 'Рука', exampleTranslation: '手' },
  { id: 's', char: 'С', name: 'эс', sound: 's', type: 'consonant', exampleWord: 'Сын', exampleTranslation: '儿子' },
  { id: 't', char: 'Т', name: 'тэ', sound: 't', type: 'consonant', exampleWord: 'Торт', exampleTranslation: '蛋糕' },
  { id: 'f', char: 'Ф', name: 'эф', sound: 'f', type: 'consonant', exampleWord: 'Флаг', exampleTranslation: '旗帜' },
  { id: 'kh', char: 'Х', name: 'ха', sound: 'kh', type: 'consonant', exampleWord: 'Хлеб', exampleTranslation: '面包' },
  { id: 'ts', char: 'Ц', name: 'цэ', sound: 'ts', type: 'consonant', exampleWord: 'Цвет', exampleTranslation: '颜色' },
  { id: 'ch', char: 'Ч', name: 'чэ', sound: 'ch', type: 'consonant', exampleWord: 'Час', exampleTranslation: '小时' },
  { id: 'sh', char: 'Ш', name: 'ша', sound: 'sh', type: 'consonant', exampleWord: 'Школа', exampleTranslation: '学校' },
  { id: 'shch', char: 'Щ', name: 'ща', sound: 'shch', type: 'consonant', exampleWord: 'Щука', exampleTranslation: '狗鱼' },
  
  // 无音符号 (2个)
  { id: 'hard', char: 'Ъ', name: 'твёрдый знак', sound: '', type: 'sign', exampleWord: 'Объезд', exampleTranslation: '绕行' },
  { id: 'soft', char: 'Ь', name: 'мягкий знак', sound: '', type: 'sign', exampleWord: 'Письмо', exampleTranslation: '信件' },
];