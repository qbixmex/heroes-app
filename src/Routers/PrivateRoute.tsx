import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/authContext';

type Props = {
  children: JSX.Element
};

const PrivateRoute = ({ children }: Props): JSX.Element => {
  const { user } = useContext( AuthContext );
  const { pathname, search } = useLocation();

  localStorage.setItem( 'lastPath', pathname + search );

  return user.logged
    ? children
    : <Navigate to="/" />;
};

export default PrivateRoute;
