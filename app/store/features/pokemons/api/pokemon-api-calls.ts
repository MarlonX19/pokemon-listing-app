import { PokemonInfoResponse, PokemonNamesList } from "@/app/domain/models";
import { HttpResponse } from "../../../../application/protocols/http";
import { RemoteLoadPokemonNames } from "../../../../application/services/users";
import { RemoteLoadPokemonInfo } from "../../../../application/services/users";
import { AxiosHttpClient } from "@/app/infra/http/axios-http-client";
import { pokemonInfoParams } from "../types";

let test = [
  "https://pokeapi.co/api/v2/pokemon/1/",
  "https://pokeapi.co/api/v2/pokemon/2",
];

const axiosInstance = AxiosHttpClient.getInstance();

export const listAllPokemonNamesList = async (): Promise<
  HttpResponse<PokemonNamesList>
> => {
  const LoadPokemonNamesInstance = new RemoteLoadPokemonNames(axiosInstance);
  return await LoadPokemonNamesInstance.load();
};

export const listPokemonInfo = async (
  arrayUrls: pokemonInfoParams[]
): Promise<PokemonInfoResponse[]> => {
  const LoadPokemonNamesInstance = new RemoteLoadPokemonInfo(axiosInstance);

  let arrayWithURLsToSearch: any = [];

  arrayUrls.forEach((value) => {
    arrayWithURLsToSearch.push(LoadPokemonNamesInstance.load(value.url));
  });

  const response: PokemonInfoResponse[] = await Promise.all([
    ...arrayWithURLsToSearch,
  ]);

  return response;
};
