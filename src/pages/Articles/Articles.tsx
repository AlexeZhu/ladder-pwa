// src/pages/Articles/Articles.tsx
import { useState } from 'react';
import { useProgressStore } from '../../stores/progressStore';
import { articleData } from '../../data/articleData';
import type { ArticleItem } from '../../data/articleData';
import './Articles.css';

type Level = 'beginner' | 'intermediate' | 'advanced';

function Articles() {
  const { readArticles, readArticle } = useProgressStore();
  const [level, setLevel] = useState<Level>('beginner');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [wordMeaning, setWordMeaning] = useState<string | null>(null);
  const [isReadingFull, setIsReadingFull] = useState(false);

  const currentArticles = articleData.filter(a => a.level === level);
  
  const levelLabels = {
    beginner: '🌱 初级',
    intermediate: '🌿 中级',
    advanced: '🌲 高级'
  };

  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  // 全文朗读
  const speakFullArticle = () => {
    if (!selectedArticle) return;
    setIsReadingFull(true);
    window.speechSynthesis.cancel();
    
    let currentIndex = 0;
    const sentences = selectedArticle.content;
    
    const speakNext = () => {
      if (currentIndex >= sentences.length) {
        setIsReadingFull(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(sentences[currentIndex]);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.onend = () => {
        setTimeout(() => {
          currentIndex++;
          speakNext();
        }, 500);
      };
      utterance.onerror = () => {
        setIsReadingFull(false);
      };
      window.speechSynthesis.speak(utterance);
    };
    
    speakNext();
  };

  // 停止朗读
  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReadingFull(false);
  };

  const isRead = (id: string) => readArticles.includes(id);

  const handleRead = (article: ArticleItem) => {
    setSelectedArticle(article);
    setShowTranslation(false);
    setSelectedWord(null);
    setWordMeaning(null);
    if (!isRead(article.id)) {
      readArticle(article.id);
    }
  };

  const handleWordClick = (word: string) => {
    const simpleDict: Record<string, string> = {
      'wake': '醒来', 'brush': '刷', 'teeth': '牙齿', 'wash': '洗', 'face': '脸',
      'breakfast': '早餐', 'school': '学校', 'lunch': '午餐', 'homework': '作业',
      'benefits': '好处', 'habit': '习惯', 'knowledge': '知识', 'vocabulary': '词汇',
      'stress': '压力', 'relax': '放松', 'focus': '专注', 'concentration': '注意力',
      'technology': '科技', 'transformed': '改变', 'communicate': '交流',
      'accessible': '可获取的', 'privacy': '隐私', 'security': '安全'
    };
    setSelectedWord(word);
    setWordMeaning(simpleDict[word.toLowerCase()] || '查无此词');
    setTimeout(() => {
      setSelectedWord(null);
      setWordMeaning(null);
    }, 2000);
  };

  const handleSpeakSentence = (sentence: string) => {
    speak(sentence);
  };

  return (
    <div className="articles-page">
      <div className="level-tabs">
        {(['beginner', 'intermediate', 'advanced'] as Level[]).map(l => (
          <button
            key={l}
            className={`level-tab ${level === l ? 'active' : ''}`}
            onClick={() => setLevel(l)}
          >
            {levelLabels[l]}
          </button>
        ))}
      </div>

      <div className="articles-list">
        {currentArticles.map(article => (
          <div key={article.id} className={`article-card ${isRead(article.id) ? 'read' : ''}`}>
            <div className="article-info">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-desc">
                📖 {article.wordCount} 词 • 🏷️ {article.tags.join(' • ')}
              </p>
            </div>
            <div className="article-actions">
              <button className="read-btn" onClick={() => handleRead(article)}>
                {isRead(article.id) ? '📖 再次阅读' : '📖 开始阅读'}
              </button>
              {isRead(article.id) && <span className="read-badge">✅ 已读</span>}
            </div>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div className="modal-overlay" onClick={() => {
          stopReading();
          setSelectedArticle(null);
        }}>
          <div className="modal-content article-reader" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>{selectedArticle.title}</h3>
                <p className="article-level">{levelLabels[selectedArticle.level]}</p>
              </div>
              <div className="header-buttons">
                <button 
                  className="read-full-btn" 
                  onClick={speakFullArticle}
                  disabled={isReadingFull}
                  title="朗读全文"
                >
                  {isReadingFull ? '⏳ 朗读中...' : '🔈 全文朗读'}
                </button>
                <button 
                  className="stop-read-btn" 
                  onClick={stopReading}
                  title="停止朗读"
                >
                  ⏹️ 停止
                </button>
                <button className="trans-toggle" onClick={() => setShowTranslation(!showTranslation)}>
                  {showTranslation ? '📖 隐藏翻译' : '🌐 显示翻译'}
                </button>
                <button className="close-btn" onClick={() => {
                  stopReading();
                  setSelectedArticle(null);
                }}>✕</button>
              </div>
            </div>
            
            <div className="article-content">
              {selectedArticle.content.map((paragraph, idx) => (
                <div key={idx} className="paragraph">
                  <div className="english-text">
                    {paragraph.split(/(\s+)/).map((word, i) => {
                      const isPunctuation = /^[.,!?;:()[\]{}'"]$/.test(word);
                      const cleanWord = word.replace(/[.,!?;:()[\]]/g, '');
                      if (isPunctuation || cleanWord.length < 2) {
                        return <span key={i}>{word}</span>;
                      }
                      return (
                        <span
                          key={i}
                          className="clickable-word"
                          onClick={() => handleWordClick(cleanWord)}
                        >
                          {word}
                        </span>
                      );
                    })}
                    <button 
                      className="speak-sentence-btn"
                      onClick={() => handleSpeakSentence(paragraph)}
                      title="朗读本句"
                    >
                      🔊
                    </button>
                  </div>
                  {showTranslation && (
                    <div className="chinese-text">
                      {selectedArticle.contentTranslation[idx]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {selectedWord && wordMeaning && (
              <div className="word-tooltip">
                <span className="word">{selectedWord}</span>
                <span className="meaning">{wordMeaning}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Articles;