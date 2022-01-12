import { Route, Routes, MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../Auth/authContext';
import LoginScreen from '../../../Components/Login/LoginScreen';
import { mount } from 'enzyme';
import { types } from '../../../Types';

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

// @ts-ignore
describe("Tests on LoginScreen", () => {

  const contextValue = {
    user: {
      logged: false,
    },
    dispatch: jest.fn()
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={ ["/login" ]}>
        <Routes>
          <Route path="/login" element={ <LoginScreen /> } />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Should match with snapshot", () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test("Should login after click login button", () => {
    const mockEvent = {} as React.MouseEvent<HTMLButtonElement>;

    const handleClick = wrapper.find("button").prop<React.MouseEventHandler>("onClick");

    handleClick( mockEvent );

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: { name: "John Doe" }
    });
    
    expect( mockNavigate ).toHaveBeenCalledWith("/", { replace: true });

    localStorage.setItem("lastPath", "/dc");

    handleClick( mockEvent );

    expect( mockNavigate ).toHaveBeenCalledWith("/dc", { replace: true });
  });

});
