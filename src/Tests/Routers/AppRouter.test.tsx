import { mount } from 'enzyme';
import { AuthContext } from '../../Auth/authContext';
import AppRouter from '../../Routers/AppRouter';

//@ts-ignore
describe("Test on <AppRouter />", () => {

  test("Should show login screen if user is not authenticated", () => {
    const contextValue = {
      user: {
        logged: false
      },
      dispatch: jest.fn()
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find("h1").text().trim() ).toBe( "Login Screen" );
  });
  
  test("Should show marvel component screen if user is authenticated", () => {

    const contextValue = {
      user: {
        logged: true,
        name: "John Doe"
      },
      dispatch: jest.fn()
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".navbar").exists() ).toBe( true );
  });
});
