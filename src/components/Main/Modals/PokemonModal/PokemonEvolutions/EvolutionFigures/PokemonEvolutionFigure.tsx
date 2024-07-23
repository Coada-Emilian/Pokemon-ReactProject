import { IPokemon } from "../../../../../../@types/types";
import imgSource from "../../../../../../assets/img/1.webp";

interface PokemonEvolutionFigureProps {
  pokemon: IPokemon;
}

export default function PokemonEvolutionFigure({
  pokemon,
}: PokemonEvolutionFigureProps) {
  const imageSource = `${imgSource.slice(0, 16)}${pokemon.id}.webp`;

  return (
    <div className="pokemonModal-evolutions-figure">
      <div className="figure_image-title">
        <figure className="pokemon-figure">
          <img
            className="is-rounded figure_image"
            src={imageSource}
            slot="pokemonModal_evolutions_pokemon_image"
          />
          <p
            className="figure_title"
            slot="pokemonModal_evolutions_pokemon_title"
          >
            {pokemon.name}
          </p>
        </figure>
      </div>
    </div>
  );
}
