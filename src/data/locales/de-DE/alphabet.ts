// src/data/locales/de-DE/alphabet.ts
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
  { id: 'a', char: 'A', name: 'a', sound: 'a', type: 'vowel', exampleWord: 'Apfel', exampleTranslation: '苹果' },
  { id: 'e', char: 'E', name: 'e', sound: 'e', type: 'vowel', exampleWord: 'Essen', exampleTranslation: '食物' },
  { id: 'i', char: 'I', name: 'i', sound: 'i', type: 'vowel', exampleWord: 'Insel', exampleTranslation: '岛屿' },
  { id: 'o', char: 'O', name: 'o', sound: 'o', type: 'vowel', exampleWord: 'Oma', exampleTranslation: '奶奶' },
  { id: 'u', char: 'U', name: 'u', sound: 'u', type: 'vowel', exampleWord: 'Uhr', exampleTranslation: '钟' },
  
  // 变元音 (3个)
  { id: 'ae', char: 'Ä', name: 'ä', sound: 'ae', type: 'vowel', exampleWord: 'Äpfel', exampleTranslation: '苹果(复数)' },
  { id: 'oe', char: 'Ö', name: 'ö', sound: 'oe', type: 'vowel', exampleWord: 'Öl', exampleTranslation: '油' },
  { id: 'ue', char: 'Ü', name: 'ü', sound: 'ue', type: 'vowel', exampleWord: 'Übung', exampleTranslation: '练习' },
  
  // 辅音 (22个)
  { id: 'b', char: 'B', name: 'be', sound: 'b', type: 'consonant', exampleWord: 'Brot', exampleTranslation: '面包' },
  { id: 'c', char: 'C', name: 'ce', sound: 'c/k', type: 'consonant', exampleWord: 'Café', exampleTranslation: '咖啡馆' },
  { id: 'd', char: 'D', name: 'de', sound: 'd', type: 'consonant', exampleWord: 'Danke', exampleTranslation: '谢谢' },
  { id: 'f', char: 'F', name: 'ef', sound: 'f', type: 'consonant', exampleWord: 'Fisch', exampleTranslation: '鱼' },
  { id: 'g', char: 'G', name: 'ge', sound: 'g', type: 'consonant', exampleWord: 'Garten', exampleTranslation: '花园' },
  { id: 'h', char: 'H', name: 'ha', sound: 'h', type: 'consonant', exampleWord: 'Haus', exampleTranslation: '房子' },
  { id: 'j', char: 'J', name: 'jot', sound: 'y', type: 'consonant', exampleWord: 'Ja', exampleTranslation: '是' },
  { id: 'k', char: 'K', name: 'ka', sound: 'k', type: 'consonant', exampleWord: 'Kind', exampleTranslation: '孩子' },
  { id: 'l', char: 'L', name: 'el', sound: 'l', type: 'consonant', exampleWord: 'Lampe', exampleTranslation: '灯' },
  { id: 'm', char: 'M', name: 'em', sound: 'm', type: 'consonant', exampleWord: 'Mutter', exampleTranslation: '母亲' },
  { id: 'n', char: 'N', name: 'en', sound: 'n', type: 'consonant', exampleWord: 'Nacht', exampleTranslation: '夜晚' },
  { id: 'p', char: 'P', name: 'pe', sound: 'p', type: 'consonant', exampleWord: 'Park', exampleTranslation: '公园' },
  { id: 'q', char: 'Q', name: 'ku', sound: 'k', type: 'consonant', exampleWord: 'Quelle', exampleTranslation: '来源' },
  { id: 'r', char: 'R', name: 'er', sound: 'r', type: 'consonant', exampleWord: 'Regen', exampleTranslation: '雨' },
  { id: 's', char: 'S', name: 'es', sound: 's', type: 'consonant', exampleWord: 'Sonne', exampleTranslation: '太阳' },
  { id: 't', char: 'T', name: 'te', sound: 't', type: 'consonant', exampleWord: 'Tag', exampleTranslation: '天' },
  { id: 'v', char: 'V', name: 'vau', sound: 'f', type: 'consonant', exampleWord: 'Vater', exampleTranslation: '父亲' },
  { id: 'w', char: 'W', name: 'we', sound: 'v', type: 'consonant', exampleWord: 'Wasser', exampleTranslation: '水' },
  { id: 'x', char: 'X', name: 'ix', sound: 'ks', type: 'consonant', exampleWord: 'Xylofon', exampleTranslation: '木琴' },
  { id: 'y', char: 'Y', name: 'ypsilon', sound: 'y', type: 'consonant', exampleWord: 'Yacht', exampleTranslation: '游艇' },
  { id: 'z', char: 'Z', name: 'zet', sound: 'ts', type: 'consonant', exampleWord: 'Zeit', exampleTranslation: '时间' },
  
  // 特殊字母
  { id: 'ss', char: 'ß', name: 'scharfes S', sound: 'ss', type: 'consonant', exampleWord: 'Straße', exampleTranslation: '街道' },
];