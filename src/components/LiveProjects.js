import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Netflix from '.././img/netflix.png';
import Webshop from '.././img/webshop.png';
import Website from '.././img/website.png';
import Website2 from '.././img/portfolio2.png';

export const LiveProjects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  const itemData = [
    {
      img: Netflix,
      title: 'Netflix Clone',
      link: 'https://vildanguenay.github.io/netflix-clone/#/browse',
    },
    {
      img: Webshop,
      title: 'Webshop',
      link: 'https://vildanguenay.github.io/webshop/',
    },
    {
      img: Website2,
      title: '2nd Personal Website (idle)',
      link: 'https://vildanguenay.github.io/portfolio2/',
    },
    {
      img: Website,
      title: '1st Personal Website (idle)',
      link: 'https://vildanguenay.github.io/',
    },
  ];
  return (
    <section id="projects">
      <div className="projectsCon">
        <h1>LIVE PROJECTS</h1>
        <Carousel
          interval={null}
          responsive={responsive}
          partialVisible={true}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          infinite={true}
        >
          {itemData.map((item) => (
            <a href={item.link}>
              <div className="carouselItem">
                <img
                  className="d-block w-100 carouselImg"
                  src={item.img}
                  alt="First slide"
                />
                <div className="carouselCaption">
                  <h1>{item.title}</h1>
                </div>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
