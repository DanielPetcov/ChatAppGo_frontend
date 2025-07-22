import { create } from "zustand";
import type { StoreState } from "./interfaces/store";

export const useStore = create<StoreState>((set) => ({
  logged: false,
  updateLogged: () => set((state) => ({ logged: !state.logged })),
}));
