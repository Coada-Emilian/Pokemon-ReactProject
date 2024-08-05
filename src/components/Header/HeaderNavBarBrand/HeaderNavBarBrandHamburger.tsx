import React, { useState } from 'react';
import HamburgerModal from '../../Main/Modals/HamburgerModal';

interface HeaderNavBarBrandHamburgerProps {
  setIsCreateButtonShown: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateButtonShown: boolean;
}

export default function HeaderNavBarBrandHamburger({
  isCreateButtonShown,
  setIsCreateButtonShown,
}: HeaderNavBarBrandHamburgerProps) {
  const [isHamburgerModalShown, setIsHamburgerModalShown] = useState(false);
  return (
    <>
      <button
        type="button"
        className="navbar-burger hamburger-element"
        aria-label="menu"
        aria-expanded="false"
        onClick={() => {
          setIsHamburgerModalShown(true);
        }}
      >
        <span aria-hidden="true" className="hamburger-span" />
        <span aria-hidden="true" className="hamburger-span" />
        <span aria-hidden="true" className="hamburger-span" />
      </button>
      {isHamburgerModalShown && (
        <HamburgerModal
          setIsHamburgerModalShown={setIsHamburgerModalShown}
          isCreateButtonShown={isCreateButtonShown}
          setIsCreateButtonShown={setIsCreateButtonShown}
        />
      )}
    </>
  );
}
