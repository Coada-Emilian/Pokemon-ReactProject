import CreateTeamButton from "../../Buttons/CreateTeamButton";
import SignInButton from "../../Buttons/SignInButton";
import SignUpButton from "../../Buttons/SignUpButton";
import TeamButton from "../../Buttons/TeamButton";

export default function HamburgerModal() {
    return(

        <div className="modal" id="hamburger-modal">

            <div className="modal-background"></div>

            <div className="modal-content" id="hamburger_modal_content">
                <div className="buttons">

                    <CreateTeamButton />
                    <TeamButton />
                    <SignUpButton />
                    <SignInButton />

                </div>
            </div>
            <button className="modal-close is-large" slot="modal_close_button" aria-label="close"></button>
        </div>

    )
}