import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import './article.css'; // Importa el archivo CSS personalizado */

const Hero = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '75vh', backgroundImage: 'url(/images/fondo.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="text-center text-white">
        <h1 className="fw-bold">VISITA MECA Y MEDINA CON</h1>
        <h1 className="display-1 fw-bold text-bright">UMRAH EXPERIENCE</h1>
        <p className="lead">Este es un párrafo de ejemplo que se coloca debajo del título. Aquí puedes incluir cualquier texto adicional que desees mostrar en tu página.</p>
        <div className="d-flex flex-wrap justify-content-center">
          <button type="button" className="btn btn-primary btn-lg me-2 mb-2">Viajes grupales</button>
          <button type="button" className="btn btn-secondary btn-lg ms-2 mb-2">Organiza tu viaje</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
