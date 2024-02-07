import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.js";
import Footer from './components/Footer.js';
import PastEvents from './pages/PastEvents.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/hack4good" element={<Home />} />
        <Route path='/past-events' element={<PastEvents />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
