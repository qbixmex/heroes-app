import HeroesList from "../Heroes/HeroesScreen";

const DCScreen = () => {
  return (
    <>
      <h1 className="text-center display-1 green">
        DC Screen
      </h1>
      <hr />

      <HeroesList publisher="DC Comics" />
    </>
  );
}

export default DCScreen
