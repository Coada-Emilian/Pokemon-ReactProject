import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNavBarBrandHamburger() {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      to="#"
      role="button"
      className="navbar-burger hamburger-element"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      slot="navBar_hamburger_element"
    >
      <span aria-hidden="true" className="hamburger-span" />
      <span aria-hidden="true" className="hamburger-span" />
      <span aria-hidden="true" className="hamburger-span" />
    </Link>
  );
}
