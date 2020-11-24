import {
  Navbar,
  Container,
  Nav,
  Jumbotron,
  Image,
  NavDropdown,
} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo01 from './assets/Logo01.png';
import { GrPhone } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';

function App() {
  return (
    <Container className="mw-100 p-0">
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <AnchorLink className="nav-link" href="#home">
              Home
            </AnchorLink>
            <AnchorLink className="nav-link" href="#about">
              About
            </AnchorLink>
            <AnchorLink className="nav-link" href="#contact">
              Contact
            </AnchorLink>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <AnchorLink href="#home" style={{ marginRight: '25%' }}>
          <Image src={Logo01} />
        </AnchorLink>
        <div>
          <p>
            <GrPhone /> Tel:0000000000
          </p>
          <p>
            <HiOutlineMail /> example@me.com
          </p>
        </div>
      </Navbar>

      <Jumbotron id="home" fluid style={{ height: '100vh' }} className="m-0">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="w-50">
            <h1> Carpenter Builder services based in London </h1>
            <h5>
              POTTERS BAR, GUILDFORD, SURREY, WINDSOR, NEWBURY, READING & OXFORD
              ADDING TO THE QUALITY VALUE OF YOUR HOME
            </h5>
          </div>
        </div>
      </Jumbotron>

      <Jumbotron id="contact" fluid style={{ height: '100vh' }} className="m-0">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div>
            <h1> Contact: </h1>
            <p>Tel: 000000000</p>
            <p>Email: example@me.com</p>
          </div>
        </div>
      </Jumbotron>

      <Jumbotron id="about" fluid style={{ height: '100vh' }} className="m-0">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div style={{ width: '50%' }}>
            <h1> Aceva Design LTD</h1>
            <p>
              Aceva Design was created in XXXX, through a working partnership
              between XXX and XXXX, both of whom have worked in the building and
              construction industry since the 1990s. Based in XXXX we work
              across the surrounding areas of London and XXXX.
            </p>
          </div>
        </div>
      </Jumbotron>
    </Container>
  );
}

export default App;
