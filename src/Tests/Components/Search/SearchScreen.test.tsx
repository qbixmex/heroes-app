import { mount } from 'enzyme';
import SearchScreen from '../../../Components/Search/SearchScreen';
import { AuthContext } from '../../../Auth/authContext';
import { MemoryRouter } from 'react-router-dom';

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

});
