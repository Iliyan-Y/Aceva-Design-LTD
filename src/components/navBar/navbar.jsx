import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import RenderLogo from './renderLogo';
import MainLinks from './mainLinks';
import DropDownMenu from './dropDownMenu';
import ContactInfo from './contactInfo';

const NavBar = () => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <RenderLogo />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Navbar.Collapse id="basic-navbar-nav">
          <MainLinks />
          <DropDownMenu />
        </Navbar.Collapse>
        <ContactInfo />
      </Nav>
    </Navbar>
  );
};

export default NavBar;
