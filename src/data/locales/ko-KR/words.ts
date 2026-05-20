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
  { id: 'greetings', name: '👋 인사', icon: '👋', color: '#FF6B6B' },
  { id: 'numbers', name: '🔢 숫자', icon: '1️⃣', color: '#4ECDC4' },
  { id: 'family', name: '👨‍👩‍👧 가족', icon: '👪', color: '#45B7D1' },
  { id: 'food', name: '🍜 음식', icon: '🍚', color: '#96CEB4' },
  { id: 'daily', name: '📅 일상', icon: '☀️', color: '#FFEAA7' },
  { id: 'colors', name: '🎨 색깔', icon: '🌈', color: '#DFE6E9' },
];

export const wordData: WordItem[] = [
  // 问候
  { id: 'annyeong', word: '안녕하세요', translation: '你好', pronunciation: 'annyeonghaseyo', partOfSpeech: '问候', exampleSentence: '안녕하세요, 만나서 반갑습니다.', exampleTranslation: '你好，很高兴见到你。', group: 'greetings' },
  { id: 'kamsahamnida', word: '감사합니다', translation: '谢谢', pronunciation: 'kamsahamnida', partOfSpeech: '问候', exampleSentence: '도와주셔서 감사합니다.', exampleTranslation: '感谢您的帮助。', group: 'greetings' },
  { id: 'joesonghamnida', word: '죄송합니다', translation: '对不起', pronunciation: 'joesonghamnida', partOfSpeech: '问候', exampleSentence: '죄송합니다, 늦었어요.', exampleTranslation: '对不起，我迟到了。', group: 'greetings' },
  { id: 'annyeong', word: '안녕', translation: '你好/再见(非正式)', pronunciation: 'annyeong', partOfSpeech: '问候', exampleSentence: '안녕, 잘 지내?', exampleTranslation: '你好，过得好吗？', group: 'greetings' },
  
  // 数字
  { id: 'hana', word: '하나', translation: '一', pronunciation: 'hana', partOfSpeech: '数词', exampleSentence: '사과 하나 주세요.', exampleTranslation: '请给我一个苹果。', group: 'numbers' },
  { id: 'dul', word: '둘', translation: '二', pronunciation: 'dul', partOfSpeech: '数词', exampleSentence: '둘 셋', exampleTranslation: '二、三', group: 'numbers' },
  { id: 'set', word: '셋', translation: '三', pronunciation: 'set', partOfSpeech: '数词', exampleSentence: '셋이서 영화 봤어요.', exampleTranslation: '三个人一起看了电影。', group: 'numbers' },
  { id: 'net', word: '넷', translation: '四', pronunciation: 'net', partOfSpeech: '数词', exampleSentence: '넷째 날', exampleTranslation: '第四天', group: 'numbers' },
  { id: 'daseot', word: '다섯', translation: '五', pronunciation: 'daseot', partOfSpeech: '数词', exampleSentence: '다섯 명', exampleTranslation: '五个人', group: 'numbers' },
  
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
  { id: 'kim', word: '김', translation: '紫菜', pronunciation: 'kim', partOfSpeech: '名词', exampleSentence: '김으로 밥을 싸요.', exampleTranslation: '用紫菜包饭。', group: 'food' },
  
  // 日常动词
  { id: 'meokda', word: '먹다', translation: '吃', pronunciation: 'meokda', partOfSpeech: '动词', exampleSentence: '사과를 먹어요.', exampleTranslation: '吃苹果。', group: 'daily' },
  { id: 'mashida', word: '마시다', translation: '喝', pronunciation: 'mashida', partOfSpeech: '动词', exampleSentence: '물을 마셔요.', exampleTranslation: '喝水。', group: 'daily' },
  { id: 'gada', word: '가다', translation: '去', pronunciation: 'gada', partOfSpeech: '动词', exampleSentence: '학교에 가요.', exampleTranslation: '去学校。', group: 'daily' },
  { id: 'oda', word: '오다', translation: '来', pronunciation: 'oda', partOfSpeech: '动词', exampleSentence: '집에 와요.', exampleTranslation: '回家。', group: 'daily' },
  { id: 'boda', word: '보다', translation: '看', pronunciation: 'boda', partOfSpeech: '动词', exampleSentence: '영화를 봐요.', exampleTranslation: '看电影。', group: 'daily' },
  { id: 'deutda', word: '듣다', translation: '听', pronunciation: 'deutda', partOfSpeech: '动词', exampleSentence: '음악을 들어요.', exampleTranslation: '听音乐。', group: 'daily' },
  { id: 'jalda', word: '자다', translation: '睡觉', pronunciation: 'jalda', partOfSpeech: '动词', exampleSentence: '일찍 자요.', exampleTranslation: '早睡。', group: 'daily' },
  
  // 颜色
  { id: 'bbalgang', word: '빨간색', translation: '红色', pronunciation: 'ppalgansaek', partOfSpeech: '名词', exampleSentence: '빨간색 장미', exampleTranslation: '红玫瑰', group: 'colors' },
  { id: 'parang', word: '파란색', translation: '蓝色', pronunciation: 'paransaek', partOfSpeech: '名词', exampleSentence: '파란색 하늘', exampleTranslation: '蓝色的天空', group: 'colors' },
  { id: 'norang', word: '노란색', translation: '黄色', pronunciation: 'noransaek', partOfSpeech: '名词', exampleSentence: '노란색 꽃', exampleTranslation: '黄色的花', group: 'colors' },
  { id: 'chorok', word: '초록색', translation: '绿色', pronunciation: 'choroksaek', partOfSpeech: '名词', exampleSentence: '초록색 나무', exampleTranslation: '绿色的树', group: 'colors' },
  { id: 'geomjeong', word: '검정색', translation: '黑色', pronunciation: 'geomjeongsaek', partOfSpeech: '名词', exampleSentence: '검정색 옷', exampleTranslation: '黑色的衣服', group: 'colors' },
  { id: 'hayang', word: '하얀색', translation: '白色', pronunciation: 'hayansaek', partOfSpeech: '名词', exampleSentence: '하얀색 눈', exampleTranslation: '白色的雪', group: 'colors' },
];