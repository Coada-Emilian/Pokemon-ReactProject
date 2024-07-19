import CreateTeamModal from "../Modals/CreateTeamModal";
import EditTeamNameModal from "../Modals/EditTeamNameModal";
import HamburgerModal from "../Modals/HamburgerModal";

export default function Main() {
    return(

        <main className="pokemon_container">

            <HamburgerModal />
            <CreateTeamModal />
            <EditTeamNameModal />
            
        </main>

    )
}