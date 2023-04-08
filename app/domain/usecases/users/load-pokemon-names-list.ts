import { LoadFunction } from "../../common/types";
import { PokemonNamesList } from "../../models";
import { HttpResponse } from "../../../application/protocols/http";

export interface LoadPokemonNamesList
  extends LoadFunction<HttpResponse<PokemonNamesList>> {}
