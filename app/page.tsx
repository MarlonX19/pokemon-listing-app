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

  const {
    currentFavoritePokemon,
    updateFavoritePokemonInfo,
    currentFavoriteDetails,
  } = useFavoritePokemons((state) => state);
  console.log("===xxx", currentFavoriteDetails);

  const {
    pokemonNamesList,
    getAllPokemonNames,
    pokemonInfoList,
    getAllPokemonInfo,
  } = usePokemonState((state) => state);

  console.log("===vvv", pokemonInfoList);

  const favoriteFilteredList = pokemonInfoList.filter((values) => {
    if (currentFavoritePokemon.includes(String(values.body.id))) {
      return values;
    }
  });

  console.log("===favoriteFilteredList", favoriteFilteredList);

  useEffect(() => {
    getAllPokemonNames(String(offset), String(LIMIT));
  }, [offset]);

  useEffect(() => {
    if (pokemonNamesList.results) {
      getAllPokemonInfo(pokemonNamesList.results);
    }
  }, [pokemonNamesList]);

  useEffect(() => {
    if (favoriteFilteredList?.length > 0) {
      updateFavoritePokemonInfo(favoriteFilteredList);
    }
  }, []);

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
