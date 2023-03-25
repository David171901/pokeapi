import { useState } from "react";
// Components
import { CardPokemon } from "../components/CardPokemon";
import { Loader } from "../components/Loader";
import { ButtonTop } from "../components/ButtonTop";
// Libraries
import InfiniteScroll from "react-infinite-scroll-component";
// Custom Hooks
import usePokemon from "../hooks/usePokemon";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const { allPokemons, loading, offset, setOffset } = usePokemon();
  console.log("🚀 ~ file: Home.tsx:10 ~ Home ~ allPokemons:", allPokemons);

  return (
    <main className="p-2">
      {loading ? (
        <Loader />
      ) : (
        <>
          <InfiniteScroll
            dataLength={allPokemons.length}
            hasMore={hasMore}
            next={() => setOffset(offset + 60)}
            loader={<Loader />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
              {allPokemons.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemon={pokemon}></CardPokemon>
              ))}
            </div>
          </InfiniteScroll>
          <ButtonTop></ButtonTop>
        </>
      )}
    </main>
  );
};
