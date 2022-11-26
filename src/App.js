import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Program from './components/Program';
import Branch from './components/Branch';
import Footer from './components/Footer';
import './components/styles/breakpoints.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Program />
      <Branch />
      <Footer />
    </div>
  );
}

export default App;