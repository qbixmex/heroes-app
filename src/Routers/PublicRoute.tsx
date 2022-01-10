import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/authContext';

type Props = {
  children: JSX.Element
};

const PublicRoute = ({ children }: Props): JSX.Element => {
  const { user } = useContext( AuthContext );

  return user.logged
    ? <Navigate to="/" />
    : children;
}

export default PublicRoute;
