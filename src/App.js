import './App.css';
import './components/Header/Header'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Qualifications from './components/Qualifications/Qualifications';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';

function App() {
  return (
    <div className="App">
      <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Qualifications />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
      </>
    </div>
  );
}

export default App;
