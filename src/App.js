import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
