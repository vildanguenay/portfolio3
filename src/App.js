import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { LiveProjects } from './components/LiveProjects';

function App() {
  return (
    <section>
      <Header />
      <LiveProjects />
    </section>
  );
}

export default App;
