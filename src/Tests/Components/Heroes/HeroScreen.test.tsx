import { mount } from "enzyme";
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import HeroScreen from "../../../Components/Heroes/HeroScreen";

const mockNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}));

//@ts-ignore
describe("Test on HeroScreen", () => {
  
  test("Should not show HeroScreen if url is empty", () => {
    const message = "There's no hero screen";
  
    const wrapper = mount(
      <MemoryRouter initialEntries={ ["/hero"] }>
        <Routes>
          <Route path="/hero" element={ <HeroScreen /> } />
          <Route path="/" element={ <h1>{ message }</h1> } />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper.find("h1").text().trim() ).toBe( message );
  });

  test("Should a hero if param exists and it was founded", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ["/hero/marvel-spider"] }>
        <Routes>
          <Route path="/hero/:id" element={ <HeroScreen /> } />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find("h1").text().trim() ).toBe("Spider Man");
  });

  test("Should return back to previous screen", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={ ["/hero/marvel-spider"] }>
        <Routes>
          <Route path="/hero/:id" element={ <HeroScreen /> } />
        </Routes>
      </MemoryRouter>
    );

    const mockEvent = {} as React.MouseEvent<HTMLButtonElement>;
    const handleClick = wrapper.find("button").prop<React.MouseEventHandler>("onClick");

    handleClick(mockEvent);

    expect( mockNavigate ).toHaveBeenCalledWith( -1 );
  });

  test("Should show no Hero Page if doesn't have a hero", () => {
    const message = "No Hero Page";
    const wrapper = mount(
      <MemoryRouter initialEntries={ ["/hero/marvel-spider123"] }>
        <Routes>
          <Route path="/hero/:id" element={ <HeroScreen /> } />
          <Route path="/" element={ <h1>{ message }</h1> } />
        </Routes>
      </MemoryRouter>
    );

    expect( wrapper.text() ).toBe( message );
  });
});
