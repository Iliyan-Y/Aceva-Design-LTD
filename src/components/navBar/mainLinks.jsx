import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MainLinks = () => {
  return (
    <>
      <AnchorLink className="nav-link" href="#home">
        Home
      </AnchorLink>
      <AnchorLink className="nav-link" href="#about">
        About
      </AnchorLink>
      <AnchorLink className="nav-link" href="#contact">
        Contact
      </AnchorLink>{' '}
    </>
  );
};

export default MainLinks;
