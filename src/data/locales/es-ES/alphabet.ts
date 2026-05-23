// src/data/locales/es-ES/alphabet.ts
export interface AlphabetItem {
  id: string;
  char: string;
  name: string;
  sound: string;
  type: 'vowel' | 'consonant';
  exampleWord: string;
  exampleTranslation: string;
}

export const alphabetData: AlphabetItem[] = [
  // 元音 (5个)
  { id: 'a', char: 'A', name: 'a', sound: 'a', type: 'vowel', exampleWord: 'Amor', exampleTranslation: '爱' },
  { id: 'e', char: 'E', name: 'e', sound: 'e', type: 'vowel', exampleWord: 'Elefante', exampleTranslation: '大象' },
  { id: 'i', char: 'I', name: 'i', sound: 'i', type: 'vowel', exampleWord: 'Iglesia', exampleTranslation: '教堂' },
  { id: 'o', char: 'O', name: 'o', sound: 'o', type: 'vowel', exampleWord: 'Oso', exampleTranslation: '熊' },
  { id: 'u', char: 'U', name: 'u', sound: 'u', type: 'vowel', exampleWord: 'Uva', exampleTranslation: '葡萄' },
  
  // 辅音 (22个)
  { id: 'b', char: 'B', name: 'be', sound: 'b', type: 'consonant', exampleWord: 'Bueno', exampleTranslation: '好' },
  { id: 'c', char: 'C', name: 'ce', sound: 'c/k', type: 'consonant', exampleWord: 'Casa', exampleTranslation: '房子' },
  { id: 'd', char: 'D', name: 'de', sound: 'd', type: 'consonant', exampleWord: 'Día', exampleTranslation: '天' },
  { id: 'f', char: 'F', name: 'efe', sound: 'f', type: 'consonant', exampleWord: 'Familia', exampleTranslation: '家庭' },
  { id: 'g', char: 'G', name: 'ge', sound: 'g', type: 'consonant', exampleWord: 'Gato', exampleTranslation: '猫' },
  { id: 'h', char: 'H', name: 'hache', sound: 'h', type: 'consonant', exampleWord: 'Hola', exampleTranslation: '你好' },
  { id: 'j', char: 'J', name: 'jota', sound: 'j', type: 'consonant', exampleWord: 'Jugar', exampleTranslation: '玩' },
  { id: 'k', char: 'K', name: 'ka', sound: 'k', type: 'consonant', exampleWord: 'Kilómetro', exampleTranslation: '公里' },
  { id: 'l', char: 'L', name: 'ele', sound: 'l', type: 'consonant', exampleWord: 'Luna', exampleTranslation: '月亮' },
  { id: 'm', char: 'M', name: 'eme', sound: 'm', type: 'consonant', exampleWord: 'Madre', exampleTranslation: '母亲' },
  { id: 'n', char: 'N', name: 'ene', sound: 'n', type: 'consonant', exampleWord: 'Noche', exampleTranslation: '夜晚' },
  { id: 'ñ', char: 'Ñ', name: 'eñe', sound: 'ny', type: 'consonant', exampleWord: 'Niño', exampleTranslation: '男孩' },
  { id: 'p', char: 'P', name: 'pe', sound: 'p', type: 'consonant', exampleWord: 'Padre', exampleTranslation: '父亲' },
  { id: 'q', char: 'Q', name: 'cu', sound: 'k', type: 'consonant', exampleWord: 'Queso', exampleTranslation: '奶酪' },
  { id: 'r', char: 'R', name: 'erre', sound: 'r', type: 'consonant', exampleWord: 'Río', exampleTranslation: '河流' },
  { id: 's', char: 'S', name: 'ese', sound: 's', type: 'consonant', exampleWord: 'Sol', exampleTranslation: '太阳' },
  { id: 't', char: 'T', name: 'te', sound: 't', type: 'consonant', exampleWord: 'Tiempo', exampleTranslation: '时间' },
  { id: 'v', char: 'V', name: 'uve', sound: 'v', type: 'consonant', exampleWord: 'Vida', exampleTranslation: '生命' },
  { id: 'w', char: 'W', name: 'uve doble', sound: 'w', type: 'consonant', exampleWord: 'Web', exampleTranslation: '网络' },
  { id: 'x', char: 'X', name: 'equis', sound: 'ks', type: 'consonant', exampleWord: 'Xilófono', exampleTranslation: '木琴' },
  { id: 'y', char: 'Y', name: 'ye', sound: 'y', type: 'consonant', exampleWord: 'Yema', exampleTranslation: '蛋黄' },
  { id: 'z', char: 'Z', name: 'zeta', sound: 'z', type: 'consonant', exampleWord: 'Zapato', exampleTranslation: '鞋子' },
];