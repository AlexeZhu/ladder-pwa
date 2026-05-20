// src/pages/Words/Words.tsx
import { useState } from 'react';
import { useProgressStore } from '../../stores/progressStore';
import { wordData, wordGroups } from '../../data/wordData';
import type { WordItem } from '../../data/wordData';
import './Words.css';

function Words() {
  const { wordsMastery, updateWordMastery } = useProgressStore();
  const [selectedGroup, setSelectedGroup] = useState<string>('animals');
  const [selectedWord, setSelectedWord] = useState<WordItem | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  // 获取当前分组的单词
  const currentWords = wordData.filter(w => w.group === selectedGroup);
  
  // 获取当前分组的学习进度
  const groupWords = currentWords;
  const masteredCount = groupWords.filter(w => (wordsMastery[w.id] || 0) >= 3).length;
  const progress = (masteredCount / groupWords.length) * 100;

  const speak = (word: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
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

  return (
    <div className="words-page">
      {/* 分组标签 */}
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

      {/* 进度条 */}
      <div className="words-progress">
        <div className="progress-info">
          <span>📊 学习进度</span>
          <span>{masteredCount} / {groupWords.length} 已掌握</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: wordGroups.find(g => g.id === selectedGroup)?.color }}></div>
        </div>
      </div>

      {/* 单词列表 */}
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

      {/* 学习/测验弹窗 */}
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