import { IPokemon } from "../../@types/types"
import PokemonArticle from "./Templates/PokemonArticle"

interface MainProps {
    pokemons: IPokemon[]
}

export default function Main({pokemons}:MainProps) {
    const pokemonsJSX = pokemons.map((pokemon) => {
        return(
            <PokemonArticle pokemon={pokemon} key={pokemon.id}/>
        ) 
    })
    return(

        <main className="pokemon-container">
            {pokemonsJSX}
        </main>

    )
}