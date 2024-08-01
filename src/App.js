import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Ofertas from './components/Ofertas';
import Home from './components/Home';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
      
      <Footer />
    </Router>
  );
};

export default App;
