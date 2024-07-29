import React from 'react';

import HeaderNavBarBrandHamburger from './HeaderNavBarBrandHamburger';
import HeaderNavBarBrandIcon from './HeaderNavBarBrandIcon';

interface HeaderNavBarProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
}
export default function HeaderNavBar({
  isCreateButtonShown,
  setIsCreateButtonShown,
}: HeaderNavBarProps) {
  return (
    <div className="navbar-brand" id="navbar-brand">
      <HeaderNavBarBrandIcon setIsCreateButtonShown={setIsCreateButtonShown} />
      <HeaderNavBarBrandHamburger
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
      />
    </div>
  );
}
