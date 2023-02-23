import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Netflix from '.././img/netflix.png';
import Webshop from '.././img/webshop.png';
import Website from '.././img/website.png';

export const LiveProjects = () => {
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
    <Carousel interval={null} responsive={responsive} infinite={true}>
      {itemData.map((item) => (
        <div className="carouselItem">
          <img
            className="d-block w-100 carouselImg"
            src={item.img}
            alt="First slide"
          />
          <div className="carouselCaption">
            <button>{item.title}</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
