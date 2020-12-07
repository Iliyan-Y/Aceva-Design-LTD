import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import bg09 from '../assets/background/bg09.jpg';

const About = () => {
  return (
    <Jumbotron
      id="about"
      fluid
      className="m-0"
      style={{ backgroundImage: `url(${bg09})` }}
    >
      <Container id="aboutContainer" className="mx-auto w-50">
        <h1> Aceva Design LTD</h1>
        <p>
          Aceva Design was created in XXXX, through a working partnership
          between XXX and XXXX, both of whom have worked in the building and
          construction industry since the 1990s. Based in XXXX we work across
          the surrounding areas of London and XXXX.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default About;
