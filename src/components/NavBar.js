import React from 'react';
import { useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
export const NavBar = ({ setIsNavOpen, isNavOpen }) => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
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
            className={activeLink === 'home' ? 'active initial' : 'initial'}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active initial' : 'initial'}
            onClick={() => onUpdateActiveLink('projects')}
          >
            Live Projects
          </a>
        </li>
        <li>
          <a
            href="#designs"
            className={activeLink === 'designs' ? 'active initial' : 'initial'}
            onClick={() => onUpdateActiveLink('designs')}
          >
            Web Designs
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active initial' : 'initial'}
            onClick={() => onUpdateActiveLink('about')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className={
              activeLink === 'technologies' ? 'active initial' : 'initial'
            }
            onClick={() => onUpdateActiveLink('technologies')}
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={activeLink === 'blog' ? 'active initial' : 'initial'}
            onClick={() => onUpdateActiveLink('blog')}
          >
            Blog
          </a>
        </li>
        <div className="socialsNav">
          <a href="https://www.instagram.com/vildanguenay/" alt="">
            <i>
              <BsInstagram />
            </i>
          </a>
          <a href="https://www.linkedin.com/in/vildan-guenay" alt="">
            <i>
              <BsLinkedin />
            </i>
          </a>
          <a href="https://github.com/vildanguenay" alt="">
            <i>
              <BsGithub />
            </i>
          </a>
        </div>
      </ul>
    </nav>
  );
};
