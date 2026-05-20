// src/pages/Sentences/Sentences.tsx
// src/pages/Sentences/Sentences.tsx
import { useState } from 'react';
import { useProgressStore } from '../../stores/progressStore';
import { sentenceData } from '../../data/sentenceData';
import type { SentenceItem } from '../../data/sentenceData';
import './Sentences.css';

type Difficulty = 'beginner' | 'intermediate' | 'advanced';

function Sentences() {
  const { completedSentences, completeSentence } = useProgressStore();
  const [difficulty, setDifficulty] = useState<Difficulty>('beginner');
  const [selectedSentence, setSelectedSentence] = useState<SentenceItem | null>(null);
  const [showFillBlank, setShowFillBlank] = useState(false);

  const currentSentences = sentenceData.filter(s => s.difficulty === difficulty);
  
  const difficultyLabels = {
    beginner: '🌱 初级',
    intermediate: '🌿 中级',
    advanced: '🌲 高级'
  };

  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
  };

  const handleLearn = (sentence: SentenceItem) => {
    setSelectedSentence(sentence);
    setShowFillBlank(false);
  };

  const handlePractice = (sentence: SentenceItem) => {
    setSelectedSentence(sentence);
    setShowFillBlank(true);
  };

  const handleComplete = () => {
    if (selectedSentence && !completedSentences.includes(selectedSentence.id)) {
      completeSentence(selectedSentence.id);
    }
    setSelectedSentence(null);
    setShowFillBlank(false);
  };

  // 检查句子是否完成
  const isCompleted = (id: string) => completedSentences.includes(id);

  return (
    <div className="sentences-page">
      {/* 难度筛选 */}
      <div className="difficulty-tabs">
        {(['beginner', 'intermediate', 'advanced'] as Difficulty[]).map(level => (
          <button
            key={level}
            className={`difficulty-tab ${difficulty === level ? 'active' : ''}`}
            onClick={() => setDifficulty(level)}
          >
            {difficultyLabels[level]}
          </button>
        ))}
      </div>

      {/* 句子列表 */}
      <div className="sentences-list">
        {currentSentences.map(sentence => (
          <div key={sentence.id} className={`sentence-card ${isCompleted(sentence.id) ? 'completed' : ''}`}>
            <div className="sentence-header">
              <div className="sentence-text">{sentence.text}</div>
              <button className="sound-btn" onClick={() => speak(sentence.text)}>🔊</button>
            </div>
            <div className="sentence-translation">{sentence.translation}</div>
            {sentence.grammarNote && (
              <div className="grammar-note">📖 {sentence.grammarNote}</div>
            )}
            <div className="sentence-actions">
              <button className="learn-btn" onClick={() => handleLearn(sentence)}>📖 学习</button>
              <button className="practice-btn" onClick={() => handlePractice(sentence)}>✏️ 练习</button>
              {isCompleted(sentence.id) && <span className="completed-badge">✅ 已完成</span>}
            </div>
          </div>
        ))}
      </div>

      {/* 学习弹窗 */}
      {selectedSentence && !showFillBlank && (
        <div className="modal-overlay" onClick={() => setSelectedSentence(null)}>
          <div className="modal-content sentence-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📖 学习句子</h3>
              <button className="close-btn" onClick={() => setSelectedSentence(null)}>✕</button>
            </div>
            <div className="sentence-study">
              <div className="study-sentence">{selectedSentence.text}</div>
              <button className="sound-large" onClick={() => speak(selectedSentence.text)}>🔊 听发音</button>
              <div className="study-translation">{selectedSentence.translation}</div>
              {selectedSentence.grammarNote && (
                <div className="study-grammar">
                  <strong>📚 语法点：</strong>
                  <p>{selectedSentence.grammarNote}</p>
                </div>
              )}
              <div className="keywords">
                <strong>🔑 关键词：</strong>
                <div className="keyword-list">
                  {selectedSentence.keywords.map(keyword => (
                    <span key={keyword} className="keyword">{keyword}</span>
                  ))}
                </div>
              </div>
              <button className="complete-btn-large" onClick={handleComplete}>
                标记为已完成
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 填空练习弹窗 */}
      {selectedSentence && showFillBlank && (
        <div className="modal-overlay" onClick={() => setSelectedSentence(null)}>
          <div className="modal-content fillblank-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>✏️ 填空练习</h3>
              <button className="close-btn" onClick={() => setSelectedSentence(null)}>✕</button>
            </div>
            <div className="fillblank-content">
              <p className="fillblank-question">请填写空白处的单词：</p>
              <div className="fillblank-sentence">
                {(() => {
                  // 随机选择一个关键词来填空
                  const keywords = selectedSentence.keywords;
                  if (keywords.length === 0) return selectedSentence.text;
                  const targetKeyword = keywords[Math.floor(Math.random() * keywords.length)];
                  const regex = new RegExp(`(${targetKeyword})`, 'gi');
                  const parts = selectedSentence.text.split(regex);
                  return parts.map((part, i) => {
                    if (part.toLowerCase() === targetKeyword.toLowerCase()) {
                      return <input key={i} type="text" placeholder="_____" className="fillblank-input" />;
                    }
                    return <span key={i}>{part}</span>;
                  });
                })()}
              </div>
              <div className="fillblank-hint">
                <p>💡 提示：{selectedSentence.translation}</p>
              </div>
              <button className="check-btn" onClick={handleComplete}>
                检查答案并完成
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sentences;