// BreweryInfo.js
import React from 'react';
import BreweryImage from '../src/assets/beer.jpg'; // Asegúrate de que la ruta es correcta

function BreweryInfo() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Nuestra Cervecería</h1>
        <div id='contain' className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {/* Texto de la reseña */}
          <div className="md:w-1/2">
            <p className="text-gray-600">
              Aquí va una breve reseña de la cervecería, contando un poco sobre la historia,
              la filosofía, los tipos de cerveza que ofrecen, y cualquier otra información
              interesante para los visitantes del sitio.
            </p>
          </div>
  
          {/* Imagen */}
          <div className="md:w-1/2">
            <img id='beer' src={BreweryImage} alt="Imagen de la Cervecería" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
  }
  
  export default BreweryInfo;
