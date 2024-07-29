/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <>
      <Link
        to="#"
        role="button"
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
      </Link>
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
