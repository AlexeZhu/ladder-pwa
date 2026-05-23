// src/pages/Onboarding/Onboarding.tsx
import { useState, useEffect } from 'react';
import { useLanguageStore } from '../../stores/languageStore';
import { getNativeLanguages, getTargetLanguages } from '../../config/languageConfig';
import type { Language } from '../../config/languageConfig';

function Onboarding() {
  const [selectedL1, setSelectedL1] = useState('zh-CN');
  const [selectedL2, setSelectedL2] = useState('en-US');
  const [nativeLanguages, setNativeLanguages] = useState<Language[]>([]);
  const [targetLanguages, setTargetLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);
  const { completeOnboarding } = useLanguageStore();

  useEffect(() => {
    const loadLanguages = async () => {
      const native = await getNativeLanguages();
      const target = await getTargetLanguages();
      setNativeLanguages(native);
      setTargetLanguages(target);
      setLoading(false);
    };
    loadLanguages();
  }, []);

  const handleStart = () => {
    completeOnboarding(selectedL1, selectedL2);
  };

  if (loading) {
    return (
      <div style={{ 
        maxWidth: '500px', 
        margin: '0 auto', 
        padding: '40px 20px',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ color: 'white' }}>加载语言配置中...</div>
      </div>
    );
  }

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
            {nativeLanguages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.flag} {lang.name}</option>
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
            {targetLanguages.filter(lang => lang.code !== selectedL1).map(lang => (
              <option key={lang.code} value={lang.code}>{lang.flag} {lang.name}</option>
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