import React, { useEffect, useState } from "react";
import usePokemon from "../hooks/usePokemon";
import { Pokemon as PokemonInterface } from "../interfaces/pokemon";
import { useParams } from "react-router-dom";
import { colorsByType } from "../helper/colorsCards";
import { Loader } from "../components/Loader";

export const Pokemon = () => {
  const { getPokemonByID } = usePokemon();

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonInterface>();

  const { id } = useParams();

  const fetchPokemon = async (id: string | undefined) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="p-2">
      {loading ? (
        <Loader/>
      ) : (
        <>
          <div >
            <p className="text-9xl text-[#323099] font-extrabold">
              #{pokemon!.id}
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-5xl font-bold uppercase">{pokemon!.name}</h1>
                <div className="space-x-4 ">
                  {pokemon!.types.map((type) => (
                    <span 
                      key={type.type.name} 
                      className="uppercase rounded-lg px-2"
                      style={{background: `${colorsByType(type.type.name)[0]}`}}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div>
                  <div>
                    <p className="text-2xl md:text-lg font-semibold">Altura</p>
                    <span className="font-thin">{pokemon!.height}</span>
                  </div>
                  <div>
                    <p className="text-2xl md:text-lg font-semibold">Peso</p>
                    <span className="font-thin">{pokemon!.weight}KG</span>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={pokemon!.sprites.other["official-artwork"].front_default}
                  alt={`Pokemon ${pokemon!.name}`}
                />
              </div>
            </div>
          </div>

          <div>
            <h1  className="text-2xl font-bold uppercase">Estadísticas</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="w-52 text-2xl md:text-lg font-thin">Hp</span>
                <div className="w-10/12 bg-[#323099] rounded-full">
                  <div className="h-full w-full bg-[#FFFF00] rounded-full" style={{width:  `${pokemon!.stats[0].base_stat > 100 ? 100: pokemon!.stats[0].base_stat}%`}}></div>
                </div>
                <span className="w-32 text-2xl md:text-lg font-thin text-center">
                  {pokemon!.stats[0].base_stat}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="w-52 text-2xl md:text-lg font-thin">Attack</span>
                <div className="w-10/12 bg-[#323099] rounded-full">
                  <div className="h-full w-full bg-[#FFFF00] rounded-full" style={{width:  `${pokemon!.stats[1].base_stat > 100 ? 100: pokemon!.stats[1].base_stat}%`}}></div>
                </div>
                <span className="w-32 text-2xl md:text-lg font-thin text-center">
                  {pokemon!.stats[1].base_stat}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="w-52 text-2xl md:text-lg font-thin">Defense</span>
                <div className="w-10/12 bg-[#323099] rounded-full">
                  <div className="h-full w-full bg-[#FFFF00] rounded-full" style={{width:  `${pokemon!.stats[2].base_stat > 100 ? 100: pokemon!.stats[2].base_stat}%`}}></div>
                </div>
                <span className="w-32 text-2xl md:text-lg font-thin text-center">
                  {pokemon!.stats[2].base_stat}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="w-52 text-2xl md:text-lg font-thin">Special Attack</span>
                <div className="w-10/12 bg-[#323099] rounded-full">
                  <div className="h-full w-full bg-[#FFFF00] rounded-full" style={{width:  `${pokemon!.stats[3].base_stat > 100 ? 100: pokemon!.stats[3].base_stat}%`}}></div>
                </div>
                <span className="w-32 text-2xl md:text-lg font-thin text-center">
                  {pokemon!.stats[3].base_stat}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="w-52 text-2xl md:text-lg font-thin">Special Defense</span>
                <div className="w-10/12 bg-[#323099] rounded-full">
                  <div className="h-full w-full bg-[#FFFF00] rounded-full" style={{width:  `${pokemon!.stats[4].base_stat > 100 ? 100: pokemon!.stats[4].base_stat}%`}}></div>
                </div>
                <span className="w-32 text-2xl md:text-lg font-thin text-center">
                  {pokemon!.stats[4].base_stat}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="w-52 text-2xl md:text-lg font-thin">Speed</span>
                <div className="w-10/12 bg-[#323099] rounded-full">
                  <div className="h-full w-full bg-[#FFFF00] rounded-full" style={{width:  `${pokemon!.stats[5].base_stat > 100 ? 100: pokemon!.stats[5].base_stat}%`}}></div>
                </div>
                <span className="w-32 text-2xl md:text-lg font-thin text-center">
                  {pokemon!.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
