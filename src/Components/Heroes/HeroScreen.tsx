import { Navigate, useParams } from "react-router-dom";
import getHeroById from "../../Selectors/getHeroById";


const HeroScreen = () => {
  const { id } = useParams();

  const hero = id && getHeroById( id );

  if( !hero ) {
    return <Navigate to="/" />
  }

  return (
    <>
      <h1 className="text-center display-1 green">
        { hero.superhero }
      </h1>
    </>
  );
};

export default HeroScreen;
