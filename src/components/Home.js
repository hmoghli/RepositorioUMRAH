import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About'; // Importa el nuevo componente
import ImageGallery from './ImageGallery'; // Ajusta la ruta según tu estructura
import Form from './Form';

const Home = () => {
  return (
    <React.Fragment>
      <div
        className="container-fluid container1 d-flex justify-content-center align-items-center text-center"
        style={{
          height: '75vh',
          backgroundImage: 'url(/images/imagen12.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container1-content text-white px-3 py-5">
          <h1 className="fw-bold mb-4">VISITA MECA Y MEDINA CON</h1>
          <h1 className="display-1 fw-bold text-bright mb-4">UMRAH EXPERIENCE</h1>
          <p className="lead mb-4">
            Este es un párrafo de ejemplo que se coloca debajo del título. Aquí puedes incluir cualquier texto adicional que desees mostrar en tu página.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
            <button type="button" className="btn btn-primary btn-lg me-2 mb-2">
              Viajes grupales
            </button>
            <button type="button" className="btn btn-secondary btn-lg ms-2 mb-2">
              <Link className="nav-link text-white" to="/gallery">
                Gallery
              </Link>
            </button>
          </div>
        </div>
      </div>
      <About />
      <div className="my-5">
        <ImageGallery />
      </div>
      <div className="my-5">
        <Form />
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet"
      />
    </React.Fragment>
  );
};

export default Home;
