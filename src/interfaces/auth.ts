interface AuthStateTypes {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export type { AuthStateTypes };
