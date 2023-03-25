import { useContext } from "react";
import PokemonProvider from "../context/PokemonProvider";

const usePokemon = () => {
  return useContext(PokemonProvider);
};

export default usePokemon;
