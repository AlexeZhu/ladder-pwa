// src/stores/progressStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  alphabetMastery: Record<string, boolean>;
  wordsMastery: Record<string, number>;
  completedSentences: string[];
  readArticles: string[];
  
  markAlphabetComplete: (charId: string) => void;
  updateWordMastery: (wordId: string, level: number) => void;
  completeSentence: (sentenceId: string) => void;
  readArticle: (articleId: string) => void;
  
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
        const total = 26;
        const completed = Object.keys(alphabetMastery).length;
        return total > 0 ? (completed / total) * 100 : 0;
      },
      
      isAlphabetComplete: () => {
        const { alphabetMastery } = get();
        return Object.keys(alphabetMastery).length >= 26;
      },
    }),
    {
      name: 'progress-storage',
    }
  )
);