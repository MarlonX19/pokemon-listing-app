import { LoadFunction } from "../../common/types";
import { PokemonNamesList } from "../../models";
import { HttpResponse } from "../../../application/protocols/http";

type Params = {
  offset: string;
  limit: string;
};

export interface LoadPokemonNamesList
  extends LoadFunction<HttpResponse<PokemonNamesList>, Params> {}
