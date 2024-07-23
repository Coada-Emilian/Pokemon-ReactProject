import { IPokemon, IType, Result } from "../../@types/types";
import PokemonArticle from "./Templates/PokemonArticle";
import TypeArticle from "./Templates/TypeArticle";

import "./Main.scss";

interface MainProps {
  pokemons: IPokemon[];
  types: IType[];
  pokemonsInApi: Result[];
}

export default function Main({ pokemons, types, pokemonsInApi }: MainProps) {
  console.log(pokemonsInApi);
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
          return <h1 key={pokemon.name}>{pokemon.name}</h1>;
        })}
      </div> */}
    </main>
  );
}
