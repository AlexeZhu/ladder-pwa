// src/data/locales/ko-KR/sentences.ts
export interface SentenceItem {
  id: string;
  text: string;
  translation: string;
  audioUrl?: string;
  grammarNote?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  keywords: string[];
}

export const sentenceData: SentenceItem[] = [
  // 初级
  { id: 'k1', text: '안녕하세요.', translation: '你好。', difficulty: 'beginner', keywords: ['안녕'], grammarNote: '正式问候语' },
  { id: 'k2', text: '감사합니다.', translation: '谢谢。', difficulty: 'beginner', keywords: ['감사'], grammarNote: '感谢表达' },
  { id: 'k3', text: '죄송합니다.', translation: '对不起。', difficulty: 'beginner', keywords: ['죄송'], grammarNote: '道歉用语' },
  { id: 'k4', text: '괜찮아요.', translation: '没关系/可以。', difficulty: 'beginner', keywords: ['괜찮'], grammarNote: '回应道歉' },
  { id: 'k5', text: '이름이 무엇입니까?', translation: '你叫什么名字？', difficulty: 'beginner', keywords: ['이름'], grammarNote: '询问名字' },
  { id: 'k6', text: '제 이름은 철수입니다.', translation: '我的名字是哲秀。', difficulty: 'beginner', keywords: ['이름'], grammarNote: '自我介绍' },
  { id: 'k7', text: '어디에서 왔습니까?', translation: '你从哪里来？', difficulty: 'beginner', keywords: ['어디'], grammarNote: '询问国籍' },
  { id: 'k8', text: '한국에서 왔습니다.', translation: '我来自韩国。', difficulty: 'beginner', keywords: ['한국'], grammarNote: '回答国籍' },
  
  // 中级
  { id: 'k9', text: '오늘 날씨가 좋네요.', translation: '今天天气真好呢。', difficulty: 'intermediate', keywords: ['날씨'], grammarNote: '感叹句式「〜네요」' },
  { id: 'k10', text: '한국어를 공부하고 있어요.', translation: '我正在学习韩语。', difficulty: 'intermediate', keywords: ['공부'], grammarNote: '고 있다进行时' },
  { id: 'k11', text: '무슨 음식을 좋아하세요?', translation: '你喜欢什么食物？', difficulty: 'intermediate', keywords: ['음식'], grammarNote: '疑问句「무슨〜」' },
  { id: 'k12', text: '주말에 뭐 할 거예요?', translation: '周末要做什么？', difficulty: 'intermediate', keywords: ['주말'], grammarNote: '将来时「〜ㄹ 거예요」' },
  { id: 'k13', text: '영화 보러 갈래요?', translation: '要去看电影吗？', difficulty: 'intermediate', keywords: ['영화'], grammarNote: '提议句式「〜ㄹ래요」' },
  { id: 'k14', text: '함께 밥 먹어요.', translation: '一起吃饭吧。', difficulty: 'intermediate', keywords: ['함께'], grammarNote: '提议「〜어요」' },
  
  // 高级
  { id: 'k15', text: '여보세요, 김 선생님 계세요?', translation: '喂，金老师在吗？', difficulty: 'advanced', keywords: ['여보세요'], grammarNote: '电话用语' },
  { id: 'k16', text: '이거 얼마예요?', translation: '这个多少钱？', difficulty: 'advanced', keywords: ['얼마'], grammarNote: '询问价格' },
  { id: 'k17', text: '조금 더 싸게 해 주세요.', translation: '请便宜一点。', difficulty: 'advanced', keywords: ['싸게'], grammarNote: '购物还价' },
  { id: 'k18', text: '잠시만 기다려 주세요.', translation: '请稍等片刻。', difficulty: 'advanced', keywords: ['기다려'], grammarNote: '请求等待' },
];