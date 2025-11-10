import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/auth';

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (payload: { user: User; token: string }) => void;
  clearAuth: () => void;
  updateUser: (partial: Partial<User>) => void;
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setAuth: ({ user, token }) => set({ user, token, isAuthenticated: true }),
      clearAuth: () => set({ user: null, token: null, isAuthenticated: false }),
      updateUser: (partial) => {
        const current = get().user;
        if (!current) return;
        set({ user: { ...current, ...partial } });
      },
    }),
    {
      name: 'auth', // localStorage key
      // persist only user and token to avoid stale boolean flags hiding UI
      partialize: (state) => ({ user: state.user, token: state.token }),
      // migrate any existing persisted state (remove isAuthenticated if present)
      version: 1,
      migrate: (persistedState: any, _version) => {
        if (!persistedState) return persistedState;
        return Promise.resolve({ user: persistedState.user ?? null, token: persistedState.token ?? null });
      },
    }
  )
);