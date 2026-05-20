// src/data/locales/en-US/alphabet.ts
export interface AlphabetItem {
  id: string;
  char: string;
  name: string;
  sound: string;
  audioUrl: string;
  exampleWord: string;
  exampleTranslation: string;
}

export const alphabetData: AlphabetItem[] = [
  { id: 'a', char: 'A', name: 'A', sound: '/eɪ/', audioUrl: '/audio/a.mp3', exampleWord: 'Apple', exampleTranslation: '苹果' },
  { id: 'b', char: 'B', name: 'B', sound: '/biː/', audioUrl: '/audio/b.mp3', exampleWord: 'Boy', exampleTranslation: '男孩' },
  { id: 'c', char: 'C', name: 'C', sound: '/siː/', audioUrl: '/audio/c.mp3', exampleWord: 'Cat', exampleTranslation: '猫' },
  { id: 'd', char: 'D', name: 'D', sound: '/diː/', audioUrl: '/audio/d.mp3', exampleWord: 'Dog', exampleTranslation: '狗' },
  { id: 'e', char: 'E', name: 'E', sound: '/iː/', audioUrl: '/audio/e.mp3', exampleWord: 'Egg', exampleTranslation: '鸡蛋' },
  { id: 'f', char: 'F', name: 'F', sound: '/ef/', audioUrl: '/audio/f.mp3', exampleWord: 'Fish', exampleTranslation: '鱼' },
  { id: 'g', char: 'G', name: 'G', sound: '/dʒiː/', audioUrl: '/audio/g.mp3', exampleWord: 'Girl', exampleTranslation: '女孩' },
  { id: 'h', char: 'H', name: 'H', sound: '/eɪtʃ/', audioUrl: '/audio/h.mp3', exampleWord: 'Hat', exampleTranslation: '帽子' },
  { id: 'i', char: 'I', name: 'I', sound: '/aɪ/', audioUrl: '/audio/i.mp3', exampleWord: 'Ice', exampleTranslation: '冰' },
  { id: 'j', char: 'J', name: 'J', sound: '/dʒeɪ/', audioUrl: '/audio/j.mp3', exampleWord: 'Juice', exampleTranslation: '果汁' },
  { id: 'k', char: 'K', name: 'K', sound: '/keɪ/', audioUrl: '/audio/k.mp3', exampleWord: 'Kite', exampleTranslation: '风筝' },
  { id: 'l', char: 'L', name: 'L', sound: '/el/', audioUrl: '/audio/l.mp3', exampleWord: 'Lion', exampleTranslation: '狮子' },
  { id: 'm', char: 'M', name: 'M', sound: '/em/', audioUrl: '/audio/m.mp3', exampleWord: 'Monkey', exampleTranslation: '猴子' },
  { id: 'n', char: 'N', name: 'N', sound: '/en/', audioUrl: '/audio/n.mp3', exampleWord: 'Nest', exampleTranslation: '鸟巢' },
  { id: 'o', char: 'O', name: 'O', sound: '/əʊ/', audioUrl: '/audio/o.mp3', exampleWord: 'Orange', exampleTranslation: '橙子' },
  { id: 'p', char: 'P', name: 'P', sound: '/piː/', audioUrl: '/audio/p.mp3', exampleWord: 'Pig', exampleTranslation: '猪' },
  { id: 'q', char: 'Q', name: 'Q', sound: '/kjuː/', audioUrl: '/audio/q.mp3', exampleWord: 'Queen', exampleTranslation: '女王' },
  { id: 'r', char: 'R', name: 'R', sound: '/ɑː/', audioUrl: '/audio/r.mp3', exampleWord: 'Rabbit', exampleTranslation: '兔子' },
  { id: 's', char: 'S', name: 'S', sound: '/es/', audioUrl: '/audio/s.mp3', exampleWord: 'Sun', exampleTranslation: '太阳' },
  { id: 't', char: 'T', name: 'T', sound: '/tiː/', audioUrl: '/audio/t.mp3', exampleWord: 'Tiger', exampleTranslation: '老虎' },
  { id: 'u', char: 'U', name: 'U', sound: '/juː/', audioUrl: '/audio/u.mp3', exampleWord: 'Umbrella', exampleTranslation: '雨伞' },
  { id: 'v', char: 'V', name: 'V', sound: '/viː/', audioUrl: '/audio/v.mp3', exampleWord: 'Violin', exampleTranslation: '小提琴' },
  { id: 'w', char: 'W', name: 'W', sound: '/dʌbljuː/', audioUrl: '/audio/w.mp3', exampleWord: 'Watch', exampleTranslation: '手表' },
  { id: 'x', char: 'X', name: 'X', sound: '/eks/', audioUrl: '/audio/x.mp3', exampleWord: 'X-ray', exampleTranslation: 'X光' },
  { id: 'y', char: 'Y', name: 'Y', sound: '/waɪ/', audioUrl: '/audio/y.mp3', exampleWord: 'Yellow', exampleTranslation: '黄色' },
  { id: 'z', char: 'Z', name: 'Z', sound: '/zed/', audioUrl: '/audio/z.mp3', exampleWord: 'Zebra', exampleTranslation: '斑马' },
];