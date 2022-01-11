import heroes from "../Data/heroes";
import { Hero } from "../Interfaces";

const getHeroesByName = ( superhero: string): Hero[] | undefined => {
  if ( superhero === "" ) return undefined;
  superhero = superhero.toLowerCase().trim();
  return heroes.filter( hero => hero.superhero.toLowerCase().includes( superhero ));
};

export default getHeroesByName;
