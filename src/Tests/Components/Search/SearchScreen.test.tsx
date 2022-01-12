import { mount } from 'enzyme';
import SearchScreen from '../../../Components/Search/SearchScreen';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

// @ts-ignore
describe("Tests on SearchScreen", () => {

  test("Should match with snapshot with default values", () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={ ["/search"] }>
        <SearchScreen />
      </MemoryRouter>
    );

    const title = wrapper.find("#searchTitle").text().trim();
    const alert = wrapper.find(".alert").text().trim();

    expect( wrapper ).toMatchSnapshot();
    expect( title ).toBe("Search Screen");
    expect( alert ).toBe("Type your favorite hero above");

  });

  test("Should show Batman with queryString input", () => {

    const query = "batman";

    const wrapper = mount(
      <MemoryRouter initialEntries={ [`/search?q=${ query }`] }>
        <SearchScreen />
      </MemoryRouter>
    );

    const input = wrapper.find("input").prop("value");

    expect( input ).toBe( query );

  });

  test("Should show no result message if can not find a query", () => {

    const query = "kakaroto";
    const message = `There's no results with "${ query }"`

    const wrapper = mount(
      <MemoryRouter initialEntries={ [`/search?q=${ query }`] }>
        <SearchScreen />
      </MemoryRouter>
    );

    const alert = wrapper.find("#noResults").text().trim();

    expect( alert ).toBe( message );

  });

  test("Should call navigate with new url", () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={ ["/search"] }>
        <SearchScreen />
      </MemoryRouter>
    );

    const query = "spiderman";

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchText",
        value: query
      }
    });

    const formSubmit = wrapper.find("form").prop<React.FormEventHandler>("onSubmit");

    const mockEvent = {
      preventDefault: () => {}
    } as React.FormEvent<HTMLFormElement>;

    formSubmit(mockEvent);

    expect( mockNavigate ).toHaveBeenCalledWith(`?q=${ query }`);

  });

});
