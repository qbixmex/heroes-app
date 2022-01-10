import AppRouter from '../Routers/AppRouter';
import { AuthContext } from '../Auth/authContext';
import { useEffect, useReducer } from 'react';
import { authReducer } from '../Auth/authReducer';
import { AuthState } from '../Types/index';

const initialState: AuthState = {
  name: "",
  logged: false
};

const init = (): AuthState => {
  return JSON.parse( localStorage.getItem("user")! ) || { logged: false };
};

const HeroesApp = () => {

  const [ user, dispatch ] = useReducer( authReducer, initialState, init );

  useEffect(() => {
    if( !user ) return;

    localStorage.setItem("user", JSON.stringify( user ));
  }, [ user ]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
