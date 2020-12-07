import { Container } from 'react-bootstrap';

//components
import NavBar from './components/navBar/navbar';
import Home from './components/home/home';
import ContactDetails from './components/contactDeatails';
import About from './components/about';

function App() {
  return (
    <Container className="mw-100 p-0">
      <NavBar />
      <Home />
      <ContactDetails />
      <About />
    </Container>
  );
}

export default App;
