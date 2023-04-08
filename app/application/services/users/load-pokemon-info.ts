import { HttpResponse, HttpClient } from "../../protocols/http";
import { PokemonInfoResponse } from "@/app/domain/models";
import { makeApiUrl } from "@/app/utils";
import { LoadPokemonInfo } from "@/app/domain/usecases/users/load-pokemon-info";

export class RemoteLoadPokemonInfo implements LoadPokemonInfo {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly url?: string
  ) {}

  async load(
    param?: string | number
  ): Promise<HttpResponse<PokemonInfoResponse>> {
    const httpResponse = await this.httpClient.request({
      method: "get",
      url: `${param}`,
    });

    return httpResponse;
  }
}
