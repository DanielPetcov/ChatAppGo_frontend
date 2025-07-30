interface AuthStateTypes {
  token: string | null;
  userID: string | null;
  userName: string | null;
  setToken: (token: string | null) => void;
  setUserID: (newUserID: string | null) => void;
  setUserName: (name: string | null) => void;
  logout: () => void;
}

export type { AuthStateTypes };
