import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Header } from './Header';

import Gym from '.././img/gymblackwhite.jpg';

export const Home = () => {
  return (
    <section id="home">
      <Header />
      <img alt="" src={Gym} className="gymImg" />
      <div className="homeTxt">
        <ul>
          <li className="text1">Web Design</li>
          <li className="text2">Storytelling</li>
          <li className="text3">Communication</li>
          <li className="text4">Mediation</li>
        </ul>
      </div>
      <div className="btnContainer">
        <a href="#projects" className="homeBtn">
          <ArrowForwardIcon size={25} mr={1} />
          Go to Live Projects
        </a>
      </div>
    </section>
  );
};
