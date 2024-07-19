export default function PokemonStat() {
    return(
        <>
            <p className="pokemonModal-stats-paragraph">HP</p>
            <div className="pokemonModal-progressBar">
                <progress className="progress is-small is-primary" value="45" max="100" slot="modal-hp"></progress>
                <span className="stats_paragraph" slot="hp_value">45%</span>
            </div>
        </>
    )
}