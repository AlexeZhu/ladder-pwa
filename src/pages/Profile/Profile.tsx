// src/pages/Profile/Profile.tsx
import { useState } from 'react';
import { useLanguageStore } from '../../stores/languageStore';
import { useProgressStore } from '../../stores/progressStore';
import { TARGET_LANGUAGES, NATIVE_LANGUAGES } from '../../data/languageLoader';
import './Profile.css';

interface Language {
  code: string;
  name: string;
  flag: string;
}

function Profile() {
  const { l1, l2, completeOnboarding } = useLanguageStore();
  const { getAlphabetProgress } = useProgressStore();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [tempL1, setTempL1] = useState(l1);
  const [tempL2, setTempL2] = useState(l2);

  const alphabetProgress = getAlphabetProgress();
  
  const getLanguageName = (code: string): string => {
    const allLanguages: Language[] = [...NATIVE_LANGUAGES, ...TARGET_LANGUAGES];
    const lang = allLanguages.find((l: Language) => l.code === code);
    return lang ? `${lang.flag} ${lang.name}` : code;
  };

  const handleLanguageChange = () => {
    completeOnboarding(tempL1, tempL2);
    setShowLanguageModal(false);
    window.location.reload();
  };

  const availableTargetLanguages = TARGET_LANGUAGES.filter((lang: Language) => lang.code !== tempL1);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar">👤</div>
        <div className="user-info">
          <h3>游客用户</h3>
          <p>登录后可同步学习进度</p>
        </div>
      </div>

      <div className="settings-section">
        <div className="section-title">🌐 语言设置</div>
        <div className="setting-item clickable" onClick={() => setShowLanguageModal(true)}>
          <div className="setting-row">
            <span className="setting-label">📖 我的母语</span>
            <span className="setting-value">{getLanguageName(l1)}</span>
          </div>
          <div className="setting-row">
            <span className="setting-label">🎯 学习语言</span>
            <span className="setting-value">{getLanguageName(l2)}</span>
          </div>
          <div className="change-hint">点击修改语言 ↻</div>
        </div>
      </div>

      <div className="stats-section">
        <div className="section-title">📊 学习统计</div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{Math.round(alphabetProgress)}%</div>
            <div className="stat-label">字母掌握</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">单词掌握</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">句子完成</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0</div>
            <div className="stat-label">范文阅读</div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="section-title">⚙️ 其他设置</div>
        <div className="setting-item">
          <span>🔔 每日提醒</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <span>📱 离线学习包</span>
          <span className="setting-value">未下载</span>
        </div>
        <div className="setting-item">
          <span>ℹ️ 关于</span>
          <span className="setting-value">版本 1.0.0</span>
        </div>
      </div>

      {showLanguageModal && (
        <div className="modal-overlay" onClick={() => setShowLanguageModal(false)}>
          <div className="modal-content language-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🌐 切换语言</h3>
              <button className="close-btn" onClick={() => setShowLanguageModal(false)}>✕</button>
            </div>
            <div className="language-selector">
              <div className="selector-group">
                <label>我的母语 (L1)</label>
                <select 
                  value={tempL1} 
                  onChange={(e) => {
                    const newL1 = e.target.value;
                    setTempL1(newL1);
                    if (tempL2 === newL1) {
                      const otherLang = availableTargetLanguages.find((l: Language) => l.code !== newL1);
                      if (otherLang) setTempL2(otherLang.code);
                    }
                  }}
                >
                  {NATIVE_LANGUAGES.map((lang: Language) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="selector-group">
                <label>学习的语言 (L2)</label>
                <select 
                  value={tempL2} 
                  onChange={(e) => setTempL2(e.target.value)}
                >
                  {availableTargetLanguages.map((lang: Language) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="warning-note">
                ⚠️ 切换语言后，学习进度会保留，但学习内容会切换到新语言
              </div>
              <button className="confirm-btn" onClick={handleLanguageChange}>
                确认切换
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;