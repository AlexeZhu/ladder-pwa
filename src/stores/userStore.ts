// src/stores/userStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id?: string;
  nickname?: string;
  email?: string;
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      token: null,
      
      login: async (email, password) => {
        // TODO: 对接后端 API
        console.log('登录:', email, password);
        // 临时模拟登录成功
        set({ 
          user: { email, nickname: email.split('@')[0] }, 
          isLoggedIn: true,
          token: 'fake-token'
        });
      },
      
      logout: () => {
        set({ user: null, isLoggedIn: false, token: null });
      },
      
      setUser: (user) => set({ user, isLoggedIn: true }),
    }),
    {
      name: 'user-storage',
    }
  )
);