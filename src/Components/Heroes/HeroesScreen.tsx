import { useMemo } from "react";
import getHeroesByPublisher from "../../Selectors/getHeroesByPublisher";
import HeroCard from './HeroCard';
import "animate.css";

type Props = {
  publisher: string;
};

const HeroesList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

  return (
    <div className="row rows-cols-1 animate__animated animate__fadeIn">
      {
        heroes.map( hero => (
          <HeroCard key={ hero.id } { ...hero } />
        ))
      }
    </div>
  );
};

export default HeroesList;
