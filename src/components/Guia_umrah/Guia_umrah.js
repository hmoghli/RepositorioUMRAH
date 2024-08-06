import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionAreaCard from '../ActionAreaCard'; // Asegúrate de que la ruta sea correcta
const Guia_umrah = () => {
  return (
    <div className="container py-5 about-container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <h1 className="display-4 text-center mb-4 about-title">Sobre Nosotros</h1>
          <p className="lead text-center mb-4 about-paragraph">
            Bienvenido a nuestra agencia de viajes especializada en Umrah. En [Nombre de la Agencia], nos dedicamos a ofrecer experiencias únicas y memorables para aquellos que buscan realizar su Umrah de manera cómoda y espiritual. Nuestro equipo de expertos se encarga de cada detalle para asegurar que su viaje sea lo más placentero y libre de estrés posible.
          </p>
          <p className="text-center about-paragraph">
            Contamos con años de experiencia en la industria del turismo religioso y ofrecemos paquetes personalizados para adaptarnos a sus necesidades específicas. Desde la reserva de vuelos y alojamientos hasta la organización de visitas guiadas y transporte, nos aseguramos de que cada aspecto de su viaje sea manejado con el máximo cuidado y atención.
          </p>
          <ActionAreaCard/>
          
        </div>
      </div>
    </div>
    
  );
};

export default Guia_umrah;