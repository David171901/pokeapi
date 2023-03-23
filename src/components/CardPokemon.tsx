import React from "react";
import { Pokemon } from "../interfaces/pokemon";
import { Link } from "react-router-dom";
import { colorsByType } from "../helper/colorsCards";

interface props {
  pokemon: Pokemon
}

export const CardPokemon = ({pokemon} : props) => {

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="flex justify-center items-center">
      <div className=" w-full">
        <div className="relative mx-auto w-full">
          <span  className="relative inline-block w-full">
            <div
              className="rounded-lg p-4 shadow"
              style={{background: `${colorsByType(pokemon.types[0].type.name)[0]}`}}
            >
              <div className="relative flex h-56 justify-center overflow-hidden rounded-t-lg">
                <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                  <div
                    className="absolute inset-0 bg-opacity-80 flex justify-center items-center"
                    style={{background: `${colorsByType(pokemon.types[0].type.name)[1]}`}}
                  >
                    <img
                      className="bg-cover bg-no-repeat bg-center h-full"
                      src={
                        pokemon.sprites.other["official-artwork"].front_default
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="absolute bottom-2 left-0 z-10">
                  {pokemon.types.map((type) => (
                    <span key={type.type.name} className="ml-3 inline-flex select-none rounded-lg bg-black px-2 py-1 text-xs font-semibold text-white">
                      {type.type.name.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="rounded-b-lg p-4"
                style={{background: `${colorsByType(pokemon.types[0].type.name)[2]}`}}
              >
                <div className="flex justify-between font-bold text-black">
                  <h2
                    className="line-clamp-1 text-2xl md:text-lg"
                  >
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h2>
                  <h2>#{pokemon.id}</h2>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </Link>
  );
};
