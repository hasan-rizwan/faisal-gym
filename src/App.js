import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Program from './components/Program';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Program />
      <WhyUs />
    </div>
  );
}

export default App;