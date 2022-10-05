import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Program from './components/Program';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Program />
    </div>
  );
}

export default App;