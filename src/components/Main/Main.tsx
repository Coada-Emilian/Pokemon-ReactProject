import CreateTeamModal from "./Modals/CreateTeamModal";
import EditTeamNameModal from "./Modals/EditTeamNameModal";
import HamburgerModal from "./Modals/HamburgerModal";
import PokemonModal from "./Modals/PokemonModal/PokemonModal";
import TeamModal from "./Modals/TeamModal/TeamModal";
import PokemonArticle from "./Templates/PokemonArticle";
import TypeArticle from "./Templates/TypeArticle";

export default function Main() {
    return(

        <main className="pokemon_container">

            <HamburgerModal />
            <CreateTeamModal />
            <EditTeamNameModal />
            <PokemonModal />
            <TeamModal />
            <PokemonArticle />
            <TypeArticle />
            
        </main>

    )
}