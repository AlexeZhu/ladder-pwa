// src/stores/languageStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  l1: string;           // 母语代码，如 'zh-CN'
  l2: string;           // 目标语言代码，如 'en-US'
  hasOnboarded: boolean;
  setL1: (code: string) => void;
  setL2: (code: string) => void;
  setHasOnboarded: (value: boolean) => void;
  completeOnboarding: (l1: string, l2: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      l1: 'zh-CN',
      l2: 'en-US',
      hasOnboarded: false,
      setL1: (code) => set({ l1: code }),
      setL2: (code) => set({ l2: code }),
      setHasOnboarded: (value) => set({ hasOnboarded: value }),
      completeOnboarding: (l1, l2) => set({ l1, l2, hasOnboarded: true }),
    }),
    {
      name: 'language-storage',
    }
  )
);