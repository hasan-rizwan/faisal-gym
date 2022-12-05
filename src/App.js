import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Home';
import Program from './components/Program';
import Branches from './components/Branches';
import Branch from './components/Branch';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './components/styles/breakpoints.css';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div><Navbar /><Hero /><Program /><Branches /><Footer /></div>} />
        {(pathname === '/branch/1' || pathname === '/branch/2' || pathname === '/branch/3' || pathname === '/branch/4' || pathname === '/branch/5') &&
          <Route path={'/branch/:id'} element={<div><Navbar branchNav={'reactRouter'} /><Branch /><Footer /></div>} />
        }
        <Route path="*" element={<div><NotFound /></div>} />
      </Routes>
    </div>
  );
}

export default App;