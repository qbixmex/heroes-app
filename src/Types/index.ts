export type AuthState = {
  name?: string;
  logged?: boolean;
};

export type AuthAction =
  | { type: types.login, payload: AuthState }
  | { type: types.logout }
  | { type: null };

export enum types {
  login = "[auth] Login",
  logout = "[auth] Logout"  
}
