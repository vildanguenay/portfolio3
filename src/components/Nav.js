import React from 'react';
import { useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc';

export const Nav = ({ setIsNavOpen, isNavOpen }) => {
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
          <a
            href="#home"
            className={isActive === 'home' && 'active'}
            onClick={() => handleClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={isActive === 'projects' && 'active'}
            onClick={() => handleClick('projects')}
          >
            Live Projects
          </a>
        </li>
        <li>
          <a
            href="#designs"
            className={isActive === 'designs' && 'active'}
            onClick={() => handleClick('designs')}
          >
            Web Designs
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={isActive === 'about' && 'active'}
            onClick={() => handleClick('about')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className={isActive === 'technologies' && 'active'}
            onClick={() => handleClick('technologies')}
          >
            Technologies
          </a>
        </li>
      </ul>
    </nav>
  );
};
