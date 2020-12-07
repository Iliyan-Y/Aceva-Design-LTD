import { Container, Jumbotron } from 'react-bootstrap';
import { GrPhone } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
//components
import NavBar from './components/navBar/navbar';
import Home from './components/home/home';

function App() {
  return (
    <Container className="mw-100 p-0">
      <NavBar />
      <Home />
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
