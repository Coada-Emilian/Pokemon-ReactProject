export default function HeaderNavBarSearchForm() {
    return(

        <form action="#" className="search-pokemon_form search-form" slot="search-form" id="search-form">

            <div className="control">
                <input className="input" name="term" type="text" placeholder="Find a pokemon" slot="search-input"/>
            </div>

            <div className="control">
                <button className="button is-info">
                    Find Pokemon
                </button>
            </div>

        </form>

    )
}

