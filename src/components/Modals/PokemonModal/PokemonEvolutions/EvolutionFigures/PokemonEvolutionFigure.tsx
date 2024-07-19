export default function PokemonEvolutionFigure() {
    return(

        <div className="pokemonModal-evolutions-figure">
            <div className="figure_image-title">
                <figure className="image is-96x96">
                    <img className="is-rounded figure_image" src="./assets/img/1.webp" slot="pokemonModal_evolutions_pokemon_image"/>
                    <p className="figure_title" slot="pokemonModal_evolutions_pokemon_title">Title</p>
                </figure>
            </div>
        </div>

    )
}