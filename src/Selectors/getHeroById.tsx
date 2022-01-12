import heroes from "../Data/heroes";
import { Hero } from "../Interfaces";

const getHeroById = ( id: string ): Hero | void => {
  if ( !id ) return;
  return heroes.find( hero => hero.id === id )!;
};

export default getHeroById;