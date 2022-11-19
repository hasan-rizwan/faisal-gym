import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Program from './components/Program';
// import WhyUs from './components/WhyUs';
import Branch from './components/Branch';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Program />
      {/* <WhyUs /> */}
      <Branch />
      <Footer />
    </div>
  );
}

export default App;