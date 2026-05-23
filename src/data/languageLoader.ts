// src/data/languageLoader.ts
export const NATIVE_LANGUAGES = [
  { code: 'zh-CN', name: '中文（简体）', flag: '🇨🇳' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
  { code: 'ru-RU', name: 'Русский', flag: '🇷🇺' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
  { code: 'de-DE', name: 'Deutsch', flag: '🇩🇪' },
];

export const TARGET_LANGUAGES = [
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
  { code: 'ru-RU', name: 'Русский', flag: '🇷🇺' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
  { code: 'de-DE', name: 'Deutsch', flag: '🇩🇪' },
];

const dataCache: Record<string, any> = {};

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