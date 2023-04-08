"use client";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { listPokemonInfo, usePokemonState } from "./store/features";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    pokemonNamesList,
    getAllPokemonNames,
    pokemonInfoList,
    getAllPokemonInfo,
  } = usePokemonState((state) => state);

  useEffect(() => {
    getAllPokemonNames();
  }, []);

  return (
    <main className={styles.main}>
      <h1 onClick={() => getAllPokemonInfo(pokemonNamesList.results)}>
        {JSON.stringify(pokemonNamesList)}
      </h1>
    </main>
  );
}
