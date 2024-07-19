import PokemonEvolutionFigure from "./EvolutionFigures/PokemonEvolutionFigure";
import PokemonEvolutionIcon from "./EvolutionFigures/PokemonEvolutionIcon";

export default function PokemonEvolutions() {
    return(

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

    )
}