export default function CreateTeamModal() {
    return(

        <div className="modal" id="create-team-modal">
            <div className="modal-background" slot="createTeam_background"></div>
            <div className="modal-content" id="createTeam-modal-content">
                <div className="modal-card ">

                    <form slot="modal-create_form">

                        <div className="modal-card-head ">
                            <p className="modal-card-title">Créer une équipe</p>
                            <button className="delete close" type="button" slot="createTeam-modal-button"></button>
                        </div>
                
                        <div className="modal-card-body">
                    
                            <label htmlFor="create-team-title" className="label">Nom</label>
                            <input id="create-team-title" className="input" type="text" name="name" placeholder="Nom d’équipe" required />
                    

                            <label htmlFor="add-team-description" className="label">Description</label>
                            <input id="add-team-description" className="input" type="text" name="description" placeholder="Description" required />
                        </div>
                
                        <div className="modal-card-foot">
                            <button className="button is-success" slot="modal-create_button">Créer</button>
                            <button className="button close" aria-label="close" type="button" slot="createTeam-cancelBtn">Annuler</button>
                        </div>

                    </form>
                
                </div>
            </div>
        </div>
    )
}