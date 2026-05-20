// src/data/locales/ja-JP/alphabet.ts
export interface AlphabetItem {
  id: string;
  char: string;
  name: string;
  sound: string;
  audioUrl: string;
  exampleWord: string;
  exampleTranslation: string;
}

// 日语五十音图（平假名）
export const alphabetData: AlphabetItem[] = [
  // あ行
  { id: 'a', char: 'あ', name: 'a', sound: 'あ', audioUrl: '/audio/ja/a.mp3', exampleWord: 'あお', exampleTranslation: '蓝色' },
  { id: 'i', char: 'い', name: 'i', sound: 'い', audioUrl: '/audio/ja/i.mp3', exampleWord: 'いぬ', exampleTranslation: '狗' },
  { id: 'u', char: 'う', name: 'u', sound: 'う', audioUrl: '/audio/ja/u.mp3', exampleWord: 'うみ', exampleTranslation: '海' },
  { id: 'e', char: 'え', name: 'e', sound: 'え', audioUrl: '/audio/ja/e.mp3', exampleWord: 'えき', exampleTranslation: '车站' },
  { id: 'o', char: 'お', name: 'o', sound: 'お', audioUrl: '/audio/ja/o.mp3', exampleWord: 'おちゃ', exampleTranslation: '茶' },
  // か行
  { id: 'ka', char: 'か', name: 'ka', sound: 'か', audioUrl: '/audio/ja/ka.mp3', exampleWord: 'かみ', exampleTranslation: '纸' },
  { id: 'ki', char: 'き', name: 'ki', sound: 'き', audioUrl: '/audio/ja/ki.mp3', exampleWord: 'きのう', exampleTranslation: '昨天' },
  { id: 'ku', char: 'く', name: 'ku', sound: 'く', audioUrl: '/audio/ja/ku.mp3', exampleWord: 'くも', exampleTranslation: '云' },
  { id: 'ke', char: 'け', name: 'ke', sound: 'け', audioUrl: '/audio/ja/ke.mp3', exampleWord: 'けしき', exampleTranslation: '景色' },
  { id: 'ko', char: 'こ', name: 'ko', sound: 'こ', audioUrl: '/audio/ja/ko.mp3', exampleWord: 'こども', exampleTranslation: '孩子' },
  // さ行
  { id: 'sa', char: 'さ', name: 'sa', sound: 'さ', audioUrl: '/audio/ja/sa.mp3', exampleWord: 'さかな', exampleTranslation: '鱼' },
  { id: 'shi', char: 'し', name: 'shi', sound: 'し', audioUrl: '/audio/ja/shi.mp3', exampleWord: 'しごと', exampleTranslation: '工作' },
  { id: 'su', char: 'す', name: 'su', sound: 'す', audioUrl: '/audio/ja/su.mp3', exampleWord: 'すし', exampleTranslation: '寿司' },
  { id: 'se', char: 'せ', name: 'se', sound: 'せ', audioUrl: '/audio/ja/se.mp3', exampleWord: 'せんせい', exampleTranslation: '老师' },
  { id: 'so', char: 'そ', name: 'so', sound: 'そ', audioUrl: '/audio/ja/so.mp3', exampleWord: 'そら', exampleTranslation: '天空' },
  // た行
  { id: 'ta', char: 'た', name: 'ta', sound: 'た', audioUrl: '/audio/ja/ta.mp3', exampleWord: 'たべもの', exampleTranslation: '食物' },
  { id: 'chi', char: 'ち', name: 'chi', sound: 'ち', audioUrl: '/audio/ja/chi.mp3', exampleWord: 'ちず', exampleTranslation: '地图' },
  { id: 'tsu', char: 'つ', name: 'tsu', sound: 'つ', audioUrl: '/audio/ja/tsu.mp3', exampleWord: 'つき', exampleTranslation: '月亮' },
  { id: 'te', char: 'て', name: 'te', sound: 'て', audioUrl: '/audio/ja/te.mp3', exampleWord: 'てんき', exampleTranslation: '天气' },
  { id: 'to', char: 'と', name: 'to', sound: 'と', audioUrl: '/audio/ja/to.mp3', exampleWord: 'ともだち', exampleTranslation: '朋友' },
  // な行
  { id: 'na', char: 'な', name: 'na', sound: 'な', audioUrl: '/audio/ja/na.mp3', exampleWord: 'なまえ', exampleTranslation: '名字' },
  { id: 'ni', char: 'に', name: 'ni', sound: 'に', audioUrl: '/audio/ja/ni.mp3', exampleWord: 'にほん', exampleTranslation: '日本' },
  { id: 'nu', char: 'ぬ', name: 'nu', sound: 'ぬ', audioUrl: '/audio/ja/nu.mp3', exampleWord: 'ぬの', exampleTranslation: '布' },
  { id: 'ne', char: 'ね', name: 'ne', sound: 'ね', audioUrl: '/audio/ja/ne.mp3', exampleWord: 'ねこ', exampleTranslation: '猫' },
  { id: 'no', char: 'の', name: 'no', sound: 'の', audioUrl: '/audio/ja/no.mp3', exampleWord: 'のど', exampleTranslation: '喉咙' },
  // は行
  { id: 'ha', char: 'は', name: 'ha', sound: 'は', audioUrl: '/audio/ja/ha.mp3', exampleWord: 'はな', exampleTranslation: '花' },
  { id: 'hi', char: 'ひ', name: 'hi', sound: 'ひ', audioUrl: '/audio/ja/hi.mp3', exampleWord: 'ひと', exampleTranslation: '人' },
  { id: 'fu', char: 'ふ', name: 'fu', sound: 'ふ', audioUrl: '/audio/ja/fu.mp3', exampleWord: 'ふね', exampleTranslation: '船' },
  { id: 'he', char: 'へ', name: 'he', sound: 'へ', audioUrl: '/audio/ja/he.mp3', exampleWord: 'へや', exampleTranslation: '房间' },
  { id: 'ho', char: 'ほ', name: 'ho', sound: 'ほ', audioUrl: '/audio/ja/ho.mp3', exampleWord: 'ほし', exampleTranslation: '星星' },
  // ま行
  { id: 'ma', char: 'ま', name: 'ma', sound: 'ま', audioUrl: '/audio/ja/ma.mp3', exampleWord: 'まど', exampleTranslation: '窗户' },
  { id: 'mi', char: 'み', name: 'mi', sound: 'み', audioUrl: '/audio/ja/mi.mp3', exampleWord: 'みず', exampleTranslation: '水' },
  { id: 'mu', char: 'む', name: 'mu', sound: 'む', audioUrl: '/audio/ja/mu.mp3', exampleWord: 'むし', exampleTranslation: '虫子' },
  { id: 'me', char: 'め', name: 'me', sound: 'め', audioUrl: '/audio/ja/me.mp3', exampleWord: 'めがね', exampleTranslation: '眼镜' },
  { id: 'mo', char: 'も', name: 'mo', sound: 'も', audioUrl: '/audio/ja/mo.mp3', exampleWord: 'もり', exampleTranslation: '森林' },
  // や行
  { id: 'ya', char: 'や', name: 'ya', sound: 'や', audioUrl: '/audio/ja/ya.mp3', exampleWord: 'やま', exampleTranslation: '山' },
  { id: 'yu', char: 'ゆ', name: 'yu', sound: 'ゆ', audioUrl: '/audio/ja/yu.mp3', exampleWord: 'ゆき', exampleTranslation: '雪' },
  { id: 'yo', char: 'よ', name: 'yo', sound: 'よ', audioUrl: '/audio/ja/yo.mp3', exampleWord: 'よる', exampleTranslation: '夜晚' },
  // ら行
  { id: 'ra', char: 'ら', name: 'ra', sound: 'ら', audioUrl: '/audio/ja/ra.mp3', exampleWord: 'らいおん', exampleTranslation: '狮子' },
  { id: 'ri', char: 'り', name: 'ri', sound: 'り', audioUrl: '/audio/ja/ri.mp3', exampleWord: 'りんご', exampleTranslation: '苹果' },
  { id: 'ru', char: 'る', name: 'ru', sound: 'る', audioUrl: '/audio/ja/ru.mp3', exampleWord: 'るす', exampleTranslation: '不在家' },
  { id: 're', char: 'れ', name: 're', sound: 'れ', audioUrl: '/audio/ja/re.mp3', exampleWord: 'れんしゅう', exampleTranslation: '练习' },
  { id: 'ro', char: 'ろ', name: 'ro', sound: 'ろ', audioUrl: '/audio/ja/ro.mp3', exampleWord: 'ろく', exampleTranslation: '六' },
  // わ行
  { id: 'wa', char: 'わ', name: 'wa', sound: 'わ', audioUrl: '/audio/ja/wa.mp3', exampleWord: 'わたし', exampleTranslation: '我' },
  { id: 'wo', char: 'を', name: 'wo', sound: 'を', audioUrl: '/audio/ja/wo.mp3', exampleWord: 'を', exampleTranslation: '（助词）' },
  // ん
  { id: 'n', char: 'ん', name: 'n', sound: 'ん', audioUrl: '/audio/ja/n.mp3', exampleWord: 'にほん', exampleTranslation: '日本' },
];