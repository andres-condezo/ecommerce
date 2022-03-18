import { Container } from 'react-bootstrap';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomeScreen from './screens/HomeScreen.jsx';

const App = () => {
  return (
    <>
    <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
    <Footer />
    </>
  );
}

export default App;
