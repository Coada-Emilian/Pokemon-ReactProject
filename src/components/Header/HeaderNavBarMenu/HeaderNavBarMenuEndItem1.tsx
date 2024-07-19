export default function HeaderNavBarMenuEndItem1() {
    return(

        <div className="navbar-item">

                <div className="buttons">

                    <a className="button is-primary" slot="teams-button">
                        <strong>
                            Équipes
                        </strong>
                    </a>

                    <a className="button is-primary hidden" slot="create_team-button">
                        <strong>
                            Créer une équipe
                        </strong>
                    </a>

                    <a className="button is-dark" slot="register-button">
                        <strong>
                            Enregistrement
                        </strong>
                    </a>

                    <a className="button is-light" slot="login-button">
                        Se connecter
                    </a>

                </div>

            </div>

    )
}

