import React from 'react';
import pokeballIcon from '../../../assets/icons/pokeball-icon.png';
import ReturnToPokedexButton from '../../Buttons/ReturnToPokedexButton';

import './Error404Page.scss';

export default function Error404Page() {
  return (
    <div className="error-container">
      <p className="error-paragraph">Désole</p>
      <div className="pokeball-icon">
        <p className="pokeball-paragraph">4</p>
        <img src={pokeballIcon} alt="pokeball" className="pokeball-image" />
        <p className="pokeball-paragraph">4</p>
      </div>
      <ReturnToPokedexButton />
    </div>
  );
}
