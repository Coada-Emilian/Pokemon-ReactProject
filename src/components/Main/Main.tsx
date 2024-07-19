import { IPokemon, IType } from "../../@types/types"
import PokemonArticle from "./Templates/PokemonArticle"
import TypeArticle from "./Templates/TypeArticle";

import "./Main.scss"

interface MainProps {
    pokemons: IPokemon[];
    types: IType[];
}

export default function Main({pokemons, types}:MainProps) {
    return(

        <main className="container">
            <div className="types-container" id="types-container">
                {types.map((type) => {
                    return(
                        <TypeArticle type={type} key={type.id}/>
                    )
                })}
            </div>
            
            <div className="pokemon-container">
                {pokemons.map((pokemon) => {
                    return(
                        <PokemonArticle pokemon={pokemon} key={pokemon.id}/>
                    ) 
                })}
            </div>
            
        </main>

    )
}