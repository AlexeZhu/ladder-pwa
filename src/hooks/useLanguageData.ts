// src/hooks/useLanguageData.ts
import { useLanguageStore } from '../stores/languageStore';

// 动态导入语言包
export const useLanguageData = () => {
  const { l2 } = useLanguageStore();
  
  // 根据语言代码返回对应的数据
  const getData = async () => {
    switch(l2) {
      case 'en-US':
        return import('../data/en-US');
      case 'ja-JP':
        return import('../data/ja-JP');
      case 'ko-KR':
        return import('../data/ko-KR');
      default:
        return import('../data/en-US');
    }
  };
  
  return { getData, currentLanguage: l2 };
};