import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardguia from '../Card-guia/Cardguia';

const cardData = [
  {
    title: 'Hajj y Umrah: Nuevo IVA = Nuevo aumento de precios',
    text: 'Hajj y Umrah y el nuevo IVA: Hajj y Umrah: El coste económico (y financiero) de la crisis sanitaria que vivimos...',
    imgSrc: '/images/imagen1.jpg',
  },
  {
    title: 'Fechas del Hajj 2022: los días imprescindibles para recordar',
    text: 'DSi planeas realizar Hajj 2022 inshaAllah (1443H), te ofrezco aquí un resumen de las principales fechas para recordar. Como recordatorio, este seguirá siendo...',
    imgSrc: '/images/imagen2.jpg',
  },
  {
    title: 'Umrah: Nuevas condiciones',
    text: 'Umrah en la Pandemia Umrah: El ministerio saudita de hajj y umrah ha establecido las condiciones para ingresar al reino con...',
    imgSrc: '/images/imagen3.jpg',
  },
  {
    title: 'Nuevo en Madina: camino peatonal para conectar el Haram con la Mezquita Quba',
    text: 'Mezquita Quba El 15 de Ramadán 1442 (27 de abril de 2021) el municipio de Medina inauguró el nuevo camino peatonal...',
    imgSrc: '/images/imagen3.jpg',
  },
  {
    title: 'Title 3',
    text: 'Description for card 3',
    imgSrc: '/images/imagen3.jpg',
  },
  {
    title: 'Title 3',
    text: 'Description for card 3',
    imgSrc: '/images/imagen3.jpg',
  },
  {
    title: 'Title 3',
    text: 'Description for card 3',
    imgSrc: '/images/imagen3.jpg',
  },
  {
    title: 'Title 4',
    text: 'Description for card 4',
    imgSrc: '/images/imagen4.jpg',
  },
  // Añade más objetos según sea necesario
];

function Guia_umrah() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '0', padding: '0' }}>
      <header className="bg-dark text-white py-3" style={{ borderBottom: '#0779e4 3px solid' }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h1 className="h3 mb-3 mb-md-0">Guía de la Umrah a La Meca</h1>
          <nav>
            <ul className="list-unstyled d-flex m-0">
              <li className="mx-2">
                <a href="#preparativos" className="text-white text-uppercase text-decoration-none">Preparativos</a>
              </li>
              <li className="mx-2">
                <a href="#rituales" className="text-white text-uppercase text-decoration-none">Rituales</a>
              </li>
              <li className="mx-2">
                <a href="#finalizacion" className="text-white text-uppercase text-decoration-none">Finalización</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-3 mb-4 mt-5" key={index}>
              <Cardguia
                title={card.title}
                text={card.text}
                imgSrc={card.imgSrc}
              />
            </div>
          ))}
        </div>
        <section id="preparativos" className="container my-3">
          <h2>Preparativos</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="/images/imagen2.jpg" alt="Preparativos" className="img-fluid border-primary rounded-5" />
            </div>
            <div className="col-md-8 p-3 ">
              <p>Antes de comenzar la Umrah, los peregrinos deben hacer varios preparativos, incluyendo la purificación física y la intención (niyyah) para realizar la Umrah. Es importante vestirse con el ihram, que son dos piezas de tela blanca sin costuras para los hombres, y ropa modesta para las mujeres.</p>
            </div>
          </div>
        </section>
        <section id="rituales" className="container my-4">
          <h2>Rituales de la Umrah</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="/images/imagen3.jpg" alt="Kaaba" className="img-fluid border-primary rounded-5" />
            </div>
            <div className="col-md-8">
              <p>La Umrah incluye varios rituales importantes:</p>
              <ul>
                <li><strong>Tawaf:</strong> Circunvalar la Kaaba siete veces en sentido contrario a las agujas del reloj.</li>
                <li><strong>Sa'i:</strong> Caminar siete veces entre los montes de Safa y Marwah.</li>
                <li><strong>Recorte o afeitado del cabello:</strong> Para hombres, es común afeitarse la cabeza, mientras que las mujeres deben cortar un pequeño mechón de su cabello.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="finalizacion" className="container my-4">
          <h2>Finalización de la Umrah</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="/images/imagen5.jpg" alt="Mezquita en La Meca" className="img-fluid border-primary rounded-5" />
            </div>
            <div className="col-md-8">
              <p>Una vez completados los rituales, la Umrah se considera finalizada. Los peregrinos pueden continuar con otras formas de adoración y aprovechar su tiempo en La Meca para orar y reflexionar. Es un momento de gran significancia espiritual y emocional.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Guia_umrah;
