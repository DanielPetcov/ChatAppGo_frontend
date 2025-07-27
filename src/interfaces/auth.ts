interface AuthStateTypes {
  token: string | null;
  userID: string | null;
  setToken: (token: string | null) => void;
  setUserID: (newUserID: string | null) => void;
  logout: () => void;
}

export type { AuthStateTypes };
