import React from 'react';
import { VscArrowLeft } from 'react-icons/vsc';

export const Nav = () => {
  return (
    <nav>
      <VscArrowLeft className="arrow" />
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
