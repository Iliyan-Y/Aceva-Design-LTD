import React from 'react';
import { Container } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Caption = ({ textStyle }) => {
  return (
    <Container>
      <h4 className={textStyle}>
        Carpenter & builder services based in London, Kent and Essex adding to
        the quality value of your home !
      </h4>
      <AnchorLink offset="100" className="btn btn-primary" href="#contact">
        Contact Us
      </AnchorLink>
    </Container>
  );
};

export default Caption;
