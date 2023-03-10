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
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      // partialVisibilityGutter: -0.2,
    },
  };

  const itemData = [
    {
      img: Coast,
      title: 'Outdoor Activities',
    },
    {
      img: Tea,
      title: 'Tea Shop Landing Page',
    },
    {
      img: WSIMG,
      title: 'Fundamentals: The Power of White Space & Image',
    },
    {
      img: Scale,
      title: 'Fundamentals: The Power of White Space & Scale',
    },
    {
      img: WSColor,
      title: 'Fundamentals: The Power of White Space & Color',
    },
  ];

  return (
    <section id="designs">
      <h1 className="designsHeader">Web Designs</h1>
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
          <div className="designsCon">
            <div className="designsCaption">
              <h1>{item.title}</h1>
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
