// src/stores/progressStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  // 字母掌握状态：{ 'A': true, 'B': false, ... }
  alphabetMastery: Record<string, boolean>;
  // 单词掌握等级：{ 'wordId': 0-5 }
  wordsMastery: Record<string, number>;
  // 已完成的句子 ID 列表
  completedSentences: string[];
  // 已读的范文 ID 列表
  readArticles: string[];
  
  // Actions
  markAlphabetComplete: (charId: string) => void;
  updateWordMastery: (wordId: string, level: number) => void;
  completeSentence: (sentenceId: string) => void;
  readArticle: (articleId: string) => void;
  
  // 计算属性（派生状态）
  getAlphabetProgress: () => number;
  isAlphabetComplete: () => boolean;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      alphabetMastery: {},
      wordsMastery: {},
      completedSentences: [],
      readArticles: [],
      
      markAlphabetComplete: (charId) => 
        set((state) => ({
          alphabetMastery: { ...state.alphabetMastery, [charId]: true }
        })),
      
      updateWordMastery: (wordId, level) =>
        set((state) => ({
          wordsMastery: { ...state.wordsMastery, [wordId]: level }
        })),
      
      completeSentence: (sentenceId) =>
        set((state) => ({
          completedSentences: [...state.completedSentences, sentenceId]
        })),
      
      readArticle: (articleId) =>
        set((state) => ({
          readArticles: [...state.readArticles, articleId]
        })),
      
      getAlphabetProgress: () => {
        const { alphabetMastery } = get();
        const total = 26; // 英语字母总数，后面可以动态获取
        const completed = Object.keys(alphabetMastery).length;
        return total > 0 ? (completed / total) * 100 : 0;
      },
      
      isAlphabetComplete: () => {
        const { alphabetMastery } = get();
        // 假设英语有 26 个字母
        return Object.keys(alphabetMastery).length >= 26;
      },
    }),
    {
      name: 'progress-storage',
    }
  )
);