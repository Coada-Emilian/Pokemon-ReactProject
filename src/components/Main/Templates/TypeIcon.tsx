import React from 'react';

import { IType } from '../../../@types/types';

import logo from '../../../assets/icons/pokemon-type-svg-icons-master/icons/Acier.svg';

interface TypesProps {
  type: IType;
}

export default function TypeIcon({ type }: TypesProps) {
  const logoSource = `${logo.slice(0, 54)}${type.name}.svg`;
  const imageAlt = `${type.name} logo`;

  return (
    <article className="type-icon">
      <img
        src={logoSource}
        alt={imageAlt}
        className="type-small_image"
        slot=""
      />
    </article>
  );
}
