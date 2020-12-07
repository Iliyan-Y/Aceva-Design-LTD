import React from 'react';
import { Nav } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const RenderLogo = () => {
  return (
    <Nav className="mx-auto">
      <AnchorLink
        href="#home"
        className="h1"
        style={{
          fontFamily: 'Courier, monospace',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Aseva Design
      </AnchorLink>
    </Nav>
  );
};

export default RenderLogo;
