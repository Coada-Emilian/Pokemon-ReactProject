import React from 'react';

import { Link } from 'react-router-dom';
import { IType } from '../../../../../@types/types';

interface TypeProps {
  type: IType;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PokemonType({ type, setIsModalOn }: TypeProps) {
  const btnColor = `#${type.color}`;
  const handleClick = () => {
    setIsModalOn(false);
  };
  return (
    <Link
      to={`/pokemonsOfType/${type.name}`}
      className="button modalType-button"
      style={{ backgroundColor: btnColor }}
      onClick={handleClick}
    >
      {type.name}
    </Link>
  );
}
