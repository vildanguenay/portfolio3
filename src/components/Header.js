import React from 'react';
import { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { FiMenu } from 'react-icons/fi';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      {/* <p className="logo">Logo</p> */}
      <FiMenu
        size={30}
        className="menu-btn"
        onClick={() => setIsNavOpen(true)}
      />
      <NavBar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
    </header>
  );
};
