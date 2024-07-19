import CreateTeamModal from "../Modals/CreateTeamModal";
import EditTeamNameModal from "../Modals/EditTeamNameModal";
import HamburgerModal from "../Modals/HamburgerModal";
import PokemonModal from "../Modals/PokemonModal/PokemonModal";

export default function Main() {
    return(

        <main className="pokemon_container">

            <HamburgerModal />
            <CreateTeamModal />
            <EditTeamNameModal />
            <PokemonModal />
            
        </main>

    )
}