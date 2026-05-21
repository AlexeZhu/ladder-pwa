// src/data/locales/ko-KR/alphabet.ts
export interface AlphabetItem {
  id: string;
  char: string;
  name: string;
  sound: string;
  type: 'consonant' | 'vowel' | 'compound' | 'syllable';
  exampleWord?: string;
  exampleTranslation?: string;
  components?: string[];
}

// 基础辅音 (14个)
export const consonants: AlphabetItem[] = [
  { id: 'g', char: 'ㄱ', name: '기역', sound: 'g/k', type: 'consonant', exampleWord: '가구', exampleTranslation: '家具' },
  { id: 'n', char: 'ㄴ', name: '니은', sound: 'n', type: 'consonant', exampleWord: '나무', exampleTranslation: '树' },
  { id: 'd', char: 'ㄷ', name: '디귿', sound: 'd/t', type: 'consonant', exampleWord: '다리', exampleTranslation: '腿/桥' },
  { id: 'r', char: 'ㄹ', name: '리을', sound: 'r/l', type: 'consonant', exampleWord: '라디오', exampleTranslation: '收音机' },
  { id: 'm', char: 'ㅁ', name: '미음', sound: 'm', type: 'consonant', exampleWord: '마음', exampleTranslation: '心' },
  { id: 'b', char: 'ㅂ', name: '비읍', sound: 'b/p', type: 'consonant', exampleWord: '바다', exampleTranslation: '海' },
  { id: 's', char: 'ㅅ', name: '시옷', sound: 's', type: 'consonant', exampleWord: '사과', exampleTranslation: '苹果' },
  { id: 'ng', char: 'ㅇ', name: '이응', sound: 'ng/-', type: 'consonant', exampleWord: '아이', exampleTranslation: '孩子' },
  { id: 'j', char: 'ㅈ', name: '지읒', sound: 'j', type: 'consonant', exampleWord: '자동차', exampleTranslation: '汽车' },
  { id: 'ch', char: 'ㅊ', name: '치읓', sound: 'ch', type: 'consonant', exampleWord: '차', exampleTranslation: '茶/车' },
  { id: 'k', char: 'ㅋ', name: '키읔', sound: 'k', type: 'consonant', exampleWord: '카메라', exampleTranslation: '相机' },
  { id: 't', char: 'ㅌ', name: '티읕', sound: 't', type: 'consonant', exampleWord: '토마토', exampleTranslation: '西红柿' },
  { id: 'p', char: 'ㅍ', name: '피읖', sound: 'p', type: 'consonant', exampleWord: '파란색', exampleTranslation: '蓝色' },
  { id: 'h', char: 'ㅎ', name: '히읗', sound: 'h', type: 'consonant', exampleWord: '하늘', exampleTranslation: '天空' },
];

// 基础元音 (10个)
export const vowels: AlphabetItem[] = [
  { id: 'a', char: 'ㅏ', name: '아', sound: 'a', type: 'vowel', exampleWord: '가수', exampleTranslation: '歌手' },
  { id: 'ya', char: 'ㅑ', name: '야', sound: 'ya', type: 'vowel', exampleWord: '야구', exampleTranslation: '棒球' },
  { id: 'eo', char: 'ㅓ', name: '어', sound: 'eo', type: 'vowel', exampleWord: '어머니', exampleTranslation: '母亲' },
  { id: 'yeo', char: 'ㅕ', name: '여', sound: 'yeo', type: 'vowel', exampleWord: '여자', exampleTranslation: '女子' },
  { id: 'o', char: 'ㅗ', name: '오', sound: 'o', type: 'vowel', exampleWord: '오리', exampleTranslation: '鸭子' },
  { id: 'yo', char: 'ㅛ', name: '요', sound: 'yo', type: 'vowel', exampleWord: '요리', exampleTranslation: '料理' },
  { id: 'u', char: 'ㅜ', name: '우', sound: 'u', type: 'vowel', exampleWord: '우유', exampleTranslation: '牛奶' },
  { id: 'yu', char: 'ㅠ', name: '유', sound: 'yu', type: 'vowel', exampleWord: '유리', exampleTranslation: '玻璃' },
  { id: 'eu', char: 'ㅡ', name: '으', sound: 'eu', type: 'vowel', exampleWord: '은행', exampleTranslation: '银行' },
  { id: 'i', char: 'ㅣ', name: '이', sound: 'i', type: 'vowel', exampleWord: '이름', exampleTranslation: '名字' },
];

