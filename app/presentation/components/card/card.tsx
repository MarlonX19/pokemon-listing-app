import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { useFavoritePokemons } from "@/app/store/features";
import Favorite from "../favorite/favorite";

type IProps = {
  name: string;
  imageUrl: string;
  currentId: string | number;
};

export function Card({ name, imageUrl, currentId }: IProps) {
  const { addFavoritePokemon, currentFavoritePokemon, removeFavoritePokemon } =
    useFavoritePokemons((state) => state);

  const removeFromFavorites = (pokemonId: string) => {
    removeFavoritePokemon(pokemonId);
  };
  return (
    <div className={`card ${styles.dimensions}`}>
      <div className={styles.imageDimensions}>
        <Image src={imageUrl} width={100} height={100} alt="image here" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link className={`${styles.linking}`} href={`/details/${currentId}`}>
          See details
        </Link>
        {currentFavoritePokemon.includes(String(currentId)) && (
          <button
            className={`${styles.RemoveFav}`}
            onClick={() => removeFromFavorites(String(currentId))}
          >
            Remove from favorites
          </button>
        )}
      </div>
      {currentFavoritePokemon.includes(String(currentId)) && (
        <Favorite top={4} right={4} />
      )}
    </div>
  );
}
