import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Figma from '.././img/figma.svg';
import SASS from '.././img/sass.svg';
import Bootstrap from '.././img/reactB.svg';
import CSS from '.././img/css.svg';
import HTML from '.././img/html.svg';
import Reeact from '.././img/react.svg';
import Slack from '.././img/slack.svg';
import MaterialUI from '.././img/materialUI.svg';
import JS from '.././img/js.svg';
import CY from '.././img/cypress.svg';

export const Technologies = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const itemData = [
    {
      img: Figma,
      title: 'Figma',
    },
    {
      img: SASS,
      title: 'SASS',
    },
    {
      img: CSS,
      title: 'CSS',
    },
    {
      img: CY,
      title: 'Cypress',
    },
    {
      img: HTML,
      title: 'HTML',
    },
    {
      img: Reeact,
      title: 'React',
    },
    {
      img: JS,
      title: 'JavaScript',
    },
    {
      img: MaterialUI,
      title: 'Material UI',
    },
    {
      img: Slack,
      title: 'Slack',
    },
    {
      img: Bootstrap,
      title: 'Bootstrap',
    },
  ];
  return (
    <Carousel
      responsive={responsive}
      interval={null}
      infinite={true}
      variant="dark"
    >
      {itemData.map((item) => (
        <div>
          <img
            className="d-block w-100 technImg"
            src={item.img}
            alt="First slide"
          />
          <div className="technCaption">
            <h5>{item.title}</h5>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
