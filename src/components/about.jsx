import React from 'react';
import { Jumbotron, Image, Row, Col } from 'react-bootstrap';
import bg09 from '../assets/background/bg09.jpg';

const About = () => {
  return (
    <Jumbotron id="about" fluid className="m-0">
      <Row className="align-items-center justify-content-center text-center">
        <Col>
          <h1> Aceva Design LTD</h1>
          <p>
            Aceva Design was created in XXXX, through a working partnership
            between XXX and XXXX, both of whom have worked in the building and
            construction industry since the 1990s. Based in XXXX we work across
            the surrounding areas of London and XXXX.
          </p>
        </Col>
        <Col>
          <Image src={bg09} fluid />
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default About;
