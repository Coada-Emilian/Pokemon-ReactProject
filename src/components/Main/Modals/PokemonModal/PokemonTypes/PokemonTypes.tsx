import React from 'react';

import { IType } from '../../../../../@types/types';
import PokemonType from './PokemonType';

import './PokemonTypes.scss';

interface TypeProps {
  types: IType[];
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PokemonTypes({ types, setIsModalOn }: TypeProps) {
  const typesJSX = types.map((type) => {
    return (
      <PokemonType type={type} key={type.id} setIsModalOn={setIsModalOn} />
    );
  });
  return (
    <div className="types">
      <p className="types_paragraph">Types</p>
      <div className="types_buttons" slot="modal-types">
        {typesJSX}
      </div>
    </div>
  );
}
