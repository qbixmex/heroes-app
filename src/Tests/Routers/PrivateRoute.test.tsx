import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../Auth/authContext';
import PrivateRoute from '../../Routers/PrivateRoute';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Logging Out</span>
}));

// @ts-ignore
describe("Tests on Private Route", () => {
  
  test("Should show component if user is authenticated and save to localStorage", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      user: {
        logged: true,
        name: "John Doe"
      },
      dispatch: jest.fn()
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/"] }>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe( "Private Component" );
    expect( localStorage.setItem ).toHaveBeenCalledWith( "lastPath", "/" );
  });

  test("Should block component if user is not authenticated", () => {
    const contextValue = {
      user: {
        logged: false
      },
      dispatch: jest.fn()
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/"] }>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe( "Logging Out" );
  });
});
