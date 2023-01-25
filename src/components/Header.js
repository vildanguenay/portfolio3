import React from 'react';
import { useState } from 'react';
import { Nav } from './Nav';
import { FiMenu } from 'react-icons/fi';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <p className="logo">Logo</p>
      <FiMenu className="menu-btn" onClick={() => setIsNavOpen(true)} />
      {isNavOpen && <Nav setIsNavOpen={setIsNavOpen} />}
    </header>
  );
};
