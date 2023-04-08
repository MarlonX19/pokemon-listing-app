import { create } from "zustand";
import {
  PokemonInfoResponse,
  PokemonNamesList,
} from "../../../../domain/models";
import { HttpStatusCode } from "../../../../application/protocols/http";
import {
  listAllPokemonNamesList,
  listPokemonInfo,
} from "../api/pokemon-api-calls";
import { pokemonInfoParams } from "../types";

interface PokemonState {
  pokemonNamesList: PokemonNamesList;
  pokemonInfoList: PokemonInfoResponse[];
  getAllPokemonNames: () => void;
  getAllPokemonInfo: (param: pokemonInfoParams[]) => void;
}

export const usePokemonState = create<PokemonState>((set) => ({
  pokemonNamesList: {} as PokemonNamesList,
  pokemonInfoList: {} as PokemonInfoResponse[],
  getAllPokemonNames: async () => {
    const response = await listAllPokemonNamesList();

    if (response.statusCode === HttpStatusCode.ok) {
      set((state) => ({ pokemonNamesList: response.body }));
    }
  },

  getAllPokemonInfo: async (arrayUrls: pokemonInfoParams[]) => {
    const response = await listPokemonInfo(arrayUrls);

    set((state) => ({ pokemonInfoList: response }));
  },
}));