// 复合元音 (11个)
export const compoundVowels: AlphabetItem[] = [
  { id: 'ae', char: 'ㅐ', name: '애', sound: 'ae', type: 'compound', exampleWord: '애기', exampleTranslation: '婴儿' },
  { id: 'yae', char: 'ㅒ', name: '얘', sound: 'yae', type: 'compound', exampleWord: '얘기', exampleTranslation: '故事' },
  { id: 'e', char: 'ㅔ', name: '에', sound: 'e', type: 'compound', exampleWord: '에어컨', exampleTranslation: '空调' },
  { id: 'ye', char: 'ㅖ', name: '예', sound: 'ye', type: 'compound', exampleWord: '예술', exampleTranslation: '艺术' },
  { id: 'wa', char: 'ㅘ', name: '와', sound: 'wa', type: 'compound', exampleWord: '와인', exampleTranslation: '葡萄酒' },
  { id: 'wae', char: 'ㅙ', name: '왜', sound: 'wae', type: 'compound', exampleWord: '왜', exampleTranslation: '为什么' },
  { id: 'oe', char: 'ㅚ', name: '외', sound: 'oe', type: 'compound', exampleWord: '외국', exampleTranslation: '外国' },
  { id: 'wo', char: 'ㅝ', name: '워', sound: 'wo', type: 'compound', exampleWord: '워크', exampleTranslation: '工作' },
  { id: 'we', char: 'ㅞ', name: '웨', sound: 'we', type: 'compound', exampleWord: '웨이터', exampleTranslation: '服务员' },
  { id: 'wi', char: 'ㅟ', name: '위', sound: 'wi', type: 'compound', exampleWord: '위키', exampleTranslation: '维基' },
  { id: 'ui', char: 'ㅢ', name: '의', sound: 'ui', type: 'compound', exampleWord: '의사', exampleTranslation: '医生' },
];

// 紧音 (5个)
export const tenseConsonants: AlphabetItem[] = [
  { id: 'gg', char: 'ㄲ', name: '쌍기역', sound: 'kk', type: 'consonant', exampleWord: '꼬리', exampleTranslation: '尾巴' },
  { id: 'dd', char: 'ㄸ', name: '쌍디귿', sound: 'tt', type: 'consonant', exampleWord: '따라', exampleTranslation: '跟着' },
  { id: 'bb', char: 'ㅃ', name: '쌍비읍', sound: 'pp', type: 'consonant', exampleWord: '빵', exampleTranslation: '面包' },
  { id: 'ss', char: 'ㅆ', name: '쌍시옷', sound: 'ss', type: 'consonant', exampleWord: '쌀', exampleTranslation: '大米' },
  { id: 'jj', char: 'ㅉ', name: '쌍지읒', sound: 'jj', type: 'consonant', exampleWord: '짜장면', exampleTranslation: '炸酱面' },
];

