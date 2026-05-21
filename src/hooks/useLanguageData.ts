// src/hooks/useLanguageData.ts
import { useLanguageStore } from '../stores/languageStore';
import { loadLanguageData } from '../data/languageLoader';

export const useLanguageData = () => {
  const { l2 } = useLanguageStore();
  return {
    languageCode: l2,
    loadData: () => loadLanguageData(l2),
  };
};