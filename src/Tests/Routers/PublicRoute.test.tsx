import { AuthContext } from '../../Auth/authContext';
import { MemoryRouter } from 'react-router-dom';
import PublicRoute from '../../Routers/PublicRoute';
import { mount } from 'enzyme';

// @ts-ignore
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Home Page</span>
}));

describe("Tests on Public Route", () => {

  test("Should show component if user is not authenticated", () => {
    const contextValue = {
      user: { logged: false },
      dispatch: jest.fn()
    };
  
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/login"] }>
          <PublicRoute>
            <h1>Public Route</h1>
          </PublicRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe( "Public Route" );
  });

  test("Should not show Public Route if user is authenticated and redirect to homepage", () => {
    const contextValue = {
      user: {
        name: "John Doe",
        logged: true
      },
      dispatch: jest.fn()
    }

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/login"] }>
          <h1>Public Route</h1>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper.text().trim() ).toBe( "Public Route" );
  });
});
