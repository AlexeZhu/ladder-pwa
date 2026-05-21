// src/data/languageLoader.ts
import { useLanguageStore } from '../stores/languageStore';

// 所有支持的母语（界面语言）
export const NATIVE_LANGUAGES = [
  { code: 'zh-CN', name: '中文（简体）', flag: '🇨🇳' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
];

// 所有可学习的目标语言（有学习内容）
export const TARGET_LANGUAGES = [
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
];

// 语言数据缓存
const dataCache: Record<string, any> = {};

// 动态加载语言数据
export const loadLanguageData = async (languageCode: string) => {
  if (dataCache[languageCode]) {
    return dataCache[languageCode];
  }

  try {
    const data = await import(`./locales/${languageCode}/index.ts`);
    dataCache[languageCode] = data;
    return data;
  } catch (error) {
    console.error(`Failed to load language data for ${languageCode}:`, error);
    const fallbackData = await import(`./locales/en-US/index.ts`);
    dataCache[languageCode] = fallbackData;
    return fallbackData;
  }
};

// Hook 用于在组件中获取语言数据
export const useLanguageData = () => {
  const { l2 } = useLanguageStore();
  return {
    languageCode: l2,
    loadData: () => loadLanguageData(l2),
    getSupportedLanguages: () => TARGET_LANGUAGES,
  };
};