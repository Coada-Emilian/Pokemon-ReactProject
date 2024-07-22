import { useEffect, useState } from "react";
import { IPokemon } from "../../../../../@types/types";
import PokemonEvolutionFigure from "./EvolutionFigures/PokemonEvolutionFigure";
import PokemonEvolutionIcon from "./EvolutionFigures/PokemonEvolutionIcon";
import getPokemonById from "../../../../Api/getPokemonById";

interface PokemonProps {
  pokemon: IPokemon;
}

export default function PokemonEvolutions({ pokemon }: PokemonProps) {
  const [isDevolution, setIsDevolution] = useState(false);
  const [isEvolution, setIsEvolution] = useState(false);
  const [devolvedPokemon, setDevolvedPokemon] = useState<IPokemon>();
  const [evolvedPokemon, setEvolvedPokemon] = useState<IPokemon>();

  useEffect(() => {
    const fetchEvolutions = async () => {
      if (pokemon.devolution_id) {
        setIsDevolution(true);
        const devolvedPokemonData = await getPokemonById(pokemon.devolution_id);
        setDevolvedPokemon(devolvedPokemonData);
      }
      if (pokemon.evolution_id) {
        setIsEvolution(true);
        const evolvedPokemonData = await getPokemonById(pokemon.evolution_id);
        setEvolvedPokemon(evolvedPokemonData);
      }
    };

    fetchEvolutions();
  }, []);
  return (
    <div className="pokemonModal-evolutions">
      <div className="pokemonModal-evolutions-title">
        <p className="pokemonModal-evolutions-paragraph">Evolutions</p>
      </div>

      <div className="pokemonModal-evolutions-figures">
        {devolvedPokemon && (
          <>
            <PokemonEvolutionFigure pokemon={devolvedPokemon} />
            <PokemonEvolutionIcon />
          </>
        )}
        <PokemonEvolutionFigure pokemon={pokemon} />
        {evolvedPokemon && (
          <>
            <PokemonEvolutionIcon />
            <PokemonEvolutionFigure pokemon={evolvedPokemon} />
          </>
        )}
      </div>
    </div>
  );
}
