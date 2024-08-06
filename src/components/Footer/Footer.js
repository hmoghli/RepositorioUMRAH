import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
/*import './article.css'; // Importa el archivo CSS personalizado */

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>We provide exceptional travel experiences to the most iconic religious destinations.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@umrahexperience.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
         <ul className="list-unstyled d-flex">
            <li><a href="https://www.facebook.com" className="text-white me-3"><i className="bi bi-facebook"></i></a></li>
            <li><a href="https://www.twitter.com" className="text-white me-3"><i className="bi bi-twitter"></i></a></li>
            <li><a href="https://www.instagram.com" className="text-white me-3"><i className="bi bi-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com" className="text-white me-3"><i className="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-3">
          <p>&copy; 2024 Umrah Experience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
