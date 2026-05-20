// src/stores/languageStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  l1: string;           // 母语代码，如 'zh-CN'
  l2: string;           // 目标语言代码，如 'en-US'
  setL1: (code: string) => void;
  setL2: (code: string) => void;
  switchLanguage: (newL2: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      l1: 'zh-CN',           // 默认母语中文
      l2: 'en-US',           // 默认学英语
      setL1: (code) => set({ l1: code }),
      setL2: (code) => set({ l2: code }),
      switchLanguage: (newL2) => set({ l2: newL2 }),
    }),
    {
      name: 'language-storage',  // localStorage 的 key
    }
  )
);