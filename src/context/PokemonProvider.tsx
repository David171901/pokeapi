import { createContext, useState, useEffect } from "react";
import { Pokemon } from "../interfaces/pokemon";

interface props {
  children: JSX.Element | JSX.Element[];
}

interface context {
  allPokemons: Pokemon[]
  globalPokemons: Pokemon[]
  getPokemonByID: (id: string) => Promise<Pokemon>
  loading: boolean
  offset: number
  setOffset: (value: number) => void
}

interface result {
  name: string
  url: string
}

const PokemonContext = createContext<context>({} as context);

const PokemonProvider = ({ children }: props) => {

  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [globalPokemons, setGlobalPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // lLamar 50 pokemones a la API
  const getAllPokemons = async (limit = 60) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (result: result) => {
      const res = await fetch(result.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  // Llamar todos los pokemones
  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (result: result) => {
      const res = await fetch(result.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  // Llamar a un pokemon por ID
  const getPokemonByID = async (id: string): Promise<Pokemon> => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{
      allPokemons,
      globalPokemons,
      getPokemonByID,
      loading,
      offset,
      setOffset,
    }}>{children}</PokemonContext.Provider>
  );
};

export { PokemonProvider };

export default PokemonContext;
