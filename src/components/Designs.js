import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Coast from '.././img/coast.png';
import Tea from '.././img/Tea.png';
import WSIMG from '.././img/White Space & Image.png';
import Scale from '.././img/White Space & Scale.png';
import WSColor from '.././img/White Space & Color.png';

export const Designs = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      // partialVisibilityGutter: 30,
    },
  };

  const itemData = [
    {
      img: Coast,
      title: 'Activities',
    },
    {
      img: Tea,
      title: 'Tea Shop',
    },
    {
      img: WSIMG,
      title: 'The Power of White Space & Image',
    },
    {
      img: Scale,
      title: 'The Power of White Space & Scale',
    },
    {
      img: WSColor,
      title: 'The Power of White Space & Color',
    },
  ];

  return (
    <section id="designs">
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={['tablet', 'desktop']}
        renderDotsOutside
        partialVisible
        containerClass
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {itemData.map((item) => (
          <div>
            <div className="designsCaption">
              <h5>{item.title}</h5>
            </div>
            <div className="designsImg">
              <img className="d-block w-100" src={item.img} alt="First slide" />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
