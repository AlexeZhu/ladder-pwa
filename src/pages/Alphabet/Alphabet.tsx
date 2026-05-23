// src/pages/Alphabet/Alphabet.tsx
import { useState, useEffect } from 'react';
import { useProgressStore } from '../../stores/progressStore';
import { useLanguageStore } from '../../stores/languageStore';
import { loadLanguageData } from '../../data/languageLoader';
import type { AlphabetItem } from '../../data/locales/en-US/alphabet';
import './Alphabet.css';

function Alphabet() {
  const { l2 } = useLanguageStore();
  const { alphabetMastery, markAlphabetComplete } = useProgressStore();
  const [alphabetData, setAlphabetData] = useState<AlphabetItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await loadLanguageData(l2);
      setAlphabetData(data.alphabetData || []);
      setLoading(false);
    };
    loadData();
  }, [l2]);

  const speak = (char: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(char);
    // 根据语言设置正确的语音
    const langMap: Record<string, string> = {
  'en-US': 'en-US',
  'ja-JP': 'ja-JP',
  'ko-KR': 'ko-KR',
  'ru-RU': 'ru-RU',
  'es-ES': 'es-ES',    // 西班牙语
  'fr-FR': 'fr-FR',    // 法语
  'de-DE': 'de-DE',    // 德语
};

    utterance.lang = langMap[l2] || 'en-US';
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
  };

  const handleMarkComplete = (id: string) => {
    markAlphabetComplete(id);
  };

  const completedCount = Object.keys(alphabetMastery).length;
  const totalCount = alphabetData.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  if (loading) {
    return (
      <div className="alphabet-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (alphabetData.length === 0) {
    return (
      <div className="alphabet-page">
        <div className="empty-state">
          <p>暂无字母数据</p>
        </div>
      </div>
    );
  }

  return (
    <div className="alphabet-page">
      <div className="progress-section">
        <div className="progress-info">
          <span>学习进度</span>
          <span>{completedCount} / {totalCount}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="alphabet-grid">
        {alphabetData.map((item) => {
          const isCompleted = alphabetMastery[item.id];
          return (
            <div 
              key={item.id} 
              className={`alphabet-card ${isCompleted ? 'completed' : ''}`}
            >
              <div className="alphabet-char">{item.char}</div>
              <div className="alphabet-sound">{item.sound}</div>
              <div className="alphabet-example">
                {item.exampleWord}
                <span className="example-translation">({item.exampleTranslation})</span>
              </div>
              <div className="card-actions">
                <button 
                  className="play-btn"
                  onClick={() => speak(item.char)}
                >
                  🔊 发音
                </button>
                {!isCompleted && (
                  <button 
                    className="complete-btn"
                    onClick={() => handleMarkComplete(item.id)}
                  >
                    ✓ 标记掌握
                  </button>
                )}
                {isCompleted && (
                  <span className="completed-badge">✓ 已掌握</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Alphabet;