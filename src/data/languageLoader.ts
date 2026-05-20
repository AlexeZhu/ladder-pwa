// src/data/languageLoader.ts
import { useLanguageStore } from '../stores/languageStore';

// 所有支持的母语（界面语言）
export const NATIVE_LANGUAGES = [
  { code: 'zh-CN', name: '中文（简体）', flag: '🇨🇳' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
  { code: 'de-DE', name: 'Deutsch', flag: '🇩🇪' },
];

// 所有可学习的目标语言（有学习内容）
export const TARGET_LANGUAGES = [
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
  // 后续添加更多语言内容后，在这里添加
  // { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  // { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
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