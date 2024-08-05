import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Ofertas from './components/Ofertas';
import Home from './components/Home';
import Footer from './components/Footer';
import Guia_umrah from './components/Guia_umrah';
import './App.css';
import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Ofertas />} />
        <Route path="/guia_umrah" element={<Guia_umrah />} />
      </Routes>
      
      
      <Footer />
    </Router>
  );
};

export default App;
