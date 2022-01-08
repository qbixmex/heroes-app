import heroes from "../Data/heroes";
import { Hero } from "../Interfaces";

const getHeroesByName = ( superhero: string ): Hero[] => {
  // superhero = superhero.toLowerCase().trim();
  // return heroes.filter( hero => hero.superhero.toLowerCase().includes( superhero ));
  return heroes;
};

export default getHeroesByName;
