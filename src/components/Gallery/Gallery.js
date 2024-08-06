import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './Gallery.css'; // Asegúrate de que este archivo exista y contenga los estilos CSS necesarios

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imágenes para la galería
  const images = [
    '/images/imagen1.jpg',
    '/images/imagen2.jpg',
    '/images/imagen3.jpg',
    '/images/imagen4.jpg',
    '/images/imagen5.jpg',
    '/images/imagen6.jpg',
    '/images/imagen7.jpg',
    '/images/imagen8.jpg',
    '/images/imagen9.jpg',
  ];

  // Muestra el modal con la imagen seleccionada
  const handleShow = (index) => {
    setCurrentImage(images[index]);
    setCurrentIndex(index);
    setShowModal(true);
  };

  // Cierra el modal
  const handleClose = () => setShowModal(false);

  // Muestra la siguiente imagen en la galería
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Muestra la imagen anterior en la galería
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Galería</h2>

      {/* Contenedor de la galería */}
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => handleShow(index)}>
            <img src={image} alt={`Gallery Item ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>

      {/* Modal de Bootstrap */}
      <Modal show={showModal} onHide={handleClose} centered className="custom-modal">
        <Modal.Body>
          <img src={currentImage} alt="Large View" className="modal-img" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePrevious}>Previous</Button>
          <Button variant="secondary" onClick={handleNext}>Next</Button>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;
