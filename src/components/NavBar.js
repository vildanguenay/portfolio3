import React from 'react';
import { useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc';

export const NavBar = ({ setIsNavOpen, isNavOpen }) => {
  const [isActive, setIsActive] = useState('');

  const handleClick = (value) => {
    setIsActive(value);
    console.log(value);
  };

  return (
    <nav className={isNavOpen ? 'openNav' : null}>
      <VscArrowRight
        size={30}
        className="back-btn"
        onClick={() => setIsNavOpen(false)}
      />
      <ul>
        <li>
          <a href="#home" onClick={() => handleClick('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => handleClick('projects')}>
            Live Projects
          </a>
        </li>
        <li>
          <a href="#designs" onClick={() => handleClick('designs')}>
            Web Designs
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleClick('about')}>
            About Me
          </a>
        </li>
        <li>
          <a href="#technologies" onClick={() => handleClick('technologies')}>
            Technologies
          </a>
        </li>
      </ul>
    </nav>
  );
};
