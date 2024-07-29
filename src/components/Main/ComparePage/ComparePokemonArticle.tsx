/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { IPokemon } from '../../../@types/types';
import pokemonImage from '../../../assets/img/1.webp';
import PokemonEvolutions from '../Modals/PokemonModal/PokemonEvolutions/PokemonEvolutions';
import PokemonStats from '../Modals/PokemonModal/PokemonStats/PokemonStats';
import TypeArticle from '../Templates/TypeArticle';

interface ComparePokemonArticleProps {
  pokemon: IPokemon | undefined;
}

export default function ComparePokemonArticle({
  pokemon,
}: ComparePokemonArticleProps) {
  const pokemonImageSource = `${pokemonImage.slice(0, 16)}${pokemon?.id}.webp`;
  return (
    <div className="pokemonToCompare-container">
      <div className="pokemonToCompare-content">
        <div className="pokemonToCompare-title">
          <p className=" pokemonToCompare-subtitle">{pokemon?.name}</p>
        </div>

        <div className="pokemonToCompare-description-container">
          <div className="pokemonToCompare-img">
            <div className="pokemonToCompareimage-container">
              <img
                src={pokemonImageSource}
                alt={pokemon?.name}
                className="pokemonToCompare-image"
              />
            </div>
          </div>

          <div className="pokemonToCompare-description">
            <p className="pokemonToCompare-description-paragraph">
              {pokemon?.description}
            </p>
          </div>
        </div>

        <div className="pokemonToCompare-stats-types">
          <div className="pokemonToCompare-stats">
            <PokemonStats pokemon={pokemon} />
          </div>
          <div className="pokemonToCompare-types-container">
            <p className="types-paragraph">Types</p>
            <div className="pokemonToCompare-types">
              {pokemon?.types.map((type) => (
                <TypeArticle type={type} key={type.id} />
              ))}
            </div>
          </div>
        </div>

        <div className="pokemonToCompare-evolution-container">
          <PokemonEvolutions pokemon={pokemon} />
        </div>

        <footer className="pokemonToCompare-footer">
          <button
            type="button"
            className="button is-info pokemonToCompare-addButton"
          >
            Ajouter à l'équipe
          </button>
          <button
            type="button"
            className="button is-danger pokemonToCompare-removeButton"
          >
            Retirer de l'équipe
          </button>
        </footer>
      </div>
    </div>
  );
}
