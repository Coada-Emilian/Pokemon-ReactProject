export default function HeaderNavBarSearchForm() {
  return (
    <form action="#" className="search-form" slot="search-form">
      <div className="control">
        <input
          className="input search-input"
          name="term"
          type="text"
          placeholder="Find a pokemon"
          slot="search-input"
        />
      </div>

      <div className="control">
        <button className="button is-info find-button">Find Pokemon</button>
      </div>
    </form>
  );
}
