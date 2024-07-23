import { Link } from "react-router-dom";
import icon from "../../../assets/icons/pokedex.png";

export default function HeaderNavBarBrandIcon() {
  return (
    <Link
      className="navbar-item"
      to="/"
      slot="navBar_pokedex_anchor"
      id="navbar-pokedex"
    >
      <img src={icon} alt="pokedex icon" className="pokedex-icon" />

      <h1 className="title icon-title">O'Pokedex</h1>
    </Link>
  );
}
