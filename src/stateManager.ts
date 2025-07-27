import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { AuthStateTypes } from "./interfaces/auth";
export const AuthState = create<AuthStateTypes>()(
  persist(
    (set) => ({
      token: null,
      userID: null,
      setToken: (newToken) => set({ token: newToken }),
      setUserID: (newUserID) => set({ userID: newUserID }),
      logout: () => set({ token: null, userID: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
