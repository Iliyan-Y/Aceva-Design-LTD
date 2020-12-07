import { Container } from 'react-bootstrap';

//components
import NavBar from './components/navBar/navbar';
import Home from './components/home/home';
import ContactDetails from './components/contactDeatails';
import About from './components/about';
import Services from './components/services';

function App() {
  return (
    <Container className="mw-100 p-0">
      <NavBar />
      <Home />
      <ContactDetails />
      <Services />
      <About />
    </Container>
  );
}

export default App;
