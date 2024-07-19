import { IPokemon } from "../../../../../@types/types";
import PokemonStat from "./PokemonStat";

interface PokemonProps {
  pokemon: IPokemon;
}

export default function PokemonStats({pokemon}:PokemonProps) {
    const keys = Object.keys(pokemon);
    return(
        
      <div className="pokemonModal-stats">
          <PokemonStat stat={pokemon.hp} title={keys[5].toUpperCase()}/>
          <PokemonStat stat={pokemon.atk} title={keys[6].toUpperCase()}/>
          <PokemonStat stat={pokemon.def} title={keys[7].toUpperCase()}/>
          <PokemonStat stat={pokemon.atk_spe} title={keys[8].toUpperCase()}/>
          <PokemonStat stat={pokemon.def_spe} title={keys[9].toUpperCase()}/>
          <PokemonStat stat={pokemon.speed} title={keys[10].toUpperCase()}/>
      </div>
      
    )
}