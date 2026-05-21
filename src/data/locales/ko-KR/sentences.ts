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
  // ========== 初级 ==========
  // 问候系列
  { id: 'k1', text: '안녕하세요.', translation: '你好。', difficulty: 'beginner', keywords: ['안녕'], grammarNote: '正式问候语' },
  { id: 'k2', text: '감사합니다.', translation: '谢谢。', difficulty: 'beginner', keywords: ['감사'], grammarNote: '感谢表达' },
  { id: 'k3', text: '죄송합니다.', translation: '对不起。', difficulty: 'beginner', keywords: ['죄송'], grammarNote: '道歉用语' },
  { id: 'k4', text: '괜찮아요.', translation: '没关系/可以。', difficulty: 'beginner', keywords: ['괜찮'], grammarNote: '回应道歉' },
  { id: 'k5', text: '안녕히 가세요.', translation: '再见（对离开的人说）。', difficulty: 'beginner', keywords: ['안녕'], grammarNote: '送别用语' },
  { id: 'k6', text: '안녕히 계세요.', translation: '再见（对留下的人说）。', difficulty: 'beginner', keywords: ['안녕'], grammarNote: '告别用语' },
  
  // 自我介绍
  { id: 'k7', text: '제 이름은 철수입니다.', translation: '我的名字是哲秀。', difficulty: 'beginner', keywords: ['이름'], grammarNote: '自我介绍' },
  { id: 'k8', text: '만나서 반갑습니다.', translation: '很高兴见到你。', difficulty: 'beginner', keywords: ['반갑'], grammarNote: '初次见面' },
  { id: 'k9', text: '저는 학생입니다.', translation: '我是学生。', difficulty: 'beginner', keywords: ['학생'], grammarNote: '介绍职业' },
  { id: 'k10', text: '한국에서 왔습니다.', translation: '我来自韩国。', difficulty: 'beginner', keywords: ['한국'], grammarNote: '介绍国籍' },
  
  // 基础疑问句
  { id: 'k11', text: '이름이 무엇입니까?', translation: '你叫什么名字？', difficulty: 'beginner', keywords: ['이름'], grammarNote: '疑问句' },
  { id: 'k12', text: '어디에서 왔습니까?', translation: '你从哪里来？', difficulty: 'beginner', keywords: ['어디'], grammarNote: '询问国籍' },
  { id: 'k13', text: '몇 살입니까?', translation: '几岁了？', difficulty: 'beginner', keywords: ['살'], grammarNote: '询问年龄' },
  { id: 'k14', text: '무엇을 좋아합니까?', translation: '喜欢什么？', difficulty: 'beginner', keywords: ['좋아'], grammarNote: '询问喜好' },
  
  // 日常表达
  { id: 'k15', text: '오늘 날씨가 좋네요.', translation: '今天天气真好呢。', difficulty: 'beginner', keywords: ['날씨'], grammarNote: '感叹句式' },
  { id: 'k16', text: '배가 고파요.', translation: '肚子饿了。', difficulty: 'beginner', keywords: ['배'], grammarNote: '表达饥饿' },
  { id: 'k17', text: '목이 말라요.', translation: '口渴了。', difficulty: 'beginner', keywords: ['목'], grammarNote: '表达口渴' },
  { id: 'k18', text: '피곤해요.', translation: '累了。', difficulty: 'beginner', keywords: ['피곤'], grammarNote: '表达疲劳' },
  
  // ========== 中级 ==========
  { id: 'k19', text: '한국어를 공부하고 있어요.', translation: '我正在学习韩语。', difficulty: 'intermediate', keywords: ['공부'], grammarNote: '고 있다进行时' },
  { id: 'k20', text: '주말에 뭐 할 거예요?', translation: '周末要做什么？', difficulty: 'intermediate', keywords: ['주말'], grammarNote: '将来时' },
  { id: 'k21', text: '영화 보러 갈래요?', translation: '要去看电影吗？', difficulty: 'intermediate', keywords: ['영화'], grammarNote: '提议句式' },
  { id: 'k22', text: '함께 밥 먹어요.', translation: '一起吃饭吧。', difficulty: 'intermediate', keywords: ['함께'], grammarNote: '提议' },
  { id: 'k23', text: '무슨 음식을 좋아하세요?', translation: '你喜欢什么食物？', difficulty: 'intermediate', keywords: ['음식'], grammarNote: '疑问句' },
  { id: 'k24', text: '어제 뭐 했어요?', translation: '昨天做了什么？', difficulty: 'intermediate', keywords: ['어제'], grammarNote: '过去时' },
  { id: 'k25', text: '기분이 좋아요.', translation: '心情很好。', difficulty: 'intermediate', keywords: ['기분'], grammarNote: '表达心情' },
  { id: 'k26', text: '정말 멋져요!', translation: '真帅/真棒！', difficulty: 'intermediate', keywords: ['멋져'], grammarNote: '感叹' },
  { id: 'k27', text: '조금 더 생각해 볼게요.', translation: '我再想想。', difficulty: 'intermediate', keywords: ['생각'], grammarNote: '委婉表达' },
  { id: 'k28', text: '다음에 또 봐요.', translation: '下次再见。', difficulty: 'intermediate', keywords: ['다음'], grammarNote: '告别' },
  
  // ========== 高级 ==========
  { id: 'k29', text: '여보세요, 김 선생님 계세요?', translation: '喂，金老师在吗？', difficulty: 'advanced', keywords: ['여보세요'], grammarNote: '电话用语' },
  { id: 'k30', text: '이거 얼마예요?', translation: '这个多少钱？', difficulty: 'advanced', keywords: ['얼마'], grammarNote: '询问价格' },
  { id: 'k31', text: '조금 더 싸게 해 주세요.', translation: '请便宜一点。', difficulty: 'advanced', keywords: ['싸게'], grammarNote: '购物还价' },
  { id: 'k32', text: '잠시만 기다려 주세요.', translation: '请稍等片刻。', difficulty: 'advanced', keywords: ['기다려'], grammarNote: '请求等待' },
  { id: 'k33', text: '화장실이 어디예요?', translation: '洗手间在哪里？', difficulty: 'advanced', keywords: ['화장실'], grammarNote: '问路' },
  { id: 'k34', text: '예약하고 싶어요.', translation: '想预约。', difficulty: 'advanced', keywords: ['예약'], grammarNote: '预约表达' },
  { id: 'k35', text: '맛있게 드세요.', translation: '请慢用。', difficulty: 'advanced', keywords: ['드세요'], grammarNote: '餐桌用语' },
  { id: 'k36', text: '잘 먹었습니다.', translation: '吃得很好（感谢款待）。', difficulty: 'advanced', keywords: ['먹었'], grammarNote: '餐后用语' },
];