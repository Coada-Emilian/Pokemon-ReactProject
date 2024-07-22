import { useState } from "react";
import { IPokemon } from "../../../@types/types";
import image from "../../../assets/img/1.webp";
import PokemonModal from "../Modals/PokemonModal/PokemonModal";

interface PokemonProps {
  pokemon: IPokemon;
}

export default function PokemonArticle({ pokemon }: PokemonProps) {
  const imageSource = `${image.slice(0, 16)}${pokemon.id}.webp`;
  const altText = `${pokemon.name} image`;
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <article className="pokemon-article">
      <a
        href="#"
        className="pokemon-card-anchor"
        onClick={() => {
          setIsModalOn(true);
        }}
      >
        <div className="card selectable" slot="pokemonArticle_id">
          <div className="pokemon-card" slot="pokemonArticle_card">
            <div className="card-image">
              <figure className="image is-128x128 pokemonArticle-figure">
                <img
                  src={imageSource}
                  alt={altText}
                  slot="pokemon_image"
                  className="pokemon-image"
                />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p
                    className="subtitle is-6 card_title"
                    slot="pokemonArticle_name"
                  >
                    {pokemon.name}
                  </p>
                </div>
              </div>
            </div>

            <footer className="card-footer">
              <button
                className="add-button button is-light"
                slot="pokemonArticle_addButton"
              >
                Ajouter à l'équipe
              </button>
              <button
                className="remove-button button is-dark"
                slot="pokemonArticle_removeButton"
              >
                Retirer de l'équipe
              </button>
            </footer>
          </div>
        </div>
      </a>
      {isModalOn && <PokemonModal pokemon={pokemon} />}
    </article>
  );
}
