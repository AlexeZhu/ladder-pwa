// src/pages/Words/Words.tsx
import { useState, useEffect } from 'react';
import { useProgressStore } from '../../stores/progressStore';
import { useLanguageStore } from '../../stores/languageStore';
import { loadLanguageData } from '../../data/languageLoader';
import type { WordItem } from '../../data/locales/en-US/words';
import './Words.css';

function Words() {
  const { l2 } = useLanguageStore();
  const { wordsMastery, updateWordMastery } = useProgressStore();
  const [wordData, setWordData] = useState<WordItem[]>([]);
  const [wordGroups, setWordGroups] = useState<{ id: string; name: string; icon: string; color: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [selectedWord, setSelectedWord] = useState<WordItem | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await loadLanguageData(l2);
      setWordData(data.wordData || []);
      setWordGroups(data.wordGroups || []);
      if (data.wordGroups && data.wordGroups.length > 0) {
        setSelectedGroup(data.wordGroups[0].id);
      }
      setLoading(false);
    };
    loadData();
  }, [l2]);

  const speak = (word: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    const langMap: Record<string, string> = {
      'en-US': 'en-US',
      'ja-JP': 'ja-JP',
      'ko-KR': 'ko-KR',
    };
    utterance.lang = langMap[l2] || 'en-US';
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
  };

  const getMasteryLevel = (level: number) => {
    if (level === 0) return '未学习';
    if (level === 1) return '初识';
    if (level === 2) return '熟悉';
    if (level >= 3) return '掌握';
    return '未学习';
  };

  const currentWords = wordData.filter(w => w.group === selectedGroup);
  const masteredCount = currentWords.filter(w => (wordsMastery[w.id] || 0) >= 3).length;
  const progress = currentWords.length > 0 ? (masteredCount / currentWords.length) * 100 : 0;

  const handleStudy = (word: WordItem) => {
    setSelectedWord(word);
    setShowQuiz(false);
  };

  const handleQuiz = (word: WordItem) => {
    setSelectedWord(word);
    setShowQuiz(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (!selectedWord) return;
    
    const currentLevel = wordsMastery[selectedWord.id] || 0;
    let newLevel = currentLevel;
    
    if (isCorrect) {
      newLevel = Math.min(currentLevel + 1, 5);
    } else {
      newLevel = Math.max(currentLevel - 1, 0);
    }
    
    updateWordMastery(selectedWord.id, newLevel);
    setSelectedWord(null);
    setShowQuiz(false);
  };

  if (loading) {
    return (
      <div className="words-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="words-page">
      <div className="group-tabs">
        {wordGroups.map(group => (
          <button
            key={group.id}
            className={`group-tab ${selectedGroup === group.id ? 'active' : ''}`}
            onClick={() => setSelectedGroup(group.id)}
            style={{ backgroundColor: selectedGroup === group.id ? group.color : 'transparent' }}
          >
            <span className="group-icon">{group.icon}</span>
            <span className="group-name">{group.name}</span>
          </button>
        ))}
      </div>

      <div className="words-progress">
        <div className="progress-info">
          <span>📊 学习进度</span>
          <span>{masteredCount} / {currentWords.length} 已掌握</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: wordGroups.find(g => g.id === selectedGroup)?.color }}></div>
        </div>
      </div>

      <div className="words-list">
        {currentWords.map(word => {
          const level = wordsMastery[word.id] || 0;
          return (
            <div key={word.id} className="word-card">
              <div className="word-header">
                <div className="word-main">
                  <span className="word-text">{word.word}</span>
                  <button className="sound-btn" onClick={() => speak(word.word)}>🔊</button>
                </div>
                <div className="word-meta">
                  <span className="word-part">{word.partOfSpeech}</span>
                  <span className={`word-level level-${level}`}>{getMasteryLevel(level)}</span>
                </div>
              </div>
              <div className="word-translation">{word.translation}</div>
              <div className="word-pronunciation">{word.pronunciation}</div>
              <div className="word-example">
                <div className="example-en">{word.exampleSentence}</div>
                <div className="example-zh">{word.exampleTranslation}</div>
              </div>
              <div className="word-actions">
                <button className="study-btn" onClick={() => handleStudy(word)}>📖 学习</button>
                <button className="quiz-btn" onClick={() => handleQuiz(word)}>✏️ 测验</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 学习弹窗 */}
      {selectedWord && !showQuiz && (
        <div className="modal-overlay" onClick={() => setSelectedWord(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📖 学习单词</h3>
              <button className="close-btn" onClick={() => setSelectedWord(null)}>✕</button>
            </div>
            <div className="study-content">
              <div className="study-word">{selectedWord.word}</div>
              <button className="sound-large" onClick={() => speak(selectedWord.word)}>🔊 听发音</button>
              <div className="study-translation">{selectedWord.translation}</div>
              <div className="study-pronunciation">{selectedWord.pronunciation}</div>
              <div className="study-example">
                <p><strong>例句：</strong>{selectedWord.exampleSentence}</p>
                <p className="example-trans">{selectedWord.exampleTranslation}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 测验弹窗 */}
      {selectedWord && showQuiz && (
        <div className="modal-overlay" onClick={() => setSelectedWord(null)}>
          <div className="modal-content quiz-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>✏️ 单词测验</h3>
              <button className="close-btn" onClick={() => setSelectedWord(null)}>✕</button>
            </div>
            <div className="quiz-content">
              <p className="quiz-question">"{selectedWord.word}" 的意思是？</p>
              <div className="quiz-options">
                {[
                  selectedWord.translation,
                  wordData.find(w => w.id !== selectedWord.id && w.group === selectedWord.group)?.translation || '测试',
                  wordData.find(w => w.id !== selectedWord.id && w.group !== selectedWord.group)?.translation || '选项',
                ].map((option, i) => (
                  <button
                    key={i}
                    className="quiz-option"
                    onClick={() => handleAnswer(option === selectedWord.translation)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Words;