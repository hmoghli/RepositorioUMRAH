// Gallery.js
import React, { useState } from 'react';
import './Gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/images/imagen1.jpg',
    '/images/imagen2.jpg',
    '/images/imagen3.jpg',
    '/images/imagen4.jpg',
    '/images/imagen5.jpg',
    '/images/imagen10.jpg',
    '/images/imagen7.jpg',
    '/images/imagen8.jpg',
    '/images/imagen9.jpg',
  ];

  const handleShow = (index) => {
    setCurrentImage(images[index]);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="container my-5">
      {/* Título de la galería */}
      <h2 className="text-center mb-4">Galería</h2>
      
      {/* Contenedor de la galería */}
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="gallery-item" onClick={() => handleShow(index)}>
              <img src={image} alt={`Gallery Item ${index + 1}`} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Bootstrap */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <img src={currentImage} alt="Large View" className="img-fluid" />
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

