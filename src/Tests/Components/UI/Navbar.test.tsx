import { mount } from 'enzyme';
import { AuthContext } from '../../../Auth/authContext';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from '../../../Components/UI/Navbar';
import { types } from '../../../Types';

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

// @ts-ignore
describe("Tests on Navbar", () => {
  
  const contextValue = {
    user: {
      name: "John Doe",
      logged: true,
    },
    dispatch: jest.fn()
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={ ["/"] }>
        <Routes>
          <Route path="/" element={ <Navbar /> } />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Should match with snapshot", () => {
    const username = wrapper.find(".text-info").text().trim()

    expect( wrapper ).toMatchSnapshot();
    expect( username ).toBe( contextValue.user.name );
  });

  test("Should call logout and call navigate with dispatch with arguments", () => {
    const mockEvent = {} as React.MouseEvent<HTMLButtonElement>;
    wrapper.find("#logout").prop<React.MouseEventHandler>("onClick")(mockEvent);

    expect( contextValue.dispatch ).toHaveBeenCalledWith({ type: types.logout });
    expect( mockNavigate ).toHaveBeenCalledWith( "/login", { "replace": true } );
  });

});