// 常用音节组合 (辅音+元音)
export const syllables: AlphabetItem[] = [
  // ㄱ系列
  { id: 'ga', char: '가', name: '가', sound: 'ga', type: 'syllable', components: ['ㄱ', 'ㅏ'], exampleWord: '가구', exampleTranslation: '家具' },
  { id: 'gya', char: '갸', name: '갸', sound: 'gya', type: 'syllable', components: ['ㄱ', 'ㅑ'] },
  { id: 'geo', char: '거', name: '거', sound: 'geo', type: 'syllable', components: ['ㄱ', 'ㅓ'], exampleWord: '거리', exampleTranslation: '街道' },
  { id: 'gyeo', char: '겨', name: '겨', sound: 'gyeo', type: 'syllable', components: ['ㄱ', 'ㅕ'] },
  { id: 'go', char: '고', name: '고', sound: 'go', type: 'syllable', components: ['ㄱ', 'ㅗ'], exampleWord: '고양이', exampleTranslation: '猫' },
  { id: 'gyo', char: '교', name: '교', sound: 'gyo', type: 'syllable', components: ['ㄱ', 'ㅛ'], exampleWord: '학교', exampleTranslation: '学校' },
  { id: 'gu', char: '구', name: '구', sound: 'gu', type: 'syllable', components: ['ㄱ', 'ㅜ'], exampleWord: '구두', exampleTranslation: '皮鞋' },
  { id: 'gyu', char: '규', name: '규', sound: 'gyu', type: 'syllable', components: ['ㄱ', 'ㅠ'] },
  { id: 'geu', char: '그', name: '그', sound: 'geu', type: 'syllable', components: ['ㄱ', 'ㅡ'], exampleWord: '그림', exampleTranslation: '画' },
  { id: 'gi', char: '기', name: '기', sound: 'gi', type: 'syllable', components: ['ㄱ', 'ㅣ'], exampleWord: '기차', exampleTranslation: '火车' },
  
  // ㄴ系列
  { id: 'na', char: '나', name: '나', sound: 'na', type: 'syllable', components: ['ㄴ', 'ㅏ'], exampleWord: '나무', exampleTranslation: '树' },
  { id: 'neo', char: '너', name: '너', sound: 'neo', type: 'syllable', components: ['ㄴ', 'ㅓ'], exampleWord: '너구리', exampleTranslation: '浣熊' },
  { id: 'no', char: '노', name: '노', sound: 'no', type: 'syllable', components: ['ㄴ', 'ㅗ'], exampleWord: '노래', exampleTranslation: '歌曲' },
  { id: 'nu', char: '누', name: '누', sound: 'nu', type: 'syllable', components: ['ㄴ', 'ㅜ'], exampleWord: '누나', exampleTranslation: '姐姐' },
  { id: 'neu', char: '느', name: '느', sound: 'neu', type: 'syllable', components: ['ㄴ', 'ㅡ'] },
  { id: 'ni', char: '니', name: '니', sound: 'ni', type: 'syllable', components: ['ㄴ', 'ㅣ'], exampleWord: '니가', exampleTranslation: '你' },
  
  // ㄷ系列
  { id: 'da', char: '다', name: '다', sound: 'da', type: 'syllable', components: ['ㄷ', 'ㅏ'], exampleWord: '다리', exampleTranslation: '腿' },
  { id: 'deo', char: '더', name: '더', sound: 'deo', type: 'syllable', components: ['ㄷ', 'ㅓ'], exampleWord: '더하기', exampleTranslation: '加' },
  { id: 'do', char: '도', name: '도', sound: 'do', type: 'syllable', components: ['ㄷ', 'ㅗ'], exampleWord: '도시', exampleTranslation: '城市' },
  { id: 'du', char: '두', name: '두', sound: 'du', type: 'syllable', components: ['ㄷ', 'ㅜ'], exampleWord: '두부', exampleTranslation: '豆腐' },
  { id: 'deu', char: '드', name: '드', sound: 'deu', type: 'syllable', components: ['ㄷ', 'ㅡ'], exampleWord: '드라마', exampleTranslation: '电视剧' },
  { id: 'di', char: '디', name: '디', sound: 'di', type: 'syllable', components: ['ㄷ', 'ㅣ'], exampleWord: '디자인', exampleTranslation: '设计' },
  
  // ㄹ系列
  { id: 'ra', char: '라', name: '라', sound: 'ra', type: 'syllable', components: ['ㄹ', 'ㅏ'], exampleWord: '라디오', exampleTranslation: '收音机' },
  { id: 'reo', char: '러', name: '러', sound: 'reo', type: 'syllable', components: ['ㄹ', 'ㅓ'] },
  { id: 'ro', char: '로', name: '로', sound: 'ro', type: 'syllable', components: ['ㄹ', 'ㅗ'] },
  { id: 'ru', char: '루', name: '루', sound: 'ru', type: 'syllable', components: ['ㄹ', 'ㅜ'] },
  { id: 'reu', char: '르', name: '르', sound: 'reu', type: 'syllable', components: ['ㄹ', 'ㅡ'] },
  { id: 'ri', char: '리', name: '리', sound: 'ri', type: 'syllable', components: ['ㄹ', 'ㅣ'], exampleWord: '리본', exampleTranslation: '丝带' },
  
  // ㅁ系列
  { id: 'ma', char: '마', name: '마', sound: 'ma', type: 'syllable', components: ['ㅁ', 'ㅏ'], exampleWord: '마음', exampleTranslation: '心' },
  { id: 'meo', char: '머', name: '머', sound: 'meo', type: 'syllable', components: ['ㅁ', 'ㅓ'], exampleWord: '머리', exampleTranslation: '头' },
  { id: 'mo', char: '모', name: '모', sound: 'mo', type: 'syllable', components: ['ㅁ', 'ㅗ'], exampleWord: '모자', exampleTranslation: '帽子' },
  { id: 'mu', char: '무', name: '무', sound: 'mu', type: 'syllable', components: ['ㅁ', 'ㅜ'], exampleWord: '무슨', exampleTranslation: '什么' },
  { id: 'meu', char: '므', name: '므', sound: 'meu', type: 'syllable', components: ['ㅁ', 'ㅡ'] },
  { id: 'mi', char: '미', name: '미', sound: 'mi', type: 'syllable', components: ['ㅁ', 'ㅣ'], exampleWord: '미소', exampleTranslation: '微笑' },
  
  // ㅂ系列
  { id: 'ba', char: '바', name: '바', sound: 'ba', type: 'syllable', components: ['ㅂ', 'ㅏ'], exampleWord: '바다', exampleTranslation: '海' },
  { id: 'beo', char: '버', name: '버', sound: 'beo', type: 'syllable', components: ['ㅂ', 'ㅓ'], exampleWord: '버스', exampleTranslation: '公交车' },
  { id: 'bo', char: '보', name: '보', sound: 'bo', type: 'syllable', components: ['ㅂ', 'ㅗ'], exampleWord: '보다', exampleTranslation: '看' },
  { id: 'bu', char: '부', name: '부', sound: 'bu', type: 'syllable', components: ['ㅂ', 'ㅜ'], exampleWord: '부모', exampleTranslation: '父母' },
  { id: 'beu', char: '브', name: '브', sound: 'beu', type: 'syllable', components: ['ㅂ', 'ㅡ'] },
  { id: 'bi', char: '비', name: '비', sound: 'bi', type: 'syllable', components: ['ㅂ', 'ㅣ'], exampleWord: '비행기', exampleTranslation: '飞机' },
  
  // ㅅ系列
  { id: 'sa', char: '사', name: '사', sound: 'sa', type: 'syllable', components: ['ㅅ', 'ㅏ'], exampleWord: '사과', exampleTranslation: '苹果' },
  { id: 'seo', char: '서', name: '서', sound: 'seo', type: 'syllable', components: ['ㅅ', 'ㅓ'], exampleWord: '서울', exampleTranslation: '首尔' },
  { id: 'so', char: '소', name: '소', sound: 'so', type: 'syllable', components: ['ㅅ', 'ㅗ'], exampleWord: '소리', exampleTranslation: '声音' },
  { id: 'su', char: '수', name: '수', sound: 'su', type: 'syllable', components: ['ㅅ', 'ㅜ'], exampleWord: '수박', exampleTranslation: '西瓜' },
  { id: 'seu', char: '스', name: '스', sound: 'seu', type: 'syllable', components: ['ㅅ', 'ㅡ'], exampleWord: '스타', exampleTranslation: '明星' },
  { id: 'si', char: '시', name: '시', sound: 'si', type: 'syllable', components: ['ㅅ', 'ㅣ'], exampleWord: '시간', exampleTranslation: '时间' },
  
  // ㅇ系列
  { id: 'a_syl', char: '아', name: '아', sound: 'a', type: 'syllable', components: ['ㅇ', 'ㅏ'], exampleWord: '아이', exampleTranslation: '孩子' },
  { id: 'ya_syl', char: '야', name: '야', sound: 'ya', type: 'syllable', components: ['ㅇ', 'ㅑ'], exampleWord: '야구', exampleTranslation: '棒球' },
  { id: 'eo_syl', char: '어', name: '어', sound: 'eo', type: 'syllable', components: ['ㅇ', 'ㅓ'], exampleWord: '어머니', exampleTranslation: '母亲' },
  { id: 'yeo_syl', char: '여', name: '여', sound: 'yeo', type: 'syllable', components: ['ㅇ', 'ㅕ'], exampleWord: '여자', exampleTranslation: '女子' },
  { id: 'o_syl', char: '오', name: '오', sound: 'o', type: 'syllable', components: ['ㅇ', 'ㅗ'], exampleWord: '오리', exampleTranslation: '鸭子' },
  { id: 'yo_syl', char: '요', name: '요', sound: 'yo', type: 'syllable', components: ['ㅇ', 'ㅛ'], exampleWord: '요리', exampleTranslation: '料理' },
  { id: 'u_syl', char: '우', name: '우', sound: 'u', type: 'syllable', components: ['ㅇ', 'ㅜ'], exampleWord: '우유', exampleTranslation: '牛奶' },
  { id: 'yu_syl', char: '유', name: '유', sound: 'yu', type: 'syllable', components: ['ㅇ', 'ㅠ'], exampleWord: '유리', exampleTranslation: '玻璃' },
  { id: 'eu_syl', char: '으', name: '으', sound: 'eu', type: 'syllable', components: ['ㅇ', 'ㅡ'] },
  { id: 'i_syl', char: '이', name: '이', sound: 'i', type: 'syllable', components: ['ㅇ', 'ㅣ'], exampleWord: '이름', exampleTranslation: '名字' },
  
  // ㅈ系列
  { id: 'ja', char: '자', name: '자', sound: 'ja', type: 'syllable', components: ['ㅈ', 'ㅏ'], exampleWord: '자동차', exampleTranslation: '汽车' },
  { id: 'jeo', char: '저', name: '저', sound: 'jeo', type: 'syllable', components: ['ㅈ', 'ㅓ'], exampleWord: '저녁', exampleTranslation: '晚上' },
  { id: 'jo', char: '조', name: '조', sound: 'jo', type: 'syllable', components: ['ㅈ', 'ㅗ'], exampleWord: '조용하다', exampleTranslation: '安静' },
  { id: 'ju', char: '주', name: '주', sound: 'ju', type: 'syllable', components: ['ㅈ', 'ㅜ'], exampleWord: '주말', exampleTranslation: '周末' },
  { id: 'jeu', char: '즈', name: '즈', sound: 'jeu', type: 'syllable', components: ['ㅈ', 'ㅡ'] },
  { id: 'ji', char: '지', name: '지', sound: 'ji', type: 'syllable', components: ['ㅈ', 'ㅣ'], exampleWord: '지도', exampleTranslation: '地图' },
  
  // ㅊ系列
  { id: 'cha', char: '차', name: '차', sound: 'cha', type: 'syllable', components: ['ㅊ', 'ㅏ'], exampleWord: '차', exampleTranslation: '茶' },
  { id: 'cheo', char: '처', name: '처', sound: 'cheo', type: 'syllable', components: ['ㅊ', 'ㅓ'], exampleWord: '처음', exampleTranslation: '初次' },
  { id: 'cho', char: '초', name: '초', sound: 'cho', type: 'syllable', components: ['ㅊ', 'ㅗ'], exampleWord: '초콜릿', exampleTranslation: '巧克力' },
  { id: 'chu', char: '추', name: '추', sound: 'chu', type: 'syllable', components: ['ㅊ', 'ㅜ'], exampleWord: '추억', exampleTranslation: '回忆' },
  { id: 'cheu', char: '츠', name: '츠', sound: 'cheu', type: 'syllable', components: ['ㅊ', 'ㅡ'] },
  { id: 'chi', char: '치', name: '치', sound: 'chi', type: 'syllable', components: ['ㅊ', 'ㅣ'], exampleWord: '치즈', exampleTranslation: '奶酪' },
  
  // ㅋ系列
  { id: 'ka', char: '카', name: '카', sound: 'ka', type: 'syllable', components: ['ㅋ', 'ㅏ'], exampleWord: '카메라', exampleTranslation: '相机' },
  { id: 'keo', char: '커', name: '커', sound: 'keo', type: 'syllable', components: ['ㅋ', 'ㅓ'], exampleWord: '커피', exampleTranslation: '咖啡' },
  { id: 'ko', char: '코', name: '코', sound: 'ko', type: 'syllable', components: ['ㅋ', 'ㅗ'], exampleWord: '코끼리', exampleTranslation: '大象' },
  
  // ㅌ系列
  { id: 'ta', char: '타', name: '타', sound: 'ta', type: 'syllable', components: ['ㅌ', 'ㅏ'], exampleWord: '타다', exampleTranslation: '乘坐' },
  { id: 'teo', char: '터', name: '터', sound: 'teo', type: 'syllable', components: ['ㅌ', 'ㅓ'], exampleWord: '터미널', exampleTranslation: '航站楼' },
  { id: 'to', char: '토', name: '토', sound: 'to', type: 'syllable', components: ['ㅌ', 'ㅗ'], exampleWord: '토마토', exampleTranslation: '西红柿' },
  
  // ㅍ系列
  { id: 'pa', char: '파', name: '파', sound: 'pa', type: 'syllable', components: ['ㅍ', 'ㅏ'], exampleWord: '파란색', exampleTranslation: '蓝色' },
  { id: 'peo', char: '퍼', name: '퍼', sound: 'peo', type: 'syllable', components: ['ㅍ', 'ㅓ'] },
  { id: 'po', char: '포', name: '포', sound: 'po', type: 'syllable', components: ['ㅍ', 'ㅗ'], exampleWord: '포도', exampleTranslation: '葡萄' },
  
  // ㅎ系列
  { id: 'ha', char: '하', name: '하', sound: 'ha', type: 'syllable', components: ['ㅎ', 'ㅏ'], exampleWord: '하늘', exampleTranslation: '天空' },
  { id: 'heo', char: '허', name: '허', sound: 'heo', type: 'syllable', components: ['ㅎ', 'ㅓ'], exampleWord: '허리', exampleTranslation: '腰' },
  { id: 'ho', char: '호', name: '호', sound: 'ho', type: 'syllable', components: ['ㅎ', 'ㅗ'], exampleWord: '호수', exampleTranslation: '湖' },
  { id: 'hu', char: '후', name: '후', sound: 'hu', type: 'syllable', components: ['ㅎ', 'ㅜ'], exampleWord: '후회', exampleTranslation: '后悔' },
  { id: 'heu', char: '흐', name: '흐', sound: 'heu', type: 'syllable', components: ['ㅎ', 'ㅡ'] },
  { id: 'hi', char: '히', name: '히', sound: 'hi', type: 'syllable', components: ['ㅎ', 'ㅣ'], exampleWord: '히트', exampleTranslation: '热门' },
];

