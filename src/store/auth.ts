import { create } from 'zustand';

type User = { name: string; email: string };

type State = {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  setClear: () => void;
};

export const useStoreAuth = create<State>((set) => ({
  token: null,
  user: null,
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  setClear: () => set({ token: null, user: null }),
}));
