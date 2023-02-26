import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { LiveProjects } from './components/LiveProjects';
import { Designs } from './components/Designs';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <LiveProjects />
      <Designs />
      <About />
      <Technologies />
    </Fragment>
  );
}

export default App;
