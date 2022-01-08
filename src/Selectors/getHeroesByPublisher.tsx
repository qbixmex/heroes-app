import { Hero } from "../Interfaces";
import heroes from "../Data/heroes";

const getHeroesByPublisher = ( publisher: string ): Hero[] => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if( !validPublishers.includes( publisher ) ) {
    throw new Error(`${ publisher } is not a valid publisher`);
  }

  return heroes.filter( hero => hero.publisher === publisher);
};

export default getHeroesByPublisher;
