// src/config/languageConfig.ts
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface VoiceMapping {
  [key: string]: string;
}

export interface LanguageConfig {
  nativeLanguages: Language[];
  targetLanguages: Language[];
  voiceMapping: VoiceMapping;
}

let cachedConfig: LanguageConfig | null = null;
let configLoading: Promise<LanguageConfig> | null = null;

export const loadLanguageConfig = async (): Promise<LanguageConfig> => {
  if (cachedConfig) {
    return cachedConfig;
  }

  if (configLoading) {
    return configLoading;
  }

  configLoading = (async () => {
    try {
      const response = await fetch('/config/languages.json');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      cachedConfig = await response.json();
      return cachedConfig!;
    } catch (error) {
      console.error('Failed to load language config:', error);
      // 返回默认配置（至少有一种语言）
      cachedConfig = {
        nativeLanguages: [{ code: 'zh-CN', name: '中文（简体）', flag: '🇨🇳' }],
        targetLanguages: [{ code: 'en-US', name: 'English', flag: '🇺🇸' }],
        voiceMapping: { 'en-US': 'en-US' }
      };
      return cachedConfig;
    } finally {
      configLoading = null;
    }
  })();

  return configLoading;
};

export const getNativeLanguages = async (): Promise<Language[]> => {
  const config = await loadLanguageConfig();
  return config.nativeLanguages;
};

export const getTargetLanguages = async (): Promise<Language[]> => {
  const config = await loadLanguageConfig();
  return config.targetLanguages;
};

export const getVoiceLang = async (code: string): Promise<string> => {
  const config = await loadLanguageConfig();
  return config.voiceMapping[code] || code;
};

// 同步版本（用于组件内部，需要先确保配置已加载）
export const getVoiceLangSync = (code: string, config: LanguageConfig): string => {
  return config.voiceMapping[code] || code;
};