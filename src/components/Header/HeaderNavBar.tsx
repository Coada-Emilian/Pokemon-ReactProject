import HeaderNavBarBrand from "./HeaderNavBarBrand/HeaderNavBarBrand";


export default function HeaderNavBar() {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">

                <HeaderNavBarBrand />

                <div className="field has-addons search-bar">
                <form action="#" className="search-pokemon_form search-form" slot="search-form">
                    <div className="control">
                    <input className="input" name="term" type="text" placeholder="Find a pokemon" slot="search-input" />
                    </div>
                    <div className="control">
                    <button className="button is-success">
                        Search
                    </button>
                    </div>
                </form>
                </div>

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