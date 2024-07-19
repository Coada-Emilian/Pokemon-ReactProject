import HeaderNavBarBrand from "./HeaderNavBarBrand/HeaderNavBarBrand";
import HeaderNavSearchBar from "./HeaderNavSearchBar/HeaderNavSearchBar";


export default function HeaderNavBar() {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">

                <HeaderNavBarBrand />
                <HeaderNavSearchBar />

                <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                    
                    <div className="buttons">

                        <a className="button is-primary" slot="teams-button">
                        <strong>Équipes</strong>
                        </a>

                        <a className="button is-primary hidden" slot="create_team-button">
                        <strong>Créer une équipe</strong>
                        </a>

                        <a className="button is-dark" slot="register-button">
                        <strong>Enregistrement</strong>
                        </a>

                        <a className="button is-light" slot="login-button">
                        Se connecter
                        </a>

                    </div>
                    </div>
                </div>
                
                </div>

            </nav>
    )
}