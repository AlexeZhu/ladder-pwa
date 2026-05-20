// src/stores/languageStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  l1: string;
  l2: string;
  hasOnboarded: boolean;  // 👈 新增：是否已完成首次引导
  setL1: (code: string) => void;
  setL2: (code: string) => void;
  setHasOnboarded: (value: boolean) => void;  // 👈 新增
  completeOnboarding: (l1: string, l2: string) => void;  // 👈 新增：完成引导
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      l1: 'zh-CN',
      l2: 'en-US',
      hasOnboarded: false,  // 默认未完成引导
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