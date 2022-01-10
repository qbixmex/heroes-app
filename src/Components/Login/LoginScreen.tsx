import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../Auth/authContext';
import { AuthAction, types } from "../../Types";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext( AuthContext );

  const handleLogin = () => {
    const action: AuthAction = {
      type: types.login,
      payload: { name: "John Doe" }
    };

    dispatch( action );
    
    navigate("/", {
      replace: true
    });
  };

  return (
    <>
      <h1 className="text-center display-1 green mt-4">Login Screen</h1>
      <hr />

      <div className="text-center">
        <button
          className="btn btn-outline-primary mt-5"
          onClick={ handleLogin }
        >Login with Google</button>
      </div>
    </>
  );
};

export default LoginScreen;
