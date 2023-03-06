import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { LiveProjects } from './components/LiveProjects';
import { Designs } from './components/Designs';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Footer } from './components/Footer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Home />
      <LiveProjects />
      <Designs />
      <About />
      <Technologies />
      <Footer />
    </Fragment>
  );
}

export default App;
