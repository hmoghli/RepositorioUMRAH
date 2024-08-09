/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Ofertas from './components/Ofertas/Ofertas';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Guia_umrah from './components/Guia_umrah/Guia_umrah';
import Gallery from './components/Gallery/Gallery';
import Contáctanos from './components/Contáctanos/Contáctanos';
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
        <Route path="/guia_umrah" element={<Guia_umrah />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contáctanos" element={<Contáctanos />} />
      </Routes>
      
      
      <Footer />
    </Router>
  );
};

export default App;
