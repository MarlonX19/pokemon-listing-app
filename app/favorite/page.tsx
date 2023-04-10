"use client";
import React, { useEffect, useState } from "react";
import { Card, Container } from "../presentation/components";
import { useFavoritePokemons } from "../store/features";
import styles from "./styles.module.css";
import { PokemonInfoResponse } from "../domain/models";

export default function Favorite() {
  const [favoritePokemons, setFavoritePokemons] = useState<
    PokemonInfoResponse[]
  >([]);

  const { currentFavoriteDetails } = useFavoritePokemons((state) => state);

  useEffect(() => {
    if (currentFavoriteDetails?.length > 0) {
      setFavoritePokemons([...currentFavoriteDetails]);
    }
  }, [currentFavoriteDetails]);

  return (
    <div className={styles.main}>
      <Container>
        {favoritePokemons.length > 0 ? (
          favoritePokemons?.map((values) => {
            return (
              <Card
                key={values.body.id}
                currentId={values.body.id}
                name={values.body.name}
                imageUrl={values.body.sprites.other.dream_world.front_default}
                isFavoriteCard={true}
              />
            );
          })
        ) : (
          <div className={`${styles.emptyBoxContainer}`}>
            <h2>No pokemons added to favorites!</h2>
          </div>
        )}
      </Container>
    </div>
  );
}
