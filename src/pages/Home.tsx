import { CardPokemon } from '../components/CardPokemon'
import usePokemon from '../hooks/usePokemon'

export const Home = () => {

  const {allPokemons,globalPokemons} =usePokemon()
  console.log("🚀 ~ file: Home.tsx:7 ~ Home ~ allPokemons:", [...new Set(globalPokemons.map(poke => poke.types[0].type.name))])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
    {
      allPokemons.map((pokemon) => 
        <CardPokemon 
          key={pokemon.id}
          pokemon={pokemon}
        ></CardPokemon>
      )
    }
    </div>
  )
}