import React from 'react';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

import p2 from '../assets/background/p2.jpg';

const Services = () => {
  return (
    <Jumbotron
      id="services"
      fluid
      className="m-0"
      style={{
        background: `url(${p2}) left  bottom`,
      }}
    >
      <Row>
        <Col>
          <ul className="h4  m-4 text-white">
            <h2 style={{ fontFamily: ' Courier, monospace' }}>We provide</h2>
            <li>All aspect of interior and exterior painting</li>
            <li>
              Bathroom design and instalation: Tilling, installing shower trays,
              baths and toilets
            </li>
            <li>Kitchens splash backs fire place lining and paneling</li>
            <li>Installing laminate flooring plasterboard</li>
            <li>
              All aspect of joinery work design manufacturing and installation.
              Doors, skirting, architraves installation on engineering floor
            </li>
          </ul>
        </Col>
        <Col className="hideMe"></Col>
      </Row>
    </Jumbotron>
  );
};

export default Services;
