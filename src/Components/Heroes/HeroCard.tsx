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

const HeroCard = ({ id, superhero }: Props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeIn">
      <Link
        to={ `/hero/${ id }` }
        className="text-decoration-none"
        title="More Details"
      >
        <div className="card text-dark mb-4">
          <div className="row no-gutters">
            <div className="col-12">
              <img className="img-fluid rounded" src={ `/assets/${ id }.jpg` } alt={ superhero } />
            </div>
            <div className="col-12">
              <div className="card-body">
                <h1 className="text-center dark">{ superhero }</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeroCard;
