import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
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
