// src/data/locales/fr-FR/alphabet.ts
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
  // 元音 (6个)
  { id: 'a', char: 'A', name: 'a', sound: 'a', type: 'vowel', exampleWord: 'Amour', exampleTranslation: '爱' },
  { id: 'e', char: 'E', name: 'e', sound: 'e', type: 'vowel', exampleWord: 'École', exampleTranslation: '学校' },
  { id: 'i', char: 'I', name: 'i', sound: 'i', type: 'vowel', exampleWord: 'Île', exampleTranslation: '岛屿' },
  { id: 'o', char: 'O', name: 'o', sound: 'o', type: 'vowel', exampleWord: 'Oiseau', exampleTranslation: '鸟' },
  { id: 'u', char: 'U', name: 'u', sound: 'u', type: 'vowel', exampleWord: 'Usine', exampleTranslation: '工厂' },
  { id: 'y', char: 'Y', name: 'y', sound: 'i', type: 'vowel', exampleWord: 'Yoga', exampleTranslation: '瑜伽' },
  
  // 辅音 (20个)
  { id: 'b', char: 'B', name: 'bé', sound: 'b', type: 'consonant', exampleWord: 'Bonjour', exampleTranslation: '你好' },
  { id: 'c', char: 'C', name: 'cé', sound: 'c/k', type: 'consonant', exampleWord: 'Chien', exampleTranslation: '狗' },
  { id: 'd', char: 'D', name: 'dé', sound: 'd', type: 'consonant', exampleWord: 'Dieu', exampleTranslation: '上帝' },
  { id: 'f', char: 'F', name: 'effe', sound: 'f', type: 'consonant', exampleWord: 'Femme', exampleTranslation: '女人' },
  { id: 'g', char: 'G', name: 'gé', sound: 'g', type: 'consonant', exampleWord: 'Garçon', exampleTranslation: '男孩' },
  { id: 'h', char: 'H', name: 'ache', sound: 'h', type: 'consonant', exampleWord: 'Homme', exampleTranslation: '男人' },
  { id: 'j', char: 'J', name: 'ji', sound: 'zh', type: 'consonant', exampleWord: 'Jour', exampleTranslation: '天' },
  { id: 'k', char: 'K', name: 'ka', sound: 'k', type: 'consonant', exampleWord: 'Kilo', exampleTranslation: '公斤' },
  { id: 'l', char: 'L', name: 'elle', sound: 'l', type: 'consonant', exampleWord: 'Lune', exampleTranslation: '月亮' },
  { id: 'm', char: 'M', name: 'emme', sound: 'm', type: 'consonant', exampleWord: 'Mère', exampleTranslation: '母亲' },
  { id: 'n', char: 'N', name: 'enne', sound: 'n', type: 'consonant', exampleWord: 'Nuit', exampleTranslation: '夜晚' },
  { id: 'p', char: 'P', name: 'pé', sound: 'p', type: 'consonant', exampleWord: 'Père', exampleTranslation: '父亲' },
  { id: 'q', char: 'Q', name: 'qu', sound: 'k', type: 'consonant', exampleWord: 'Qui', exampleTranslation: '谁' },
  { id: 'r', char: 'R', name: 'erre', sound: 'r', type: 'consonant', exampleWord: 'Roi', exampleTranslation: '国王' },
  { id: 's', char: 'S', name: 'esse', sound: 's', type: 'consonant', exampleWord: 'Soleil', exampleTranslation: '太阳' },
  { id: 't', char: 'T', name: 'té', sound: 't', type: 'consonant', exampleWord: 'Temps', exampleTranslation: '时间' },
  { id: 'v', char: 'V', name: 'vé', sound: 'v', type: 'consonant', exampleWord: 'Vie', exampleTranslation: '生命' },
  { id: 'w', char: 'W', name: 'double vé', sound: 'w', type: 'consonant', exampleWord: 'Week-end', exampleTranslation: '周末' },
  { id: 'x', char: 'X', name: 'ixe', sound: 'ks', type: 'consonant', exampleWord: 'Xylophone', exampleTranslation: '木琴' },
  { id: 'z', char: 'Z', name: 'zède', sound: 'z', type: 'consonant', exampleWord: 'Zèbre', exampleTranslation: '斑马' },
];