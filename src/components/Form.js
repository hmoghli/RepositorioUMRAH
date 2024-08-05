import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import './article.css'; // Importa el archivo CSS personalizado */

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.mensaje) newErrors.mensaje = 'El mensaje es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost/contact_form/submit_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) throw new Error('Error en la respuesta del servidor');

      const result = await response.text();
      alert(`Datos enviados:\n${result}`);
      setFormData({ nombre: '', email: '', mensaje: '' }); // Limpiar el formulario
    } catch (error) {
      alert(`Error al enviar el formulario: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5 py-5">
      <h2 className="text-center mb-4">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
          />
          {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
          />
          {errors.mensaje && <div className="text-danger">{errors.mensaje}</div>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
