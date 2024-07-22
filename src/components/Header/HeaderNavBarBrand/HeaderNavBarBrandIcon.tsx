import icon from "../../../assets/icons/pokedex.png";

export default function HeaderNavBarBrandIcon() {
  return (
    <a
      className="navbar-item"
      href="#"
      slot="navBar_pokedex_anchor"
      id="navbar-pokedex"
    >
      <img src={icon} alt="pokedex icon" className="pokedex-icon" />

      <h1 className="title icon-title">O'Pokedex</h1>
    </a>
  );
}
