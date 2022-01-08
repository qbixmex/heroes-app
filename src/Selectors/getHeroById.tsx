import heroes from "../Data/heroes";
import { Hero } from "../Interfaces";

const getHeroById = ( id: string ): Hero | undefined => {
  if ( id ) {
    return heroes.find( hero => hero.id === id );
  } else {
    throw new Error(`Hero with id: ${ id } does not exist!`);
  }
};

export default getHeroById;