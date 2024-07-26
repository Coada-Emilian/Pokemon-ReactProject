import React, { useState } from 'react';

import HeaderNavBarBrand from './HeaderNavBarBrand/HeaderNavBarBrand';
import HeaderNavBarMenu from './HeaderNavBarMenu/HeaderNavBarMenu';
import HeaderNavSearchBar from './HeaderNavSearchBar/HeaderNavSearchBar';

export default function HeaderNavBar() {
  const [isCreateButtonShown, setIsCreateButtonShown] = useState(false);
  return (
    <nav
      className="navbar"
      id="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderNavBarBrand setIsCreateButtonShown={setIsCreateButtonShown} />
      <HeaderNavSearchBar />
      <HeaderNavBarMenu
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
      />
    </nav>
  );
}
