import React from 'react';

import HeaderNavBarMenuEndItem1 from './HeaderNavBarMenuEndItem1';

interface HeaderNavBarMenuEndProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
}

export default function HeaderNavBarMenuEnd({
  isCreateButtonShown,
  setIsCreateButtonShown,
}: HeaderNavBarMenuEndProps) {
  return (
    <div className="navbar-end">
      <HeaderNavBarMenuEndItem1
        isCreateButtonShown={isCreateButtonShown}
        setIsCreateButtonShown={setIsCreateButtonShown}
      />
    </div>
  );
}
