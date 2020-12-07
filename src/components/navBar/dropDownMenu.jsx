import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const DropDownMenu = () => {
  return (
    // <NavDropdown title="Services" id="basic-nav-dropdown">
    //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    // </NavDropdown>

    <AnchorLink offset="80" className="nav-link" href="#services">
      Services
    </AnchorLink>
  );
};

export default DropDownMenu;
