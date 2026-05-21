// src/data/locales/ko-KR/words.ts
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
  { id: 'syllables', name: '📖 音节练习', icon: '🔤', color: '#FF6B6B' },
  { id: 'greetings', name: '👋 问候', icon: '👋', color: '#4ECDC4' },
  { id: 'numbers', name: '🔢 数字', icon: '1️⃣', color: '#45B7D1' },
  { id: 'family', name: '👨‍👩‍👧 家庭', icon: '👪', color: '#96CEB4' },
  { id: 'food', name: '🍜 食物', icon: '🍚', color: '#FFEAA7' },
  { id: 'daily', name: '📅 日常', icon: '☀️', color: '#DFE6E9' },
];

export const wordData: WordItem[] = [
  // 音节练习组 - 基础词汇
  { id: 'ga', word: '가', translation: '家/去', pronunciation: 'ga', partOfSpeech: '词根', exampleSentence: '집에 가요.', exampleTranslation: '回家。', group: 'syllables' },
  { id: 'na', word: '나', translation: '我', pronunciation: 'na', partOfSpeech: '代词', exampleSentence: '나는 학생입니다.', exampleTranslation: '我是学生。', group: 'syllables' },
  { id: 'da', word: '다', translation: '全部/都', pronunciation: 'da', partOfSpeech: '副词', exampleSentence: '다 좋아요.', exampleTranslation: '都好。', group: 'syllables' },
  { id: 'ma', word: '마', translation: '麻/魔', pronunciation: 'ma', partOfSpeech: '词根', exampleSentence: '마음', exampleTranslation: '心', group: 'syllables' },
  { id: 'ba', word: '바', translation: '吧/场', pronunciation: 'ba', partOfSpeech: '词根', exampleSentence: '바다', exampleTranslation: '海', group: 'syllables' },
  { id: 'sa', word: '사', translation: '四/社', pronunciation: 'sa', partOfSpeech: '数词', exampleSentence: '사과', exampleTranslation: '苹果', group: 'syllables' },
  { id: 'a', word: '아', translation: '啊/孩子', pronunciation: 'a', partOfSpeech: '感叹词', exampleSentence: '아이', exampleTranslation: '孩子', group: 'syllables' },
  { id: 'ja', word: '자', translation: '尺/自', pronunciation: 'ja', partOfSpeech: '词根', exampleSentence: '자동차', exampleTranslation: '汽车', group: 'syllables' },
  { id: 'cha', word: '차', translation: '茶/车', pronunciation: 'cha', partOfSpeech: '名词', exampleSentence: '차를 마셔요.', exampleTranslation: '喝茶。', group: 'syllables' },
  { id: 'ka', word: '카', translation: '卡/车', pronunciation: 'ka', partOfSpeech: '词根', exampleSentence: '카메라', exampleTranslation: '相机', group: 'syllables' },
  { id: 'ta', word: '타', translation: '乘/打', pronunciation: 'ta', partOfSpeech: '动词', exampleSentence: '버스를 타요.', exampleTranslation: '坐公交车。', group: 'syllables' },
  { id: 'pa', word: '파', translation: '葱/波', pronunciation: 'pa', partOfSpeech: '名词', exampleSentence: '파란색', exampleTranslation: '蓝色', group: 'syllables' },
  { id: 'ha', word: '하', translation: '做/下', pronunciation: 'ha', partOfSpeech: '动词', exampleSentence: '하다', exampleTranslation: '做', group: 'syllables' },
  
  // 问候
  { id: 'annyeong', word: '안녕하세요', translation: '你好', pronunciation: 'annyeonghaseyo', partOfSpeech: '问候', exampleSentence: '안녕하세요, 만나서 반갑습니다.', exampleTranslation: '你好，很高兴见到你。', group: 'greetings' },
  { id: 'kamsa', word: '감사합니다', translation: '谢谢', pronunciation: 'kamsahamnida', partOfSpeech: '问候', exampleSentence: '도와주셔서 감사합니다.', exampleTranslation: '感谢您的帮助。', group: 'greetings' },
  { id: 'joesong', word: '죄송합니다', translation: '对不起', pronunciation: 'joesonghamnida', partOfSpeech: '问候', exampleSentence: '죄송합니다, 늦었어요.', exampleTranslation: '对不起，我迟到了。', group: 'greetings' },
  
  // 数字
  { id: 'il', word: '일', translation: '一', pronunciation: 'il', partOfSpeech: '数词', exampleSentence: '일, 이, 삼', exampleTranslation: '一、二、三', group: 'numbers' },
  { id: 'i', word: '이', translation: '二', pronunciation: 'i', partOfSpeech: '数词', exampleSentence: '이 개', exampleTranslation: '两个', group: 'numbers' },
  { id: 'sam', word: '삼', translation: '三', pronunciation: 'sam', partOfSpeech: '数词', exampleSentence: '삼 일', exampleTranslation: '三天', group: 'numbers' },
  { id: 'sa_num', word: '사', translation: '四', pronunciation: 'sa', partOfSpeech: '数词', exampleSentence: '사 월', exampleTranslation: '四月', group: 'numbers' },
  { id: 'o', word: '오', translation: '五', pronunciation: 'o', partOfSpeech: '数词', exampleSentence: '오 분', exampleTranslation: '五分钟', group: 'numbers' },
  
  // 家庭
  { id: 'eomeoni', word: '어머니', translation: '母亲', pronunciation: 'eomeoni', partOfSpeech: '名词', exampleSentence: '제 어머니는 요리를 잘하세요.', exampleTranslation: '我的母亲很会做饭。', group: 'family' },
  { id: 'abeoji', word: '아버지', translation: '父亲', pronunciation: 'abeoji', partOfSpeech: '名词', exampleSentence: '아버지께서 일하고 계세요.', exampleTranslation: '父亲在工作。', group: 'family' },
  { id: 'nuna', word: '누나', translation: '姐姐(男叫)', pronunciation: 'nuna', partOfSpeech: '名词', exampleSentence: '누나가 예뻐요.', exampleTranslation: '姐姐很漂亮。', group: 'family' },
  { id: 'oppa', word: '오빠', translation: '哥哥(女叫)', pronunciation: 'oppa', partOfSpeech: '名词', exampleSentence: '오빠가 키가 커요.', exampleTranslation: '哥哥个子很高。', group: 'family' },
  
  // 食物
  { id: 'bap', word: '밥', translation: '饭/餐', pronunciation: 'bap', partOfSpeech: '名词', exampleSentence: '밥 먹었어요?', exampleTranslation: '吃饭了吗？', group: 'food' },
  { id: 'kimchi', word: '김치', translation: '泡菜', pronunciation: 'kimchi', partOfSpeech: '名词', exampleSentence: '김치가 매워요.', exampleTranslation: '泡菜很辣。', group: 'food' },
  { id: 'bulgogi', word: '불고기', translation: '烤肉', pronunciation: 'bulgogi', partOfSpeech: '名词', exampleSentence: '불고기를 좋아해요.', exampleTranslation: '喜欢烤肉。', group: 'food' },
  { id: 'ramyeon', word: '라면', translation: '拉面', pronunciation: 'ramyeon', partOfSpeech: '名词', exampleSentence: '라면이 맛있어요.', exampleTranslation: '拉面很好吃。', group: 'food' },
  
  // 日常动词
  { id: 'meokda', word: '먹다', translation: '吃', pronunciation: 'meokda', partOfSpeech: '动词', exampleSentence: '사과를 먹어요.', exampleTranslation: '吃苹果。', group: 'daily' },
  { id: 'mashida', word: '마시다', translation: '喝', pronunciation: 'mashida', partOfSpeech: '动词', exampleSentence: '물을 마셔요.', exampleTranslation: '喝水。', group: 'daily' },
  { id: 'gada', word: '가다', translation: '去', pronunciation: 'gada', partOfSpeech: '动词', exampleSentence: '학교에 가요.', exampleTranslation: '去学校。', group: 'daily' },
  { id: 'boda', word: '보다', translation: '看', pronunciation: 'boda', partOfSpeech: '动词', exampleSentence: '영화를 봐요.', exampleTranslation: '看电影。', group: 'daily' },
];