import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

type State = {
  session: Session | null;
  isLoading: boolean;
};

type Action = {
  setSession: (session: State["session"]) => void;
  setIsLoading: (session: State["isLoading"]) => void;
};

export const useSessionStore = create<State & Action>((set) => ({
  session: null,
  isLoading: true,
  setSession: (session) => set(() => ({ session })),
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
}));
