import React from 'react';
import { GrPhone } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { Jumbotron, Col, Row, Image } from 'react-bootstrap';
import bg02 from '../assets/background/bg02.jpg';

const ContactDetails = () => {
  return (
    <Jumbotron id="contact" fluid className="m-0">
      <Row className="align-items-center justify-content-center text-center">
        <Col>
          <Image fluid src={bg02} />
        </Col>
        <Col>
          <h1> Contact: </h1>
          <p>
            <GrPhone /> +44 0000000000
          </p>
          <p>
            <HiOutlineMail /> example@me.com
          </p>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default ContactDetails;
