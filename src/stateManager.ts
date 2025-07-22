import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { AuthStateTypes } from "./interfaces/auth";
export const AuthState = create<AuthStateTypes>()(
  persist(
    (set) => ({
      token: "null",
      setToken: (newToken) => set({ token: newToken }),
      logout: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
