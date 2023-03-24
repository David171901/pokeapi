import { useState } from "react";
import { CardPokemon } from "../components/CardPokemon";
import { Loader } from "../components/Loader";
import usePokemon from "../hooks/usePokemon";
import InfiniteScroll from 'react-infinite-scroll-component';

export const Home = () => {

  const [hasMore,setHasMore] = useState(true);
  const { allPokemons, loading, offset ,setOffset } = usePokemon();

  return (
    <main className="p-2">
      {loading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={allPokemons.length}
          hasMore={hasMore}
          next={() => setOffset(offset + 60)}
          loader={<Loader/>}>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {allPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} pokemon={pokemon}></CardPokemon>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </main>
  );
};
