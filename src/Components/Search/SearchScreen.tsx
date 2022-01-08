import useForm from '../../Hooks/useForm';
import getHeroesByName from '../../Selectors/getHeroesByName';
import HeroCard from '../Heroes/HeroCard';

type Search = {
  searchText: string;
}

const SearchScreen = () => {

  const initialState: Search = { searchText: "" };

  const { handleInputChange, searchText } = useForm<Search>( initialState );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log( searchText );
  };

  const heroes = getHeroesByName("spiderman");

  return (
    <>
      <h1 className="text-center display-1 green">Search Screen</h1>
      <hr />

      <form onSubmit={handleSearch}>
        <div className="row mb-5">
          <div className="col-12 col-md-10 mb-3 mb-md-0">
            <input
              className="form-control"
              id="search"
              name="searchText"
              type="text"
              placeholder="Search a hero ..."
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 col-md-2">
            <div className="d-grid">
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      <h2 className="orange">Results</h2>

      <div className="row">
        <hr />
        
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
      </div>
    </>
  );
};

export default SearchScreen;
