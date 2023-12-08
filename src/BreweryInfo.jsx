// BreweryInfo.js
import React from 'react';
import BreweryImage from '../src/assets/img-cerv.png'; // Asegúrate de que la ruta es correcta

function BreweryInfo() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Descubre <strong className='color'>PROMPT</strong> La Cerveza del Futuro</h1>
        <div id='contain' className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
         
          <div  className="cont-text md:w-1/2">
            <p className="text-gray-600">
            Bienvenido al mundo de Prompt, donde la pasión por la cerveza se encuentra con la vanguardia de la tecnología.  <strong className='color'> En Prompt, redefinimos la elaboración cervecera, fusionando métodos tradicionales con innovaciones de la inteligencia artificial y la robótica para crear cervezas de calidad excepcional.</strong> Cada gota de cerveza Prompt es testimonio de nuestro compromiso con la excelencia, la sostenibilidad y el sabor inigualable.
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
