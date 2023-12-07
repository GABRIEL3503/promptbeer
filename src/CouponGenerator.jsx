import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

function CouponForm() {
  const [formData, setFormData] = useState({
    name: '',
    dni: '',
    email: '',
    birthDate: '',
    bar: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [qrCode, setQrCode] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };
  const downloadQRCode = () => {
    // Selecciona solo el contenedor que quieres convertir en imagen.
    const qrCard = document.getElementById('qrContentToDownload');
    html2canvas(qrCard, { scale: 2 }) // Utiliza una escala mayor para mejorar la calidad de la imagen.
      .then((canvas) => {
        const img = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = img;
        link.download = 'codigo-qr.png'; // Puedes cambiar el nombre del archivo aquí.
        link.click();
      })
      .catch(err => {
        console.error('Error al descargar el QR como imagen', err);
      });
  };

  const canGenerateCode = () => {
    const age = calculateAge(formData.birthDate);
    if (age < 18) {
      alert('Debes ser mayor de 18 años para generar un cupón.');
      return false;
    }
    if (formData.dni.length < 7 || formData.dni.length > 8) {
      alert('El DNI debe tener entre 7 y 8 números.');
      return false;
    }
    const lastGenerated = localStorage.getItem(formData.dni);
    if (lastGenerated) {
      const lastDate = new Date(lastGenerated);
      if ((new Date() - lastDate) < 24 * 60 * 60 * 1000) {
        alert('Ya has generado un cupón en las últimas 24 horas.');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Obtener el registro anterior del localStorage
    const lastGeneratedData = localStorage.getItem(formData.dni);
    const now = new Date();
  
    if (lastGeneratedData) {
      const lastGeneratedTime = new Date(lastGeneratedData);
      const hoursDiff = (now - lastGeneratedTime) / (1000 * 60 * 60); // Convertir milisegundos a horas
  
      if (hoursDiff < 24) {
        // Si no han pasado 24 horas, se usa el código anterior
        setQrCode(lastGeneratedData); // Este debería ser el código QR almacenado, no el timestamp
        setSubmitted(true);
        alert('Ya has generado un código. Por favor, espera 24 horas para generar uno nuevo.');
        return;
      }
    }
  
    // Solo genera un nuevo código si han pasado 24 horas o no existe un código previo
    if (canGenerateCode()) {
      const urlToYourPage = 'https://gabriel3503.github.io/qrcervezeria/';
      // Suponiendo que quieres guardar tanto el código como el timestamp en localStorage
      const newGeneratedData = { qrCode: urlToYourPage, timestamp: now.toISOString() };
      localStorage.setItem(formData.dni, JSON.stringify(newGeneratedData)); // Guardar como JSON string
      setQrCode(urlToYourPage);
      setSubmitted(true);
    }
  };
  

  return (
    <div id="container-card" className="flex items-center justify-center min-h-screen bg-gray-100">
    {!submitted ? (
      <div id="card"  className="bg-white shadow-lg rounded-lg p-8 m-4 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
  
          <div>
            <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI:</label>
            <input
              id="dni"
              name="dni"
              type="text"
              required
              placeholder="DNI"
              value={formData.dni}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
  
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento:</label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              required
              value={formData.birthDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
  
          <div>
            <label htmlFor="bar" className="block text-sm font-medium text-gray-700">Selecciona el Bar:</label>
            <select
              id="bar"
              name="bar"
              required
              value={formData.bar}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            >
              <option value="">Selecciona una opción</option>
              <option value="bar1">Bar 1</option>
              <option value="bar2">Bar 2</option>
              {/* Agrega más opciones según los bares disponibles */}
            </select>
          </div>
  
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Generar Código
            </button>
          </div>
        </form>
      </div>
    ) : (
      <div className="bg-white p-5 shadow-lg rounded-lg border border-gray-200 text-center w-full max-w-md mx-auto">
      {/* Envuelve solo los elementos que deseas descargar en un div con un id único */}
      <div id="qrContentToDownload">
        <h2 className="text-2xl font-extrabold text-gray-700 mb-4">Código para retirar la cerveza</h2>
        <QRCode value={qrCode} size={256} />
        <p className="text-md text-gray-600 mt-4">
          Para retirarlo dirigite al bar y disfruta la frescura de Andes.
        </p>
      </div>
      {/* Coloca los botones fuera del div de descarga */}
      <div className="mt-4">
        <button
          onClick={downloadQRCode}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Descargar Código
        </button>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generar otro código
        </button>
      </div>
    </div>
    )}
  </div>
  
  
  );
}

export default CouponForm;
