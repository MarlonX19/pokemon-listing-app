"use client";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { listPokemonInfo, usePokemonState } from "./store/features";
import styles from "./page.module.css";
import { Card, Container } from "./presentation/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    pokemonNamesList,
    getAllPokemonNames,
    pokemonInfoList,
    getAllPokemonInfo,
  } = usePokemonState((state) => state);

  console.log("===pokemonInfoList", pokemonInfoList);

  useEffect(() => {
    getAllPokemonNames();
  }, []);

  return (
    <main className={styles.main}>
      <Container>
        <div onClick={() => getAllPokemonInfo(pokemonNamesList.results)}>
          get info
        </div>
        {pokemonInfoList?.map((values) => {
          return (
            <Card
              key={values.body.id}
              name={values.body.name}
              imageUrl={values.body.sprites.other.dream_world.front_default}
            />
          );
        })}
      </Container>
    </main>
  );
}
