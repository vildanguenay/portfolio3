import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Webshop from '.././img/webshop.png';

export const Designs = () => {
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
      img: Webshop,
      title: 'Figma',
    },
    {
      img: Webshop,
      title: 'SASS',
    },
    {
      img: Webshop,
      title: 'CSS',
    },
  ];

  return (
    <Carousel responsive={responsive} infinite={true} showDots={true}>
      {itemData.map((item) => (
        <div>
          <div className="technCaption">
            <h5>{item.title}</h5>
          </div>

          <img
            className="d-block w-100 technImg"
            src={item.img}
            alt="First slide"
          />
        </div>
      ))}
    </Carousel>
  );
};
