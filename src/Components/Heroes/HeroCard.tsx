import { Hero } from "../../Interfaces";
import { Link } from "react-router-dom";

type Props = {
  id: Hero["id"];
  superhero: Hero["superhero"];
  publisher: Hero["publisher"];
  alter_ego: Hero["alter_ego"];
  first_appearance: Hero["first_appearance"];
  characters: Hero["characters"];
};

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}: Props) => {

  const imagePath = `/assets/${ id }.jpg`;

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card text-dark">
        <div className="row no-gutters">
          <div className="col-12">
            <img className="img-fluid rounded" src={ imagePath } alt={ superhero } />
          </div>
          <div className="col-12">
            <div className="card-body">
              <p className="display-5 text-center">{ superhero }</p>
              <div className="text-end">
                <p className="card-text">{ alter_ego }</p>
                <p className="card-text">
                  {
                    ( alter_ego !== characters ) && <p className="text-muted">{ characters }</p>
                  }
                </p>
                <p className="card-text">
                  <small className="text-muted">{ first_appearance }</small>
                </p>

                <Link to={ `/hero/${ id }` } className="btn btn-outline-primary">
                  details...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
