import { createContext, Dispatch } from "react";
import { AuthAction, AuthState } from "../Types";

type AuthProps = {
  user: AuthState;
  dispatch: Dispatch<AuthAction>;
};

export const AuthContext = createContext({} as AuthProps);
