import React from 'react';
import { VscArrowRight } from 'react-icons/vsc';

export const Nav = ({ setIsNavOpen }) => {
  return (
    <nav>
      <VscArrowRight className="back-btn" onClick={() => setIsNavOpen(false)} />
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">My Stats</a>
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
