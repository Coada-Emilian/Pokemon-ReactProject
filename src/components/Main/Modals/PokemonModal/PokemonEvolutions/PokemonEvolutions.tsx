import { useState } from "react";
import { IPokemon } from "../../../../../@types/types";
import PokemonEvolutionFigure from "./EvolutionFigures/PokemonEvolutionFigure";
import PokemonEvolutionIcon from "./EvolutionFigures/PokemonEvolutionIcon";

interface PokemonProps {
  pokemon: IPokemon;
}

export default function PokemonEvolutions({ pokemon }: PokemonProps) {
  // const [isDevolution, setIsDevolution] = useState(false);
  // const [isEvolution, setIsEvolution] = useState(false);

  // {pokemon.devolution_id && setIsDevolution(true)};
  // {pokemon.evolution_id && setIsEvolution(true)};

  return (
    <div className="pokemonModal-evolutions">
      <div className="pokemonModal-evolutions-title">
        <p className="pokemonModal-evolutions-paragraph">Evolutions</p>
      </div>

      <div className="pokemonModal-evolutions-figures">
        <PokemonEvolutionFigure />
        <PokemonEvolutionIcon />
        <PokemonEvolutionFigure />
        <PokemonEvolutionIcon />
        <PokemonEvolutionFigure />
      </div>
    </div>
  );
}
