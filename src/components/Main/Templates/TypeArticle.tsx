import React from 'react';

import { Link } from 'react-router-dom';
import { IType } from '../../../@types/types';

import logo from '../../../assets/icons/pokemon-type-svg-icons-master/icons/Acier.svg';

interface TypesProps {
  type: IType;
}

export default function TypeArticle({ type }: TypesProps) {
  const logoSource = `${logo.slice(0, 54)}${type.name}.svg`;
  const imageAlt = `${type.name} logo`;

  return (
    <article className="type-article">
      <Link
        to={`/pokemonsOfType/${type.name}`}
        className="type-button"
        slot="type_icon"
      >
        <img src={logoSource} alt={imageAlt} className="" slot="type_image" />
        <p className="type-name" slot="type_name">
          {type.name}
        </p>
      </Link>
    </article>
  );
}
