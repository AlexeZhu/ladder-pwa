// src/data/locales/ja-JP/words.ts
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
  { id: 'greetings', name: '👋 挨拶', icon: '👋', color: '#FF6B6B' },
  { id: 'numbers', name: '🔢 数字', icon: '1️⃣', color: '#4ECDC4' },
  { id: 'family', name: '👨‍👩‍👧 家族', icon: '👪', color: '#45B7D1' },
  { id: 'food', name: '🍜 食べ物', icon: '🍣', color: '#96CEB4' },
  { id: 'daily', name: '📅 日常', icon: '☀️', color: '#FFEAA7' },
  { id: 'colors', name: '🎨 色', icon: '🌈', color: '#DFE6E9' },
  { id: 'nature', name: '🌿 自然', icon: '🌲', color: '#81C784' },
  { id: 'time', name: '⏰ 時間', icon: '🕐', color: '#FFB74D' },
];

export const wordData: WordItem[] = [
  // 问候
  { id: 'konnichiwa', word: 'こんにちは', translation: '你好', pronunciation: 'konnichiwa', partOfSpeech: '问候', exampleSentence: 'こんにちは、おげんきですか？', exampleTranslation: '你好，你好吗？', group: 'greetings' },
  { id: 'arigatou', word: 'ありがとう', translation: '谢谢', pronunciation: 'arigatou', partOfSpeech: '问候', exampleSentence: 'ありがとうございます。', exampleTranslation: '非常感谢。', group: 'greetings' },
  { id: 'sumimasen', word: 'すみません', translation: '对不起/打扰一下', pronunciation: 'sumimasen', partOfSpeech: '问候', exampleSentence: 'すみません、これをください。', exampleTranslation: '打扰一下，请给我这个。', group: 'greetings' },
  { id: 'ohayou', word: 'おはよう', translation: '早上好', pronunciation: 'ohayou', partOfSpeech: '问候', exampleSentence: 'おはようございます。', exampleTranslation: '早上好。', group: 'greetings' },
  { id: 'konbanwa', word: 'こんばんは', translation: '晚上好', pronunciation: 'konbanwa', partOfSpeech: '问候', exampleSentence: 'こんばんは、今日はいい天気ですね。', exampleTranslation: '晚上好，今天天气真好呢。', group: 'greetings' },
  { id: 'oyasumi', word: 'おやすみ', translation: '晚安', pronunciation: 'oyasumi', partOfSpeech: '问候', exampleSentence: 'おやすみなさい。', exampleTranslation: '晚安。', group: 'greetings' },
  
  // 数字
  { id: 'ichi', word: 'いち', translation: '一', pronunciation: 'ichi', partOfSpeech: '数词', exampleSentence: 'いち、に、さん', exampleTranslation: '一、二、三', group: 'numbers' },
  { id: 'ni', word: 'に', translation: '二', pronunciation: 'ni', partOfSpeech: '数词', exampleSentence: 'にひゃく', exampleTranslation: '二百', group: 'numbers' },
  { id: 'san', word: 'さん', translation: '三', pronunciation: 'san', partOfSpeech: '数词', exampleSentence: 'さんにん', exampleTranslation: '三个人', group: 'numbers' },
  { id: 'yon', word: 'よん', translation: '四', pronunciation: 'yon', partOfSpeech: '数词', exampleSentence: 'よんじゅう', exampleTranslation: '四十', group: 'numbers' },
  { id: 'go', word: 'ご', translation: '五', pronunciation: 'go', partOfSpeech: '数词', exampleSentence: 'ごひゃく', exampleTranslation: '五百', group: 'numbers' },
  { id: 'roku', word: 'ろく', translation: '六', pronunciation: 'roku', partOfSpeech: '数词', exampleSentence: 'ろっぴゃく', exampleTranslation: '六百', group: 'numbers' },
  { id: 'nana', word: 'なな', translation: '七', pronunciation: 'nana', partOfSpeech: '数词', exampleSentence: 'ななじゅう', exampleTranslation: '七十', group: 'numbers' },
  { id: 'hachi', word: 'はち', translation: '八', pronunciation: 'hachi', partOfSpeech: '数词', exampleSentence: 'はっぴゃく', exampleTranslation: '八百', group: 'numbers' },
  { id: 'kyuu', word: 'きゅう', translation: '九', pronunciation: 'kyuu', partOfSpeech: '数词', exampleSentence: 'きゅうじゅう', exampleTranslation: '九十', group: 'numbers' },
  { id: 'juu', word: 'じゅう', translation: '十', pronunciation: 'juu', partOfSpeech: '数词', exampleSentence: 'じゅうにん', exampleTranslation: '十个人', group: 'numbers' },
  
  // 家庭
  { id: 'okaasan', word: 'おかあさん', translation: '母亲', pronunciation: 'okaasan', partOfSpeech: '名词', exampleSentence: 'わたしのおかあさんはやさしいです。', exampleTranslation: '我的母亲很温柔。', group: 'family' },
  { id: 'otoosan', word: 'おとうさん', translation: '父亲', pronunciation: 'otoosan', partOfSpeech: '名词', exampleSentence: 'おとうさんはしごとをしています。', exampleTranslation: '父亲在工作。', group: 'family' },
  { id: 'oneesan', word: 'おねえさん', translation: '姐姐', pronunciation: 'oneesan', partOfSpeech: '名词', exampleSentence: 'わたしのおねえさんはがくせいです。', exampleTranslation: '我的姐姐是学生。', group: 'family' },
  { id: 'oniisan', word: 'おにいさん', translation: '哥哥', pronunciation: 'oniisan', partOfSpeech: '名词', exampleSentence: 'おにいさんはせがたかいです。', exampleTranslation: '哥哥个子很高。', group: 'family' },
  { id: 'sobo', word: 'そぼ', translation: '祖母', pronunciation: 'sobo', partOfSpeech: '名词', exampleSentence: 'そぼはりょうりがじょうずです。', exampleTranslation: '祖母做饭很好。', group: 'family' },
  { id: 'sofu', word: 'そふ', translation: '祖父', pronunciation: 'sofu', partOfSpeech: '名词', exampleSentence: 'そふはまいあささんぽします。', exampleTranslation: '祖父每天早上散步。', group: 'family' },
  
  // 食物
  { id: 'sushi', word: 'すし', translation: '寿司', pronunciation: 'sushi', partOfSpeech: '名词', exampleSentence: 'すしをたべます。', exampleTranslation: '吃寿司。', group: 'food' },
  { id: 'ramen', word: 'らーめん', translation: '拉面', pronunciation: 'ramen', partOfSpeech: '名词', exampleSentence: 'らーめんはおいしいです。', exampleTranslation: '拉面很好吃。', group: 'food' },
  { id: 'tempura', word: 'てんぷら', translation: '天妇罗', pronunciation: 'tempura', partOfSpeech: '名词', exampleSentence: 'てんぷらをたべたいです。', exampleTranslation: '想吃天妇罗。', group: 'food' },
  { id: 'gohan', word: 'ごはん', translation: '米饭/饭', pronunciation: 'gohan', partOfSpeech: '名词', exampleSentence: 'あさごはんをたべます。', exampleTranslation: '吃早饭。', group: 'food' },
  { id: 'mizu', word: 'みず', translation: '水', pronunciation: 'mizu', partOfSpeech: '名词', exampleSentence: 'みずをのみます。', exampleTranslation: '喝水。', group: 'food' },
  { id: 'ocha', word: 'おちゃ', translation: '茶', pronunciation: 'ocha', partOfSpeech: '名词', exampleSentence: 'おちゃをいれます。', exampleTranslation: '沏茶。', group: 'food' },
  
  // 日常动词
  { id: 'taberu', word: 'たべる', translation: '吃', pronunciation: 'taberu', partOfSpeech: '动词', exampleSentence: 'りんごをたべる。', exampleTranslation: '吃苹果。', group: 'daily' },
  { id: 'nomu', word: 'のむ', translation: '喝', pronunciation: 'nomu', partOfSpeech: '动词', exampleSentence: 'みずをのむ。', exampleTranslation: '喝水。', group: 'daily' },
  { id: 'iku', word: 'いく', translation: '去', pronunciation: 'iku', partOfSpeech: '动词', exampleSentence: 'がっこうにいく。', exampleTranslation: '去学校。', group: 'daily' },
  { id: 'kuru', word: 'くる', translation: '来', pronunciation: 'kuru', partOfSpeech: '动词', exampleSentence: 'うちにくる。', exampleTranslation: '来我家。', group: 'daily' },
  { id: 'miru', word: 'みる', translation: '看', pronunciation: 'miru', partOfSpeech: '动词', exampleSentence: 'えいがをみる。', exampleTranslation: '看电影。', group: 'daily' },
  { id: 'kiku', word: 'きく', translation: '听', pronunciation: 'kiku', partOfSpeech: '动词', exampleSentence: 'おんがくをきく。', exampleTranslation: '听音乐。', group: 'daily' },
  { id: 'hanasu', word: 'はなす', translation: '说/谈话', pronunciation: 'hanasu', partOfSpeech: '动词', exampleSentence: 'にほんごではなす。', exampleTranslation: '用日语说。', group: 'daily' },
  { id: 'yomu', word: 'よむ', translation: '读', pronunciation: 'yomu', partOfSpeech: '动词', exampleSentence: 'ほんをよむ。', exampleTranslation: '读书。', group: 'daily' },
  { id: 'kaku', word: 'かく', translation: '写', pronunciation: 'kaku', partOfSpeech: '动词', exampleSentence: 'てがみをかく。', exampleTranslation: '写信。', group: 'daily' },
  { id: 'neru', word: 'ねる', translation: '睡觉', pronunciation: 'neru', partOfSpeech: '动词', exampleSentence: 'よるはやくねる。', exampleTranslation: '晚上早睡。', group: 'daily' },
  
  // 颜色
  { id: 'akai', word: 'あかい', translation: '红色', pronunciation: 'akai', partOfSpeech: '形容词', exampleSentence: 'あかいくるま', exampleTranslation: '红色的车', group: 'colors' },
  { id: 'aoi', word: 'あおい', translation: '蓝色', pronunciation: 'aoi', partOfSpeech: '形容词', exampleSentence: 'あおいそら', exampleTranslation: '蓝色的天空', group: 'colors' },
  { id: 'kiiroi', word: 'きいろい', translation: '黄色', pronunciation: 'kiiroi', partOfSpeech: '形容词', exampleSentence: 'きいろいはな', exampleTranslation: '黄色的花', group: 'colors' },
  { id: 'midori', word: 'みどり', translation: '绿色', pronunciation: 'midori', partOfSpeech: '名词', exampleSentence: 'みどりのくさ', exampleTranslation: '绿色的草', group: 'colors' },
  { id: 'kuroi', word: 'くろい', translation: '黑色', pronunciation: 'kuroi', partOfSpeech: '形容词', exampleSentence: 'くろいねこ', exampleTranslation: '黑色的猫', group: 'colors' },
  { id: 'shiroi', word: 'しろい', translation: '白色', pronunciation: 'shiroi', partOfSpeech: '形容词', exampleSentence: 'しろいゆき', exampleTranslation: '白色的雪', group: 'colors' },
  
  // 自然
  { id: 'yama', word: 'やま', translation: '山', pronunciation: 'yama', partOfSpeech: '名词', exampleSentence: 'ふじさんはたかいやまです。', exampleTranslation: '富士山是高山。', group: 'nature' },
  { id: 'kawa', word: 'かわ', translation: '河', pronunciation: 'kawa', partOfSpeech: '名词', exampleSentence: 'かわでおよぎます。', exampleTranslation: '在河里游泳。', group: 'nature' },
  { id: 'sora', word: 'そら', translation: '天空', pronunciation: 'sora', partOfSpeech: '名词', exampleSentence: 'そらがきれいです。', exampleTranslation: '天空很美。', group: 'nature' },
  { id: 'hana', word: 'はな', translation: '花', pronunciation: 'hana', partOfSpeech: '名词', exampleSentence: 'はながさきます。', exampleTranslation: '花开了。', group: 'nature' },
  { id: 'ki', word: 'き', translation: '树', pronunciation: 'ki', partOfSpeech: '名词', exampleSentence: 'きがたかいです。', exampleTranslation: '树很高。', group: 'nature' },
  
  // 时间
  { id: 'asa', word: 'あさ', translation: '早晨', pronunciation: 'asa', partOfSpeech: '名词', exampleSentence: 'あさおきる。', exampleTranslation: '早上起床。', group: 'time' },
  { id: 'hiru', word: 'ひる', translation: '白天/中午', pronunciation: 'hiru', partOfSpeech: '名词', exampleSentence: 'ひるごはん', exampleTranslation: '午饭', group: 'time' },
  { id: 'yoru', word: 'よる', translation: '夜晚', pronunciation: 'yoru', partOfSpeech: '名词', exampleSentence: 'よるねる。', exampleTranslation: '晚上睡觉。', group: 'time' },
  { id: 'kinou', word: 'きのう', translation: '昨天', pronunciation: 'kinou', partOfSpeech: '名词', exampleSentence: 'きのうがっこうにいきました。', exampleTranslation: '昨天去了学校。', group: 'time' },
  { id: 'kyou', word: 'きょう', translation: '今天', pronunciation: 'kyou', partOfSpeech: '名词', exampleSentence: 'きょうはあめです。', exampleTranslation: '今天下雨。', group: 'time' },
  { id: 'ashita', word: 'あした', translation: '明天', pronunciation: 'ashita', partOfSpeech: '名词', exampleSentence: 'あしたえいがをみます。', exampleTranslation: '明天看电影。', group: 'time' },
];