import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Figma from '.././img/figma.svg';
import SASS from '.././img/sass.svg';

export const Technologies = () => {
  const itemData = [
    {
      img: Figma,
      title: 'Figma',
    },
    {
      img: SASS,
      title: 'SASS',
    },
  ];
  return (
    <Carousel interval={null} variant="dark">
      {itemData.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item.img} alt="First slide" />
          <Carousel.Caption>
            <h5>{item.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
