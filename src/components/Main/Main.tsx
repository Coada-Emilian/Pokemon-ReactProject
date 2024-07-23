import { IPokemon, IType } from "../../@types/types";
import PokemonArticle from "./Templates/PokemonArticle";
import TypeArticle from "./Templates/TypeArticle";

import "./Main.scss";
import { Result } from "../../@types/pokemonApi";

interface MainProps {
  pokemons: IPokemon[];
  types: IType[];
  // pokemonsInApi: Result[];
}

export default function Main({ pokemons, types }: MainProps) {
  return (
    <main className="container">
      <div className="types-container" id="types-container">
        {types.map((type) => {
          return <TypeArticle type={type} key={type.id} />;
        })}
      </div>

      <div className="pokemon-container">
        {pokemons.map((pokemon) => {
          return <PokemonArticle pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
      {/* <div className="pokemonApi-container">
        {pokemonsInApi.map((pokemon) => {
          return (
            <div className="pokemon-card">
              <h1 key={pokemon.name}>{pokemon.name}</h1>
              <img
                src={pokemon.sprites.other.showdown.front_default}
                alt=""
                key={pokemon.id}
              />
            </div>
          );
        })}
      </div> */}
    </main>
  );
}
