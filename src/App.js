import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { LiveProjects } from './components/LiveProjects';
import { Technologies } from './components/Technologies';

function App() {
  return (
    <section>
      <Header />
      <LiveProjects />
      <Technologies />
    </section>
  );
}

export default App;
