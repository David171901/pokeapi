import { CardPokemon } from "../components/CardPokemon";
import { Loader } from "../components/Loader";
import usePokemon from "../hooks/usePokemon";

export const Home = () => {
  const { allPokemons, loading } = usePokemon();
  console.log(
    "🚀 ~ file: Home.tsx:7 ~ Home ~ allPokemons,loading:",
    allPokemons,
    loading
  );

  return (
    <main className="p-2">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {allPokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon}></CardPokemon>
          ))}
        </div>
      )}
    </main>
  );
};
