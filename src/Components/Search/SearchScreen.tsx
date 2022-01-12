import { useNavigate, useLocation } from 'react-router-dom';
import queryString from "query-string";
import useForm from '../../Hooks/useForm';
import getHeroesByName from '../../Selectors/getHeroesByName';
import HeroCard from '../Heroes/HeroCard';
import { Hero } from '../../Interfaces';
import { useMemo } from 'react';
import "animate.css"

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const { handleInputChange, searchText } = useForm({ searchText: q });

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`?q=${ searchText }`);
  };

  let heroes: Hero[] | undefined;

  heroes = useMemo(() => getHeroesByName( String(q) ), [ q ]);

  return (
    <div>
      <h1 id="searchTitle" className="text-center display-1 green">Search Screen</h1>
      <hr />

      <div className="animate__animated animate__fadeIn">
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
                value={ searchText! }
                onChange={ handleInputChange }
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

        <div className="row">
          {
            ( q === "" )
            ? 
              <div className='alert alert-info text-center mt-3'>
                <b>Type your favorite hero above</b>
              </div>
            : ( heroes?.length === 0 ) &&
              <div id="noResults" className="alert alert-danger text-center mt-3">
                <b>There's no results with "{ q }"</b>
              </div>
          }

          {
            heroes?.map(hero => ( <HeroCard key={ hero.id } { ...hero } /> ))
          }
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
