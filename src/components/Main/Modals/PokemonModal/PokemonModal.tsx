import { IPokemon } from "../../../../@types/types";
import PokemonEvolutions from "./PokemonEvolutions/PokemonEvolutions";
import PokemonStats from "./PokemonStats/PokemonStats";
import PokemonTypes from "./PokemonTypes/PokemonTypes";
import image from "../../../../assets/img/1.webp";

import "./PokemonModal.scss";

interface PokemonModalProps {
  pokemon: IPokemon;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PokemonModal({
  pokemon,
  setIsModalOn,
}: PokemonModalProps) {
  const imageSource = `${image.slice(0, 16)}${pokemon.id}.webp`;
  const altText = `${pokemon.name} image`;
  return (
    <div className="modal is-active pokemon-modal" id="pokemon-modal">
      <div
        className="modal-background close"
        slot="pokemonModal_background"
        onClick={() => {
          setIsModalOn(false);
        }}
      ></div>
      <div className="modal-card">
        <div className="modal-background has-background-dark"></div>
        <div className="modal-content">
          <div className="modal-title">
            <p className="title modal-subtitle" slot="modal_title">
              {pokemon.name}
            </p>
            <button
              className="delete close"
              type="button"
              slot="editTeamName_modal_button"
              onClick={() => {
                setIsModalOn(false);
              }}
            ></button>
          </div>

          <div className="pokemonModal-description">
            <div className="image">
              <p className="image is-128x128">
                <img
                  src={imageSource}
                  alt={altText}
                  slot="pokemonModal_image"
                />
              </p>
            </div>

            <div className="description">
              <p className="modal_description" slot="pokemonModal_description">
                {pokemon.description}
              </p>
            </div>
          </div>

          <div className="pokemonModal-stats-types">
            <PokemonStats pokemon={pokemon} />
            <PokemonTypes types={pokemon.types} />
          </div>

          <PokemonEvolutions pokemon={pokemon} />

          <footer className="card-footer">
            <button
              className="button is-light"
              slot="pokemonModal_compare_button"
            >
              Comparer
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
