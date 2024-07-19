export default function HeaderNavBarSearchForm() {
    return(

        <form action="#" className="search-pokemon_form search-form" slot="search-form" >

            <div className="control">
                <input className="input" name="term" type="text" placeholder="Find a pokemon" slot="search-input"/>
            </div>

            <div className="control">
                <button className="button is-success">
                    Find Pokemon
                </button>
            </div>

        </form>

    )
}

