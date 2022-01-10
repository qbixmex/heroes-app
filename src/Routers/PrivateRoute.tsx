import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/authContext';

type Props = {
  children: JSX.Element
};

const PrivateRoute = ({ children }: Props): JSX.Element => {
  const { user } = useContext( AuthContext );

  return user.logged
    ? children
    : <Navigate to="/login" />
};

export default PrivateRoute;
