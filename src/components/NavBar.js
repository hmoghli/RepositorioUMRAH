import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.png'; // Asegúrate de que la ruta sea correcta
/*import './article.css'; // Importa el archivo CSS personalizado */

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Brand Logo" style={{ height: '40px' }} /> {/* Ajusta la altura según sea necesario */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">Galeria</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guia_umrah">Guia de la umrah</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">Contáctanos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">Destinos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
