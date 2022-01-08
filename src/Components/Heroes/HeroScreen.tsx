import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Hero } from "../../Interfaces";
import getHeroById from "../../Selectors/getHeroById";
import "animate.css";


const HeroScreen = () => {
  
  const { id: paramId } = useParams();

  const hero: Hero | undefined = useMemo(() => getHeroById( paramId! ), [ paramId ]);
  
  const navigate = useNavigate();

  if ( !hero ) {
    return <Navigate to="/" />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const handleReturn = (): void => {
    navigate( -1 );
  };

  return (
    <div className="row mt-5">
      <div className="col-12 col-md-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={ `/assets/${ id }.jpg` }
          alt={ superhero }
          title={ superhero }
        />
      </div>
      <div className="col-12 col-md-8 animate__animated animate__fadeInRight">
        <h1 className="text-center display-4 green mt-4 mt-md-0 mb-4">
          { superhero }
        </h1>
        <table className="table table-dark">
          <tbody>
            <tr>
              <th>Alter Ego</th>
              <td>{ alter_ego }</td>
            </tr>
            <tr>
              <th>Publisher</th>
              <td>{ publisher }</td>
            </tr>
            <tr>
              <th>First Appearance</th>
              <td>{ first_appearance }</td>
            </tr>
            <tr>
              {
                ( alter_ego !== characters ) &&
                <>
                  <th>Characters</th>
                  <td className="text-muted">{ characters }</td>
                </>
              }
            </tr>
          </tbody>
        </table>

        <div className="text-end">
          <button
            className="btn btn-outline-primary"
            onClick={ handleReturn }
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
