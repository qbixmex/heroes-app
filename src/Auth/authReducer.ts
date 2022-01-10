import { AuthState, AuthAction, types } from '../Types/index';

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
  switch ( action.type ) {
    case types.login:
      return {
        name: action.payload.name,
        logged: true
      };
    
    case types.logout:
      return { logged: false };

    default:
      return state;
  }
};
