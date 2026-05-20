// src/data/locales/ko-KR/alphabet.ts
export interface AlphabetItem {
  id: string;
  char: string;
  name: string;
  sound: string;
  audioUrl: string;
  exampleWord: string;
  exampleTranslation: string;
}

// 韩语基础辅音和元音（先提供14个基础辅音+10个基础元音）
export const alphabetData: AlphabetItem[] = [
  // 基础辅音
  { id: 'g', char: 'ㄱ', name: 'giyeok', sound: 'g/k', audioUrl: '/audio/ko/g.mp3', exampleWord: '가구', exampleTranslation: '家具' },
  { id: 'n', char: 'ㄴ', name: 'nieun', sound: 'n', audioUrl: '/audio/ko/n.mp3', exampleWord: '나무', exampleTranslation: '树' },
  { id: 'd', char: 'ㄷ', name: 'digeut', sound: 'd/t', audioUrl: '/audio/ko/d.mp3', exampleWord: '다리', exampleTranslation: '腿/桥' },
  { id: 'r', char: 'ㄹ', name: 'rieul', sound: 'r/l', audioUrl: '/audio/ko/r.mp3', exampleWord: '라디오', exampleTranslation: '收音机' },
  { id: 'm', char: 'ㅁ', name: 'mieum', sound: 'm', audioUrl: '/audio/ko/m.mp3', exampleWord: '마음', exampleTranslation: '心' },
  { id: 'b', char: 'ㅂ', name: 'bieup', sound: 'b/p', audioUrl: '/audio/ko/b.mp3', exampleWord: '바다', exampleTranslation: '海' },
  { id: 's', char: 'ㅅ', name: 'siot', sound: 's', audioUrl: '/audio/ko/s.mp3', exampleWord: '사과', exampleTranslation: '苹果' },
  { id: 'ng', char: 'ㅇ', name: 'ieung', sound: 'ng/-', audioUrl: '/audio/ko/ng.mp3', exampleWord: '아이', exampleTranslation: '孩子' },
  { id: 'j', char: 'ㅈ', name: 'jieut', sound: 'j', audioUrl: '/audio/ko/j.mp3', exampleWord: '자동차', exampleTranslation: '汽车' },
  { id: 'ch', char: 'ㅊ', name: 'chieut', sound: 'ch', audioUrl: '/audio/ko/ch.mp3', exampleWord: '차', exampleTranslation: '茶/车' },
  { id: 'k', char: 'ㅋ', name: 'kieuk', sound: 'k', audioUrl: '/audio/ko/k.mp3', exampleWord: '카메라', exampleTranslation: '相机' },
  { id: 't', char: 'ㅌ', name: 'tieut', sound: 't', audioUrl: '/audio/ko/t.mp3', exampleWord: '토마토', exampleTranslation: '西红柿' },
  { id: 'p', char: 'ㅍ', name: 'pieup', sound: 'p', audioUrl: '/audio/ko/p.mp3', exampleWord: '파란색', exampleTranslation: '蓝色' },
  { id: 'h', char: 'ㅎ', name: 'hieut', sound: 'h', audioUrl: '/audio/ko/h.mp3', exampleWord: '하늘', exampleTranslation: '天空' },
  
  // 基础元音
  { id: 'a', char: 'ㅏ', name: 'a', sound: 'a', audioUrl: '/audio/ko/a.mp3', exampleWord: '가수', exampleTranslation: '歌手' },
  { id: 'ya', char: 'ㅑ', name: 'ya', sound: 'ya', audioUrl: '/audio/ko/ya.mp3', exampleWord: '야구', exampleTranslation: '棒球' },
  { id: 'eo', char: 'ㅓ', name: 'eo', sound: 'eo', audioUrl: '/audio/ko/eo.mp3', exampleWord: '어머니', exampleTranslation: '母亲' },
  { id: 'yeo', char: 'ㅕ', name: 'yeo', sound: 'yeo', audioUrl: '/audio/ko/yeo.mp3', exampleWord: '여자', exampleTranslation: '女子' },
  { id: 'o', char: 'ㅗ', name: 'o', sound: 'o', audioUrl: '/audio/ko/o.mp3', exampleWord: '오리', exampleTranslation: '鸭子' },
  { id: 'yo', char: 'ㅛ', name: 'yo', sound: 'yo', audioUrl: '/audio/ko/yo.mp3', exampleWord: '요리', exampleTranslation: '料理' },
  { id: 'u', char: 'ㅜ', name: 'u', sound: 'u', audioUrl: '/audio/ko/u.mp3', exampleWord: '우유', exampleTranslation: '牛奶' },
  { id: 'yu', char: 'ㅠ', name: 'yu', sound: 'yu', audioUrl: '/audio/ko/yu.mp3', exampleWord: '유리', exampleTranslation: '玻璃' },
  { id: 'eu', char: 'ㅡ', name: 'eu', sound: 'eu', audioUrl: '/audio/ko/eu.mp3', exampleWord: '은행', exampleTranslation: '银行' },
  { id: 'i', char: 'ㅣ', name: 'i', sound: 'i', audioUrl: '/audio/ko/i.mp3', exampleWord: '이름', exampleTranslation: '名字' },
];