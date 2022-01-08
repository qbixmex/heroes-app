import { Hero } from "../Interfaces";
import Heroes from "../Data/Heroes";

const getHeroesByPublisher = ( publisher: string ): Hero[] => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if( !validPublishers.includes( publisher ) ) {
    throw new Error(`${ publisher } is not a valid publisher`);
  }

  return Heroes.filter( hero => hero.publisher === publisher);
};

export default getHeroesByPublisher;
