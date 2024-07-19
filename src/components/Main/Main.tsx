import { IPokemon } from "../../@types/types"

interface MainProps {
    pokemons: IPokemon[]
}

export default function Main({pokemons}:MainProps) {
    const pokemonsJSX = pokemons.map((pokemon) => {
        return(
            <h2 key={pokemon.id}>{pokemon.name}</h2>
        ) 
    })
    return(

        <main className="pokemon-container">
            <h1>Pokemon</h1>
            {pokemonsJSX}
        </main>

    )
}