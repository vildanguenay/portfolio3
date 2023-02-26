import React from 'react';
import { useState } from 'react';
import { NavBar } from './NavBar';
import { FiMenu } from 'react-icons/fi';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <p className="logo">Logo</p>
      <FiMenu
        size={30}
        className="menu-btn"
        onClick={() => setIsNavOpen(true)}
      />
      <NavBar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
    </header>
  );
};
