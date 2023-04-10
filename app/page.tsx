"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import {
  listPokemonInfo,
  useFavoritePokemons,
  usePokemonState,
} from "./store/features";
import styles from "./page.module.css";
import { Card, Container } from "./presentation/components";
import Pagination from "./presentation/components/pagination";

const inter = Inter({ subsets: ["latin"] });

const LIMIT = 20;

export default function Home() {
  const [offset, setOffset] = useState<string | number>("0");

  console.log("===offset", offset);

  const {
    pokemonNamesList,
    getAllPokemonNames,
    pokemonInfoList,
    getAllPokemonInfo,
  } = usePokemonState((state) => state);

  const { currentFavoritePokemon } = useFavoritePokemons((state: any) => state);

  console.log("===currentFavoritePokemon", currentFavoritePokemon);

  useEffect(() => {
    getAllPokemonNames(String(offset), String(LIMIT));
  }, [offset]);

  useEffect(() => {
    if (pokemonNamesList.results) {
      getAllPokemonInfo(pokemonNamesList.results);
    }
  }, [pokemonNamesList]);

  return (
    <div className={styles.main}>
      <Container>
        {pokemonInfoList?.map((values) => {
          return (
            <Card
              key={values.body.id}
              currentId={values.body.id}
              name={values.body.name}
              imageUrl={values.body.sprites.other.dream_world.front_default}
            />
          );
        })}
        <Pagination
          page={offset}
          limit={LIMIT}
          total={pokemonNamesList?.count}
          setPage={setOffset}
        />
      </Container>
    </div>
  );
}
