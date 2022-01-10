export type AuthState = {
  name?: string;
  logged?: boolean;
};

export type AuthAction =
  | { type: types.login, payload: AuthState }
  | { type: types.logout };

export enum types {
  login = "[auth] Login",
  logout = "[auth] Logout"  
}
