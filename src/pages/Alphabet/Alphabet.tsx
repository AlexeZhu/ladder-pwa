// src/pages/Alphabet/Alphabet.tsx
import { useProgressStore } from '../../stores/progressStore';
import { alphabetData } from '../../data/alphabetData';
import './Alphabet.css';

function Alphabet() {
  const { alphabetMastery, markAlphabetComplete } = useProgressStore();

  const speak = (char: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(char);
    utterance.lang = 'en-US';
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
  };

  const handleMarkComplete = (id: string) => {
    markAlphabetComplete(id);
  };

  const completedCount = Object.keys(alphabetMastery).length;
  const totalCount = alphabetData.length;
  const progress = (completedCount / totalCount) * 100;

  return (
    <div className="alphabet-page">
      {/* 进度条 */}
      <div className="progress-section">
        <div className="progress-info">
          <span>学习进度</span>
          <span>{completedCount} / {totalCount}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* 字母网格 */}
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