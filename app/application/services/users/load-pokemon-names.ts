import { LoadPokemonNamesList } from "@/app/domain/usecases/users/load-pokemon-names-list";
import { HttpResponse, HttpClient } from "../../protocols/http";
import { PokemonNamesList } from "@/app/domain/models";
import { makeApiUrl } from "@/app/utils";

type Params = {
  offset: string;
  limit: string;
};

export class RemoteLoadPokemonNames implements LoadPokemonNamesList {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly url?: string
  ) {}

  async load(params?: Params): Promise<HttpResponse<PokemonNamesList>> {
    const httpResponse = await this.httpClient.request({
      method: "get",
      url: `${makeApiUrl()}pokemon?offset=${params?.offset}&limit=${
        params?.limit
      }`,
    });

    return httpResponse;
  }
}
