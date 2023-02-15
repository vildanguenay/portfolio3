import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Netflix from '.././img/netflix.png';
import Webshop from '.././img/webshop.png';
import Website from '.././img/website.png';

export const LiveProjects = () => {
  return (
    <Carousel interval={null}>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100 carouselImg"
          src={Netflix}
          alt="First slide"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100 carouselImg"
          src={Webshop}
          alt="Second slide"
        />

        <Carousel.Caption className="carouselCaption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100 carouselImg"
          src={Website}
          alt="Third slide"
        />

        <Carousel.Caption className="carouselCaption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
