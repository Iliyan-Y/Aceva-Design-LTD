import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

//images
import bg01 from '../../assets/background/bg01.jpg';
import bg08 from '../../assets/background/bg08.jpg';
import Caption from './caption';

const Home = () => {
  return (
    <Carousel
      id="home"
      className="h-100 align-items-center justify-content-center text-center"
      controls={false}
      indicators={false}
      fade={true}
    >
      <Carousel.Item interval={2500}>
        <Image fluid className="w-100" src={bg01} alt="First slide" />
        <Carousel.Caption className="row h-100 align-items-center justify-content-center text-center">
          <Caption />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <Image fluid className="w-100" src={bg08} alt="Second slide" />
        <Carousel.Caption className="row h-100 align-items-center justify-content-center text-center">
          <Caption textStyle="text-dark" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
