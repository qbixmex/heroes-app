import getHeroesByPublisher from "../../Selectors/getHeroesByPublisher";
import HeroCard from './HeroCard';

type Props = {
  publisher: string;
};

const HeroesList = ({ publisher }: Props) => {
  const heroes = getHeroesByPublisher( publisher );

  return (
    <div className="row rows-cols-1 g-3">
      {
        heroes.map( hero => (
          <HeroCard key={ hero.id } { ...hero } />
        ))
      }
    </div>
  );
};

export default HeroesList;