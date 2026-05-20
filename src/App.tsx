// src/pages/Onboarding/Onboarding.tsx
import { useState } from 'react';
import { useLanguageStore } from '../../stores/languageStore';

// 支持的语言列表
const LANGUAGES = [
  { code: 'zh-CN', name: '中文（简体）' },
  { code: 'en-US', name: 'English' },
  { code: 'ja-JP', name: '日本語' },
  { code: 'ko-KR', name: '한국어' },
  { code: 'es-ES', name: 'Español' },
  { code: 'fr-FR', name: 'Français' },
];

function Onboarding() {
  const [selectedL1, setSelectedL1] = useState('zh-CN');
  const [selectedL2, setSelectedL2] = useState('en-US');
  const { setL1, setL2 } = useLanguageStore();

  const handleStart = () => {
    setL1(selectedL1);
    setL2(selectedL2);
    // 刷新页面会触发 App.tsx 重新判断，跳转到主页面
    window.location.reload();
  };

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '0 auto', 
      padding: '40px 20px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
        🌟 Ladder
        <span style={{ display: 'block', fontSize: '16px', fontWeight: 'normal', marginTop: '10px' }}>
          从字母到范文，一步一阶梯
        </span>
      </h1>

      <div style={{ background: 'white', borderRadius: '16px', padding: '24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            我的母语
          </label>
          <select 
            value={selectedL1} 
            onChange={(e) => setSelectedL1(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          >
            {LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            我想学习的语言
          </label>
          <select 
            value={selectedL2} 
            onChange={(e) => setSelectedL2(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          >
            {LANGUAGES.filter(lang => lang.code !== selectedL1).map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        <button 
          onClick={handleStart}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#4A90E2',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          开始学习
        </button>
      </div>
    </div>
  );
}

export default Onboarding;