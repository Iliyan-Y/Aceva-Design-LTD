import {
  Navbar,
  Container,
  Nav,
  Jumbotron,
  Image,
  NavDropdown,
  Carousel,
} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo01 from './assets/Logo01.png';
import { GrPhone } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import bg01 from './assets/background/bg01.jpg';
import bg04 from './assets/background/bg04.jpg';
import bg02 from './assets/background/bg02.jpg';

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

      <Carousel
        id="home"
        className="row h-100 align-items-center justify-content-center text-center"
        controls={false}
        indicators={false}
        fade={true}
      >
        <Carousel.Item interval={1500}>
          <img className="w-100" src={bg01} alt="First slide" />
          <Carousel.Caption className="row h-100 align-items-center justify-content-center text-center">
            <span className="h4">
              Carpenter & Builder services based in London POTTERS BAR,
              GUILDFORD, SURREY, WINDSOR, NEWBURY, READING OXFORD ADDING TO THE
              QUALITY VALUE OF YOUR HOME
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="w-100" src={bg04} alt="Third slide" />
          <Carousel.Caption className="row h-100 align-items-center justify-content-center text-center">
            <span className="h4 ">
              Carpenter & Builder services based in London POTTERS BAR,
              GUILDFORD, SURREY, WINDSOR, NEWBURY, READING OXFORD ADDING TO THE
              QUALITY VALUE OF YOUR HOME
            </span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