// 收音 (받침) - 7个代表音
export const batchims: AlphabetItem[] = [
  { id: 'batchim_g', char: 'ㄱ', name: '기읏', sound: 'k', type: 'consonant', exampleWord: '밖', exampleTranslation: '外面' },
  { id: 'batchim_n', char: 'ㄴ', name: '니은', sound: 'n', type: 'consonant', exampleWord: '안', exampleTranslation: '里面' },
  { id: 'batchim_d', char: 'ㄷ', name: '디귿', sound: 't', type: 'consonant', exampleWord: '끝', exampleTranslation: '结束' },
  { id: 'batchim_l', char: 'ㄹ', name: '리을', sound: 'l', type: 'consonant', exampleWord: '말', exampleTranslation: '话' },
  { id: 'batchim_m', char: 'ㅁ', name: '미음', sound: 'm', type: 'consonant', exampleWord: '집', exampleTranslation: '家' },
  { id: 'batchim_b', char: 'ㅂ', name: '비읍', sound: 'p', type: 'consonant', exampleWord: '입', exampleTranslation: '嘴' },
  { id: 'batchim_ng', char: 'ㅇ', name: '이응', sound: 'ng', type: 'consonant', exampleWord: '강', exampleTranslation: '江' },
];

// 完整字母表（按学习顺序）
export const alphabetData: AlphabetItem[] = [
  ...consonants,
  ...vowels,
  ...compoundVowels,
  ...tenseConsonants,
  ...syllables,
  ...batchims,
];