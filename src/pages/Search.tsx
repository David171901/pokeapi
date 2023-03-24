import React from "react";
import { useLocation } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { CardPokemon } from "../components/CardPokemon";

export const Search = () => {
  const location = useLocation();

  const { globalPokemons } = usePokemon();

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-2xl font-bold uppercase">
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
