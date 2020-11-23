import { Navbar, Container, Nav, Jumbotron, Image } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo01 from './assets/Logo01.png';
import { GrPhone } from 'react-icons/gr';

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
          </Nav>
        </Navbar.Collapse>
        <AnchorLink href="#home" style={{ marginRight: '30%' }}>
          <Image src={Logo01} />
        </AnchorLink>
        <h3>
          <GrPhone /> Tel:0000000000
        </h3>
      </Navbar>

      <Jumbotron id="home" fluid style={{ height: '100vh' }} className="m-0">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <h1> Carpenters & BUILDERS BASED IN London </h1>
        </div>
      </Jumbotron>

      <Jumbotron fluid style={{ height: '100vh' }} className="m-0">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <h1> Contact: </h1>
        </div>
      </Jumbotron>

      <Jumbotron id="about" fluid style={{ height: '100vh' }} className="m-0">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <h1> About US: </h1>
        </div>
      </Jumbotron>
    </Container>
  );
}

export default App;
