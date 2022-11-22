import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Program from './components/Program';
import Branch from './components/Branch';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Program />
      <Branch />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;