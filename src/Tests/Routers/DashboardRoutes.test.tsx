import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../Auth/authContext';
import DashboardRoutes from '../../Routers/DashboardRoutes';


//@ts-ignore
describe("Test on <DashboardRoutes />", () => {

  const contextValue = {
    user: {
      name: "John Doe",
      logged: true,
    },
    dispatch: jest.fn()
  };

  test("Should match with snapshot - Marvel", () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/"] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const name = wrapper.find(".text-info").text().trim();
    const title = wrapper.find("#marvelTitle").text().trim();

    expect( wrapper ).toMatchSnapshot();
    expect( name ).toBe( contextValue.user.name );
    expect( title ).toBe("Marvel Screen");

  });

  test("Should match with snapshot - DC", () => {

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={ ["/dc"] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const name = wrapper.find(".text-info").text().trim();
    const title = wrapper.find("#dcTitle").text().trim();

    expect( wrapper ).toMatchSnapshot();
    expect( name ).toBe( contextValue.user.name );
    expect( title ).toBe("DC Screen");

  });
});
