import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Program from './components/Program';
// import WhyUs from './components/WhyUs';
import Branch from './components/Branch';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Program />
      {/* <WhyUs /> */}
      <Branch />
    </div>
  );
}

export default App;