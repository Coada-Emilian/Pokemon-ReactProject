import { IPokemon, IType } from "../../@types/types"
import PokemonArticle from "./Templates/PokemonArticle"
import TypeArticle from "./Templates/TypeArticle";

interface MainProps {
    pokemons: IPokemon[];
    types: IType[];
}

export default function Main({pokemons, types}:MainProps) {
    return(

        <main className="pokemon-container">
            {types.map((type) => {
                return(
                    <TypeArticle type={type} key={type.id}/>
                )
            })}
            {pokemons.map((pokemon) => {
                return(
                    <PokemonArticle pokemon={pokemon} key={pokemon.id}/>
                ) 
            })}
        </main>

    )
}