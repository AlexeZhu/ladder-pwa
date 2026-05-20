// src/data/languageLoader.ts
import { useLanguageStore } from '../stores/languageStore';

// 支持的语言列表
export const SUPPORTED_LANGUAGES = [
  { code: 'en-US', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ja-JP', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
];

// 语言数据缓存
const dataCache: Record<string, any> = {};

// 动态加载语言数据
export const loadLanguageData = async (languageCode: string) => {
  // 如果已缓存，直接返回
  if (dataCache[languageCode]) {
    return dataCache[languageCode];
  }

  try {
    // 动态导入对应的语言包
    const data = await import(`./locales/${languageCode}/index.ts`);
    dataCache[languageCode] = data;
    return data;
  } catch (error) {
    console.error(`Failed to load language data for ${languageCode}:`, error);
    // 降级到英语
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
    getSupportedLanguages: () => SUPPORTED_LANGUAGES,
  };
};