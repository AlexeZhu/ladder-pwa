// src/data/locales/ja-JP/sentences.ts
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
  { id: 'j1', text: 'おはようございます。', translation: '早上好。', difficulty: 'beginner', keywords: ['おはよう'], grammarNote: '早晨问候，礼貌形' },
  { id: 'j2', text: 'こんにちは。', translation: '你好。', difficulty: 'beginner', keywords: ['こんにちは'], grammarNote: '白天问候' },
  { id: 'j3', text: 'こんばんは。', translation: '晚上好。', difficulty: 'beginner', keywords: ['こんばんは'], grammarNote: '晚上问候' },
  { id: 'j4', text: 'おやすみなさい。', translation: '晚安。', difficulty: 'beginner', keywords: ['おやすみ'], grammarNote: '睡前问候' },
  { id: 'j5', text: 'はじめまして。', translation: '初次见面。', difficulty: 'beginner', keywords: ['はじめまして'], grammarNote: '初次见面用语' },
  { id: 'j6', text: 'よろしくおねがいします。', translation: '请多关照。', difficulty: 'beginner', keywords: ['よろしく'], grammarNote: '请求关照' },
  { id: 'j7', text: 'おなかがすきました。', translation: '肚子饿了。', difficulty: 'beginner', keywords: ['おなか'], grammarNote: '表达饥饿' },
  { id: 'j8', text: 'のどがかわきました。', translation: '口渴了。', difficulty: 'beginner', keywords: ['のど'], grammarNote: '表达口渴' },
  { id: 'j9', text: 'たのしいですね。', translation: '真开心呢。', difficulty: 'beginner', keywords: ['たのしい'], grammarNote: '表达感受' },
  { id: 'j10', text: 'さむいですね。', translation: '好冷啊。', difficulty: 'beginner', keywords: ['さむい'], grammarNote: '描述天气' },
  
  // 中级
  { id: 'j11', text: 'きょうはいいてんきですね。', translation: '今天天气真好呢。', difficulty: 'intermediate', keywords: ['てんき'], grammarNote: '感叹句式「〜ですね」' },
  { id: 'j12', text: 'にほんごをべんきょうしています。', translation: '我正在学习日语。', difficulty: 'intermediate', keywords: ['べんきょう'], grammarNote: 'ている进行时' },
  { id: 'j13', text: 'どんなスポーツがすきですか。', translation: '你喜欢什么样的运动？', difficulty: 'intermediate', keywords: ['すき'], grammarNote: '疑问句「どんな〜」' },
  { id: 'j14', text: 'わたしのしゅみはえいがをみることです。', translation: '我的爱好是看电影。', difficulty: 'intermediate', keywords: ['しゅみ'], grammarNote: '〜ことです名词化' },
  { id: 'j15', text: 'まいあさろくじにおきます。', translation: '我每天早上六点起床。', difficulty: 'intermediate', keywords: ['まいあさ'], grammarNote: '时间表达「〜に」' },
  { id: 'j16', text: 'ともだちとえいがにいきました。', translation: '和朋友去看电影了。', difficulty: 'intermediate', keywords: ['ともだち'], grammarNote: '过去时「〜ました」' },
  { id: 'j17', text: 'にほんりょうりはおいしいです。', translation: '日本料理很好吃。', difficulty: 'intermediate', keywords: ['りょうり'], grammarNote: '形容词谓语' },
  { id: 'j18', text: 'やすみのひはなにをしますか。', translation: '休息日做什么？', difficulty: 'intermediate', keywords: ['やすみ'], grammarNote: '疑问词「なに」' },
  
  // 高级
  { id: 'j19', text: 'もしもし、たなかです。', translation: '喂，我是田中。', difficulty: 'advanced', keywords: ['もしもし'], grammarNote: '电话用语' },
  { id: 'j20', text: 'すみません、ちかくにびょういんはありますか。', translation: '打扰一下，附近有医院吗？', difficulty: 'advanced', keywords: ['びょういん'], grammarNote: '问路句型「〜はありますか」' },
  { id: 'j21', text: 'これをください。', translation: '请给我这个。', difficulty: 'advanced', keywords: ['ください'], grammarNote: '购物用语' },
  { id: 'j22', text: 'ちょっとまってください。', translation: '请稍等一下。', difficulty: 'advanced', keywords: ['まって'], grammarNote: '请求等待' },
  { id: 'j23', text: 'おせわになりました。', translation: '承蒙照顾了。', difficulty: 'advanced', keywords: ['せわ'], grammarNote: '道别用语' },
  { id: 'j24', text: 'またこんどいっしょにいきましょう。', translation: '下次一起去吧。', difficulty: 'advanced', keywords: ['いっしょ'], grammarNote: '提议句式「〜ましょう」' },
];