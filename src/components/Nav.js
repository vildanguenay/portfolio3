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
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">MyStats</a>
        </li>
        <li>
          <a href="#">Members</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </nav>
  );
};
