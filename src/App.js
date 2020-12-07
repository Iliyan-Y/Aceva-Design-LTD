import { Container, Jumbotron, Carousel } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GrPhone } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import bg01 from './assets/background/bg01.jpg';
import bg04 from './assets/background/bg04.jpg';
import bg02 from './assets/background/bg02.jpg';
import NavBar from './components/navBar/navbar';

function App() {
  return (
    <Container className="mw-100 p-0">
      <NavBar />
      <Carousel
        id="home"
        className="row h-100 align-items-center justify-content-center text-center"
        controls={false}
        indicators={false}
        fade={true}
      >
        <Carousel.Item interval={2500}>
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
            <p>
              <GrPhone /> 000000000
            </p>
            <p>
              <HiOutlineMail /> example@me.com
            </p>
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
