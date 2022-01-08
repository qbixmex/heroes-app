import HeroesList from "../Heroes/HeroesScreen";

const MarvelScreen = () => {
  return (
    <>
      <h1 className="text-center display-1 green">
        Marvel Screen
      </h1>
      <hr />

      <HeroesList publisher="Marvel Comics" />
    </>
  );
};

export default MarvelScreen;
