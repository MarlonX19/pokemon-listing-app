import { LoadFunction } from "../../common/types";
import { PokemonInfoResponse } from "../../models";
import { HttpResponse } from "../../../application/protocols/http";

export interface LoadPokemonInfo
  extends LoadFunction<HttpResponse<PokemonInfoResponse>, string> {}
