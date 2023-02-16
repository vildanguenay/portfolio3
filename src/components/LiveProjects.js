import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Netflix from '.././img/netflix.png';
import Webshop from '.././img/webshop.png';
import Website from '.././img/website.png';

export const LiveProjects = () => {
  const itemData = [
    {
      img: Netflix,
      title: 'Netflix',
    },
    {
      img: Webshop,
      title: 'Webshop',
    },
    {
      img: Website,
      title: 'First Personal Website',
    },
  ];
  return (
    <Carousel interval={null}>
      {itemData.map((item) => (
        <Carousel.Item className="carouselItem">
          <img
            className="d-block w-100 carouselImg"
            src={item.img}
            alt="First slide"
          />
          <Carousel.Caption className="carouselCaption">
            <button>{item.title}</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
