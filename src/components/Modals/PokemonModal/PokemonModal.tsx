import PokemonEvolutions from "./PokemonEvolutions/PokemonEvolutions";
import PokemonStats from "./PokemonStats/PokemonStats";
import PokemonTypes from "./PokemonTypes/PokemonTypes";


export default function PokemonModal() {
    return(

        <div className="modal" id="pokemon-modal">
            <div className="modal-background close" slot="pokemonModal_background"></div>
            <div className="modal-card">
                <div className="modal-background has-background-dark"></div>
                <div className="modal-content">

                    <div className="modal-title">
                        <p className="title modal_title" slot="modal_title">Title</p>
                        <button className="delete close" type="button" slot="editTeamName_modal_button"></button>
                    </div>

                    <div className="pokemonModal-description">

                        <div className="image">
                            <p className="image is-128x128">
                                <img src="" alt="" slot="pokemonModal_image"/>
                            </p>
                        </div>

                        <div className="description">
                            <p className="modal_description" slot="pokemonModal_description">
                                Description
                            </p>
                        </div>

                    </div>

                    <div className="pokemonModal-stats-types">
                        <PokemonStats />
                        <PokemonTypes />
                    </div>

                    <PokemonEvolutions />

                    <footer className="card-footer">
                        <button className="button is-light" slot="pokemonModal_compare_button">Comparer</button>
                    </footer>
                </div>
            </div>
        </div>

    )
}