import React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';

//images
import bg01 from '../../assets/background/bg01.jpg';
import bg08 from '../../assets/background/bg08.jpg';

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
          <Container className="h4">
            Carpenter & builder services based in London, Kent and Essex adding
            to the quality value of your home !
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <Image fluid className="w-100" src={bg08} alt="Second slide" />
        <Carousel.Caption className="row h-100 align-items-center justify-content-center text-center">
          <Container className="h4 text-dark">
            Carpenter & builder services based in London, Kent and Essex adding
            to the quality value of your home !
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
