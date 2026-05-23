// src/data/languageLoader.ts
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
    // 降级到英语
    const fallbackData = await import(`./locales/en-US/index.ts`);
    dataCache[languageCode] = fallbackData;
    return fallbackData;
  }
};