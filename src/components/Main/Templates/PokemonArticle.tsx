export default function PokemonArticle() {
    return(

        <article className="pokemon-article">

            <div className="card selectable" slot="pokemonArticle_id">

                <div className="pokemon-card" slot="pokemonArticle_card">

                    <div className="card-image">
                        <figure className="image is-128x128 pokemonArticle-figure">
                            <img
                                src=""
                                alt="" 
                                slot="pokemon_image"
                                className="pokemon-image"
                            />
                        </figure>
                    </div>

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="subtitle is-6 card_title" slot="pokemonArticle_name">Pokemon Name</p>
                            </div>
                        </div>
                    </div>

                    <footer className="card-footer">
                        <button className="add_button button is-light " slot="pokemonArticle_addButton">Ajouter à l'équipe</button>
                        <button className="remove_button button is-dark" slot="pokemonArticle_removeButton">Retirer de l'équipe</button>
                    </footer>

                </div>

            </div>

        </article>

    )
}