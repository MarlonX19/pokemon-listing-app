"use client";
import React from "react";
import { Card, Container } from "../presentation/components";
import { useFavoritePokemons } from "../store/features";

export default function Favorite() {
  const { currentFavoriteDetails } = useFavoritePokemons((state) => state);

  return (
    <Container>
      {currentFavoriteDetails?.map((values) => {
        return (
          <Card
            key={values.body.id}
            currentId={values.body.id}
            name={values.body.name}
            imageUrl={values.body.sprites.other.dream_world.front_default}
          />
        );
      })}
    </Container>
  );
}
