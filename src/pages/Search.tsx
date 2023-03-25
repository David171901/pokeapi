// Components
import { CardPokemon } from "../components/CardPokemon";
import { Loader } from "../components/Loader";
import { ButtonTop } from "../components/ButtonTop";
// Libraries
import { useLocation } from "react-router-dom";
// Custom Hooks
import usePokemon from "../hooks/usePokemon";

export const Search = () => {
  const location = useLocation();

  const { globalPokemons, loading } = usePokemon();

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <main className="p-2">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-2xl font-bold uppercase">
            Se encontraron <span>{filteredPokemons.length}</span> resultados:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {filteredPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} pokemon={pokemon}></CardPokemon>
            ))}
          </div>
          <ButtonTop></ButtonTop>
        </>
      )}
    </main>
  );
};
