import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { LiveProjects } from './components/LiveProjects';
import { Technologies } from './components/Technologies';
import { Designs } from './components/Designs';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <LiveProjects />
      <Designs />
      <Technologies />
    </Fragment>
  );
}

export default App;
