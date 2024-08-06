import React from 'react';
import { ITeam } from '../../../@types/types';
import trainerImage from '../../../assets/img/trainer-1.jpg';
import TeamPokemonArticle from '../Templates/TeamPokemonArticle';
// import trainerAvatarSource from '../../../assets/img/trainers/trainer(1).jpg';

interface TeamArticleProps {
  team: ITeam;
  createdTeamAvatarSourceArray: string[];
}

export default function TeamArticle({
  team,
  createdTeamAvatarSourceArray,
}: TeamArticleProps) {
  const imageSource = `${trainerImage.slice(0, 24)}${team.id}.jpg`;
  return (
    <article className="team-article" slot="team_article">
      <div className="article-title-container">
        <p className="article-title" slot="team_title">
          {team.name}
        </p>
      </div>

      <div id="article-content-container">
        <div className="team-trainer-container">
          <div className="card-image">
            <figure className="article-image">
              <img src={imageSource} alt="trainer" className="trainer-image" />
            </figure>
          </div>
        </div>
        <div className="pokemon-paragraph-container">
          <p className="pokemon-paragraph">Pokemon</p>
        </div>
        <div
          id="team-pokemon"
          slot="team_pokemon"
          className="teamPokemon-container"
        >
          {team.pokemon &&
            team.pokemon.map((pokemon) => {
              return (
                <div className="team-pokemon-article" key={pokemon.id}>
                  <TeamPokemonArticle pokemon={pokemon} />
                </div>
              );
            })}
        </div>
      </div>
    </article>
  );
}
