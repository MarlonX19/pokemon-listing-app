"use client";
import React from "react";
import styles from "./styles.module.css";
import { useFavoritePokemons, usePokemonState } from "@/app/store/features";
import Image from "next/image";
import Chips from "@/app/presentation/components/chips/chips";
import { AiOutlineClose, AiOutlineCheck, AiFillStar } from "react-icons/ai";
import Favorite from "@/app/presentation/components/favorite/favorite";

type IProps = {
  params: { id: string | number };
};

export default function Details({ params }: IProps) {
  const { id } = params;

  const { pokemonInfoList } = usePokemonState((state) => state);
  const { currentFavoritePokemon, addFavoritePokemon } = useFavoritePokemons(
    (state) => state
  );

  const detailedPokemon = pokemonInfoList?.filter?.(
    (pokemonInfo) => pokemonInfo?.body?.id === Number(id)
  )?.[0];

  const addToFavorite = (pokemonId: string) => {
    addFavoritePokemon(pokemonId);
  };

  return (
    <div className={`${styles.main} container`}>
      <div className={`${styles.cardContainer}`}>
        {detailedPokemon?.body && (
          <>
            <div>
              <Image
                src={
                  detailedPokemon.body.sprites.other.dream_world.front_default
                }
                width={200}
                height={200}
                alt={`${detailedPokemon.body.name} photo`}
              />
            </div>
            <div className={`${styles.bodyCard}`}>
              <div>
                <h3>{detailedPokemon.body.name} - details</h3>
              </div>
              <div className={`${styles.chipsContainer}`}>
                <Chips text={`Height: ${detailedPokemon.body.height}`} />
                <Chips text={`Weight: ${detailedPokemon.body.weight}`} />
                <Chips text={`Species: ${detailedPokemon.body.species.name}`} />
              </div>
              <div className={`${styles.abilityContainer}`}>
                <h6>Abilities:</h6>
                <ul>
                  {detailedPokemon.body.abilities.map((info) => {
                    return (
                      <li key={info.ability.name}>
                        {info.ability.name}{" "}
                        {info.is_hidden ? (
                          <AiOutlineClose color="red" />
                        ) : (
                          <AiOutlineCheck color="green" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {currentFavoritePokemon.includes(String(id)) ? (
                <Favorite />
              ) : (
                <button
                  className={`${styles.AddFav}`}
                  onClick={() => addToFavorite(String(id))}
                >
                  Add to favorites
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
