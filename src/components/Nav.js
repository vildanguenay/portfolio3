import React from 'react';
import { VscArrowRight } from 'react-icons/vsc';

export const Nav = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <nav className={isNavOpen ? 'openNav' : null}>
      <VscArrowRight
        size={30}
        className="back-btn"
        onClick={() => setIsNavOpen(false)}
      />
      <ul>
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#projects">Live Projects</a>
        </li>
        <li>
          <a href="#designs">Web Designs</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
      </ul>
    </nav>
  );
};
