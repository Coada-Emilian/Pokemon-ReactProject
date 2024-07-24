import { SetStateAction, useEffect, useState } from "react";
import { IPokemon, IType } from "../../../@types/types";
import PokemonArticle from "../Templates/PokemonArticle";
import TypeArticle from "../Templates/TypeArticle";
import "../Main.scss";

// import { Result } from "../../@types/pokemonApi";
import { useParams } from "react-router-dom";

interface MainTypePokemonProps {
  pokemons: IPokemon[];
  types: IType[];
  // pokemonsInApi: Result[];
}

export default function MainTypePokemon({
  pokemons,
  types,
}: MainTypePokemonProps) {
  const [foundPokemon, setFoundPokemon] = useState<IPokemon[]>([]);

  const params = useParams();
  const typeName = params.typeName;
  useEffect(() => {
    // if (foundPokemon.length > 0) {
    //   console.log(foundPokemon);
    // }
    const findPokemonByType = (typeName: string | undefined) => {
      const foundPokemons = pokemons.filter((pokemon) =>
        pokemon.types.some((type) => type.name === typeName)
      );
      setFoundPokemon(foundPokemons);
    };
    findPokemonByType(typeName);
  }, []);
  return (
    <main className="container">
      <div className="types-container" id="types-container">
        {types.map((type) => {
          return <TypeArticle type={type} key={type.id} />;
        })}
      </div>

      <div className="pokemon-container">
        {foundPokemon.map((pokemon) => {
          return <PokemonArticle pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </main>
  );
}
