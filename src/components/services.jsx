import React from 'react';
import { Jumbotron, Image, Row, Col } from 'react-bootstrap';
import bg07 from '../assets/background/bg07.jpg';
import bg10 from '../assets/background/bg10.jpg';

const Services = () => {
  return (
    <Jumbotron id="services" fluid className="m-0">
      <Row className="justify-content-center">
        <h3 style={{ fontFamily: ' Courier, monospace' }}>We provide</h3>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col>
          <Image src={bg07} fluid />
        </Col>
        <Col>
          <ul className="h4">
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
        <Col>
          <Image src={bg10} fluid />
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Services;
