import CreateTeamModal from "../Modals/CreateTeamModal";
import EditTeamNameModal from "../Modals/EditTeamNameModal";
import HamburgerModal from "../Modals/HamburgerModal";
import PokemonModal from "../Modals/PokemonModal/PokemonModal";
import TeamModal from "../Modals/TeamModal/TeamModal";

export default function Main() {
    return(

        <main className="pokemon_container">

            <HamburgerModal />
            <CreateTeamModal />
            <EditTeamNameModal />
            <PokemonModal />
            <TeamModal />
            
        </main>

    )
}