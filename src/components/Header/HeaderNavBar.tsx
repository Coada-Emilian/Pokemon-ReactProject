import React from 'react';

import HeaderNavBarBrand from './HeaderNavBarBrand/HeaderNavBarBrand';
import HeaderNavBarMenu from './HeaderNavBarMenu/HeaderNavBarMenu';
import HeaderNavSearchBar from './HeaderNavSearchBar/HeaderNavSearchBar';

export default function HeaderNavBar() {
  return (
    <nav
      className="navbar"
      id="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderNavBarBrand />
      <HeaderNavSearchBar />
      <HeaderNavBarMenu />
    </nav>
  );
}
