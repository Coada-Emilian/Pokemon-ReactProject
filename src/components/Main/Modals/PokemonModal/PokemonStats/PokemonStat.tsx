import React from 'react';

interface StatProps {
  stat: number;
  title: string;
}

export default function PokemonStat({ stat, title }: StatProps) {
  return (
    <div className="pokemon-stat">
      <p className="pokemonModal-stats-paragraph"> {title}</p>
      <div className="pokemonModal-progressBar progressBar-container">
        <progress
          className="progress is-small is-info stat-progress"
          value={stat}
          max="100"
          slot="modal-stat"
        />
        <span className="stats_paragraph" slot="hp_value">
          {stat}%
        </span>
      </div>
    </div>
  );
}
