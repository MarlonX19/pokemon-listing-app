import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  PokemonInfoResponse,
  PokemonNamesList,
} from "../../../../domain/models";
import { HttpStatusCode } from "../../../../application/protocols/http";
import {
  listAllPokemonNamesList,
  listPokemonInfo,
} from "../api/pokemon-api-calls";
import { FavoritePokemonType, pokemonInfoParams } from "../types";

interface PokemonState {
  pokemonNamesList: PokemonNamesList;
  pokemonInfoList: PokemonInfoResponse[];
  getAllPokemonNames: (offset: string, limit: string) => void;
  getAllPokemonInfo: (param: pokemonInfoParams[]) => void;
}

interface FavoritePokemonState {
  currentFavoritePokemon: string[];
  currentFavoriteDetails: PokemonInfoResponse[];
  addFavoritePokemon: (param: string) => void;
  removeFavoritePokemon: (param: string) => void;
  updateFavoritePokemonInfo: (info: any) => void;
}

export const usePokemonState = create<PokemonState>()((set) => ({
  pokemonNamesList: {} as PokemonNamesList,
  pokemonInfoList: [] as PokemonInfoResponse[],
  getAllPokemonNames: async (offset: string, limit: string) => {
    const response = await listAllPokemonNamesList(offset, limit);

    if (response.statusCode === HttpStatusCode.ok) {
      set((state) => ({ pokemonNamesList: response.body }));
    }
  },

  getAllPokemonInfo: async (arrayUrls: pokemonInfoParams[]) => {
    const response = await listPokemonInfo(arrayUrls);

    set((state) => ({ pokemonInfoList: response }));
  },
}));

//Using zustand's persist feature to deal with localstorage for the favorite pokemons to be listed
export const useFavoritePokemons = create<FavoritePokemonState>()(
  persist(
    (set, get) => ({
      currentFavoritePokemon: [] as string[],
      currentFavoriteDetails: [] as PokemonInfoResponse[],
      addFavoritePokemon: (pokemonId: string) =>
        set((prevState: FavoritePokemonState) => {
          return {
            currentFavoritePokemon: [
              ...prevState.currentFavoritePokemon,
              pokemonId,
            ],
          };
        }),
      removeFavoritePokemon: (pokemonId: string) =>
        set((prevState: FavoritePokemonState) => {
          return {
            currentFavoritePokemon: [
              ...prevState.currentFavoritePokemon?.filter(
                (pokemon) => pokemon !== pokemonId
              ),
            ],
          };
        }),
      updateFavoritePokemonInfo: (info: PokemonInfoResponse[]) =>
        set(() => {
          return {
            currentFavoriteDetails: [...info],
          };
        }),
    }),
    {
      name: "favorite-storage",
      getStorage: () => localStorage,
    }
  )
);
