import React from 'react';

import HeaderNavBarMenuEnd from './HeaderNavBarMenuEnd';

interface HeaderNavBarMenuProps {
  isCreateButtonShown: boolean;
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderNavBarMenu({
  setIsCreateButtonShown,
  isCreateButtonShown,
}: HeaderNavBarMenuProps) {
  return (
    <div className="navbar-menu">
      <HeaderNavBarMenuEnd
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
      />
    </div>
  );
}
